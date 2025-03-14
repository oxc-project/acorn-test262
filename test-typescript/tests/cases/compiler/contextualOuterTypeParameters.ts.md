__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    841
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
        "name": "f",
        "optional": false,
        "range": [
          74,
          75
        ],
        "loc": {
          "end": {
            "column": 18,
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
          "name": "fun",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              79,
              98
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    },
                    "range": [
                      86,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          88,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        88,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    85,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 28,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                },
                "range": [
                  91,
                  98
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    94,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 3
                    },
                    "start": {
                      "column": 37,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                },
                "range": [
                  81,
                  84
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
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "range": [
                81,
                98
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            }
          },
          "range": [
            76,
            98
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 42,
            "line": 3
          }
        },
        "range": [
          99,
          105
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            101,
            105
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 44,
              "line": 3
            }
          }
        }
      },
      "range": [
        57,
        105
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "range": [
                      125,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "range": [
                            143,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 27,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          136,
                          144
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 20,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        135,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          156,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 6
                          },
                          "start": {
                            "column": 40,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        156,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 6
                        },
                        "start": {
                          "column": 40,
                          "line": 6
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
                          174,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 6
                          },
                          "start": {
                            "column": 58,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        174,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 6
                        },
                        "start": {
                          "column": 58,
                          "line": 6
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
                          167,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 6
                          },
                          "start": {
                            "column": 51,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        167,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 6
                        },
                        "start": {
                          "column": 51,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      135,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    120,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "range": [
                      190,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                              203,
                              204
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
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 7
                              },
                              "start": {
                                "column": 23,
                                "line": 7
                              }
                            },
                            "range": [
                              204,
                              214
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "range": [
                                  213,
                                  214
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
                                206,
                                214
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 7
                                },
                                "start": {
                                  "column": 25,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            203,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
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
                        201,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "extendsType": {
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
                              227,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 7
                              },
                              "start": {
                                "column": 46,
                                "line": 7
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
                                "column": 55,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
                              }
                            },
                            "range": [
                              228,
                              236
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                230,
                                236
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 7
                                },
                                "start": {
                                  "column": 49,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            227,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 7
                            },
                            "start": {
                              "column": 46,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        225,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 7
                        },
                        "start": {
                          "column": 44,
                          "line": 7
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
                          248,
                          253
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 7
                          },
                          "start": {
                            "column": 67,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        248,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 7
                        },
                        "start": {
                          "column": 67,
                          "line": 7
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
                          241,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 7
                          },
                          "start": {
                            "column": 60,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        241,
                        245
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 7
                        },
                        "start": {
                          "column": 60,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      201,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    185,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                114,
                256
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 5
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
                "name": "t",
                "optional": false,
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 3,
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
              109,
              256
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            107,
            108
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          107,
          257
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        107,
        258
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 8
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                269,
                288
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
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      },
                      "range": [
                        276,
                        279
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            278,
                            279
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          278,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 10
                          },
                          "start": {
                            "column": 18,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      275,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 21,
                      "line": 10
                    }
                  },
                  "range": [
                    281,
                    288
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      284,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  },
                  "range": [
                    271,
                    274
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
                          272,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        272,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  ]
                },
                "range": [
                  271,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              266,
              288
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "range": [
                      307,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "range": [
                            325,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 11
                            },
                            "start": {
                              "column": 27,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          318,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        317,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 11
                        },
                        "start": {
                          "column": 19,
                          "line": 11
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          338,
                          344
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 11
                          },
                          "start": {
                            "column": 40,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        338,
                        346
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 11
                        },
                        "start": {
                          "column": 40,
                          "line": 11
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
                          356,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 11
                          },
                          "start": {
                            "column": 58,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        356,
                        361
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 11
                        },
                        "start": {
                          "column": 58,
                          "line": 11
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
                          349,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 11
                          },
                          "start": {
                            "column": 51,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        349,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 11
                        },
                        "start": {
                          "column": 51,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      317,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    302,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "range": [
                      372,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 9,
                        "line": 12
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                              385,
                              386
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 12
                              },
                              "start": {
                                "column": 22,
                                "line": 12
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
                                "line": 12
                              },
                              "start": {
                                "column": 23,
                                "line": 12
                              }
                            },
                            "range": [
                              386,
                              396
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "range": [
                                  395,
                                  396
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                388,
                                396
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 12
                                },
                                "start": {
                                  "column": 25,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            385,
                            396
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 22,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        383,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 12
                        },
                        "start": {
                          "column": 20,
                          "line": 12
                        }
                      }
                    },
                    "extendsType": {
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
                              409,
                              410
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 12
                              },
                              "start": {
                                "column": 46,
                                "line": 12
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
                                "column": 55,
                                "line": 12
                              },
                              "start": {
                                "column": 47,
                                "line": 12
                              }
                            },
                            "range": [
                              410,
                              418
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                412,
                                418
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 12
                                },
                                "start": {
                                  "column": 49,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            409,
                            418
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 12
                            },
                            "start": {
                              "column": 46,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        407,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 12
                        },
                        "start": {
                          "column": 44,
                          "line": 12
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
                          430,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 12
                          },
                          "start": {
                            "column": 67,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        430,
                        435
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 12
                        },
                        "start": {
                          "column": 67,
                          "line": 12
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
                          423,
                          427
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 12
                          },
                          "start": {
                            "column": 60,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        423,
                        427
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 12
                        },
                        "start": {
                          "column": 60,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      383,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    367,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                296,
                438
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 36,
                  "line": 10
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
                "name": "t",
                "optional": false,
                "range": [
                  291,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 31,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              291,
              438
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 31,
                "line": 10
              }
            }
          },
          "range": [
            266,
            438
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
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
        260,
        439
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              },
              "range": [
                450,
                469
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
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      },
                      "range": [
                        457,
                        460
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            459,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 18,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          459,
                          460
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      456,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 21,
                      "line": 15
                    }
                  },
                  "range": [
                    462,
                    469
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      465,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  },
                  "range": [
                    452,
                    455
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
                          453,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        453,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  ]
                },
                "range": [
                  452,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              447,
              469
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "range": [
                      500,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "range": [
                            518,
                            519
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 16
                            },
                            "start": {
                              "column": 27,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          511,
                          519
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 16
                          },
                          "start": {
                            "column": 20,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        510,
                        522
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 16
                        },
                        "start": {
                          "column": 19,
                          "line": 16
                        }
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          531,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 16
                          },
                          "start": {
                            "column": 40,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        531,
                        539
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 16
                        },
                        "start": {
                          "column": 40,
                          "line": 16
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
                          549,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 16
                          },
                          "start": {
                            "column": 58,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        549,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 16
                        },
                        "start": {
                          "column": 58,
                          "line": 16
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
                          542,
                          546
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 16
                          },
                          "start": {
                            "column": 51,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        542,
                        546
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 16
                        },
                        "start": {
                          "column": 51,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      510,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 16
                      },
                      "start": {
                        "column": 19,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    495,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsObject",
                    "optional": false,
                    "range": [
                      565,
                      573
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 17
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                              578,
                              579
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 17
                              },
                              "start": {
                                "column": 22,
                                "line": 17
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
                                "line": 17
                              },
                              "start": {
                                "column": 23,
                                "line": 17
                              }
                            },
                            "range": [
                              579,
                              589
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "range": [
                                  588,
                                  589
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                581,
                                589
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 17
                                },
                                "start": {
                                  "column": 25,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            578,
                            589
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 17
                            },
                            "start": {
                              "column": 22,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        576,
                        591
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 17
                        },
                        "start": {
                          "column": 20,
                          "line": 17
                        }
                      }
                    },
                    "extendsType": {
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
                              602,
                              603
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 17
                              },
                              "start": {
                                "column": 46,
                                "line": 17
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
                                "column": 55,
                                "line": 17
                              },
                              "start": {
                                "column": 47,
                                "line": 17
                              }
                            },
                            "range": [
                              603,
                              611
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                605,
                                611
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 17
                                },
                                "start": {
                                  "column": 49,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            602,
                            611
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 17
                            },
                            "start": {
                              "column": 46,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        600,
                        613
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 17
                        },
                        "start": {
                          "column": 44,
                          "line": 17
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
                          623,
                          628
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 17
                          },
                          "start": {
                            "column": 67,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        623,
                        628
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 17
                        },
                        "start": {
                          "column": 67,
                          "line": 17
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
                          616,
                          620
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 17
                          },
                          "start": {
                            "column": 60,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        616,
                        620
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 17
                        },
                        "start": {
                          "column": 60,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      576,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    560,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
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
                489,
                631
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 48,
                  "line": 15
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                481,
                485
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 15
                },
                "start": {
                  "column": 40,
                  "line": 15
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  486,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 15
                  },
                  "start": {
                    "column": 45,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              472,
              631
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 31,
                "line": 15
              }
            }
          },
          "range": [
            447,
            631
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        441,
        632
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              },
              "range": [
                643,
                669
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
                      "name": "f",
                      "optional": false,
                      "range": [
                        647,
                        648
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 20
                        },
                        "start": {
                          "column": 13,
                          "line": 20
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
                          "line": 20
                        },
                        "start": {
                          "column": 14,
                          "line": 20
                        }
                      },
                      "range": [
                        648,
                        667
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
                                  "column": 24,
                                  "line": 20
                                },
                                "start": {
                                  "column": 21,
                                  "line": 20
                                }
                              },
                              "range": [
                                655,
                                658
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    657,
                                    658
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  657,
                                  658
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 20
                                  }
                                }
                              }
                            },
                            "range": [
                              654,
                              658
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 20
                              },
                              "start": {
                                "column": 20,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 20
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          },
                          "range": [
                            660,
                            667
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              663,
                              667
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 20
                              },
                              "start": {
                                "column": 29,
                                "line": 20
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 20
                            },
                            "start": {
                              "column": 16,
                              "line": 20
                            }
                          },
                          "range": [
                            650,
                            653
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
                                  651,
                                  652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 20
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                651,
                                652
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 20
                                },
                                "start": {
                                  "column": 17,
                                  "line": 20
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          650,
                          667
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 16,
                            "line": 20
                          }
                        }
                      }
                    },
                    "range": [
                      647,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  645,
                  669
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              640,
              669
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    678,
                    679
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
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    679,
                    837
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "TSTypeAliasDeclaration",
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isArray",
                          "optional": false,
                          "range": [
                            698,
                            705
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 22
                            },
                            "start": {
                              "column": 13,
                              "line": 22
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "range": [
                                  716,
                                  717
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                709,
                                717
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 22
                                },
                                "start": {
                                  "column": 24,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              708,
                              720
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
                                "line": 22
                              }
                            }
                          },
                          "extendsType": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSStringKeyword",
                              "range": [
                                729,
                                735
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 22
                                },
                                "start": {
                                  "column": 44,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              729,
                              737
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 22
                              },
                              "start": {
                                "column": 44,
                                "line": 22
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
                                747,
                                752
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 22
                                },
                                "start": {
                                  "column": 62,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              747,
                              752
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 22
                              },
                              "start": {
                                "column": 62,
                                "line": 22
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
                                740,
                                744
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 22
                                },
                                "start": {
                                  "column": 55,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              740,
                              744
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 22
                              },
                              "start": {
                                "column": 55,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            708,
                            752
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 22
                            },
                            "start": {
                              "column": 23,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          693,
                          753
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      {
                        "type": "TSTypeAliasDeclaration",
                        "declare": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IsObject",
                          "optional": false,
                          "range": [
                            767,
                            775
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 23
                            },
                            "start": {
                              "column": 13,
                              "line": 23
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
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
                                    780,
                                    781
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 26,
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
                                      "column": 37,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 23
                                    }
                                  },
                                  "range": [
                                    781,
                                    791
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "range": [
                                        790,
                                        791
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 23
                                        }
                                      }
                                    },
                                    "range": [
                                      783,
                                      791
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 23
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  780,
                                  791
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "range": [
                              778,
                              793
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 23
                              },
                              "start": {
                                "column": 24,
                                "line": 23
                              }
                            }
                          },
                          "extendsType": {
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
                                    804,
                                    805
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 50,
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
                                      "column": 59,
                                      "line": 23
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 23
                                    }
                                  },
                                  "range": [
                                    805,
                                    813
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      807,
                                      813
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 23
                                      },
                                      "start": {
                                        "column": 53,
                                        "line": 23
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  804,
                                  813
                                ],
                                "loc": {
                                  "end": {
                                    "column": 59,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 23
                                  }
                                }
                              }
                            ],
                            "range": [
                              802,
                              815
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 23
                              },
                              "start": {
                                "column": 48,
                                "line": 23
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
                                825,
                                830
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 23
                                },
                                "start": {
                                  "column": 71,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              825,
                              830
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 23
                              },
                              "start": {
                                "column": 71,
                                "line": 23
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
                                818,
                                822
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 23
                                },
                                "start": {
                                  "column": 64,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              818,
                              822
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 23
                              },
                              "start": {
                                "column": 64,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            778,
                            830
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 23
                            },
                            "start": {
                              "column": 24,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          762,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      683,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 21
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        680,
                        681
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 21
                        },
                        "start": {
                          "column": 6,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 24
                    },
                    "start": {
                      "column": 5,
                      "line": 21
                    }
                  }
                },
                "range": [
                  678,
                  837
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              672,
              839
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 38,
                "line": 20
              }
            }
          },
          "range": [
            640,
            839
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        634,
        840
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 25
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
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
