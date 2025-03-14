__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    105,
    814
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                156,
                157
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 3
                },
                "start": {
                  "column": 51,
                  "line": 3
                }
              }
            },
            "range": [
              149,
              158
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          }
        ],
        "range": [
          147,
          160
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 3
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          114,
          117
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
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
                "line": 3
              },
              "start": {
                "column": 34,
                "line": 3
              }
            },
            "range": [
              139,
              142
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  141,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
                    "line": 3
                  }
                }
              },
              "range": [
                141,
                142
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 36,
                  "line": 3
                }
              }
            }
          },
          "range": [
            138,
            142
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 33,
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
            "column": 38,
            "line": 3
          }
        },
        "range": [
          143,
          146
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          },
          "range": [
            145,
            146
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 3
            },
            "start": {
              "column": 40,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          117,
          137
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
                "name": "Function",
                "optional": false,
                "range": [
                  128,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                128,
                136
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
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
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              118,
              136
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
        ]
      },
      "range": [
        105,
        160
      ],
      "loc": {
        "end": {
          "column": 55,
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
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              166,
              167
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            162,
            165
          ],
          "loc": {
            "end": {
              "column": 3,
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
          162,
          168
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        162,
        169
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
              "body": [],
              "range": [
                180,
                183
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              174,
              183
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            170,
            173
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          170,
          187
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        170,
        188
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              193,
              194
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                202,
                205
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              196,
              205
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            189,
            192
          ],
          "loc": {
            "end": {
              "column": 3,
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
          189,
          206
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
      "range": [
        189,
        207
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                274,
                275
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 9
                },
                "start": {
                  "column": 65,
                  "line": 9
                }
              }
            },
            "range": [
              267,
              276
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 9
              },
              "start": {
                "column": 58,
                "line": 9
              }
            }
          }
        ],
        "range": [
          265,
          278
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 9
          },
          "start": {
            "column": 56,
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
        "name": "foo2",
        "optional": false,
        "range": [
          218,
          222
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 9
              },
              "start": {
                "column": 48,
                "line": 9
              }
            },
            "range": [
              257,
              260
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  259,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 50,
                    "line": 9
                  }
                }
              },
              "range": [
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 9
                },
                "start": {
                  "column": 50,
                  "line": 9
                }
              }
            }
          },
          "range": [
            256,
            260
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 9
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 9
          },
          "start": {
            "column": 52,
            "line": 9
          }
        },
        "range": [
          261,
          264
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              263,
              264
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 9
              },
              "start": {
                "column": 54,
                "line": 9
              }
            }
          },
          "range": [
            263,
            264
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 9
            },
            "start": {
              "column": 54,
              "line": 9
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        },
        "range": [
          222,
          255
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
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
                        "column": 34,
                        "line": 9
                      },
                      "start": {
                        "column": 26,
                        "line": 9
                      }
                    },
                    "range": [
                      235,
                      243
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        237,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 28,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    234,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 36,
                    "line": 9
                  }
                },
                "range": [
                  245,
                  254
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    248,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 9
                    },
                    "start": {
                      "column": 39,
                      "line": 9
                    }
                  }
                }
              },
              "range": [
                233,
                254
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 24,
                  "line": 9
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
                223,
                224
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "out": false,
            "range": [
              223,
              254
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          }
        ]
      },
      "range": [
        209,
        278
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          288,
          308
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
              "name": "foo",
              "optional": false,
              "range": [
                294,
                297
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                297,
                305
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  299,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "value": null,
            "range": [
              294,
              306
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 8,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          286,
          287
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        280,
        308
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                315,
                344
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                              "column": 23,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
                            }
                          },
                          "range": [
                            325,
                            333
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              327,
                              333
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 15
                              },
                              "start": {
                                "column": 17,
                                "line": 15
                              }
                            }
                          }
                        },
                        "range": [
                          324,
                          333
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
                        }
                      },
                      "range": [
                        334,
                        342
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          336,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 26,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      319,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 9,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  317,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              314,
              344
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            314,
            344
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        310,
        345
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          359,
          374
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
              "name": "foo",
              "optional": false,
              "range": [
                365,
                368
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                  "column": 10,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              },
              "range": [
                368,
                371
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    370,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              }
            },
            "value": null,
            "range": [
              365,
              372
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          353,
          355
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 8,
            "line": 17
          }
        },
        "range": [
          355,
          358
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
                356,
                357
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              356,
              357
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        347,
        374
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              },
              "range": [
                382,
                404
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                              "line": 21
                            },
                            "start": {
                              "column": 19,
                              "line": 21
                            }
                          },
                          "range": [
                            395,
                            398
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                397,
                                398
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 21
                                },
                                "start": {
                                  "column": 21,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              397,
                              398
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 21
                              },
                              "start": {
                                "column": 21,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          394,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 21
                          },
                          "start": {
                            "column": 18,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 21
                        },
                        "start": {
                          "column": 23,
                          "line": 21
                        }
                      },
                      "range": [
                        399,
                        402
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            401,
                            402
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 21
                            },
                            "start": {
                              "column": 25,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          401,
                          402
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 21
                          },
                          "start": {
                            "column": 25,
                            "line": 21
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      },
                      "range": [
                        390,
                        393
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
                              391,
                              392
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 21
                              },
                              "start": {
                                "column": 15,
                                "line": 21
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            391,
                            392
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      386,
                      402
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
                  }
                ],
                "range": [
                  384,
                  404
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              380,
              404
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            380,
            404
          ],
          "loc": {
            "end": {
              "column": 28,
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
        376,
        405
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "r",
            "optional": false,
            "range": [
              411,
              412
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    424,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 23
                    },
                    "start": {
                      "column": 17,
                      "line": 23
                    }
                  }
                },
                "range": [
                  420,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                415,
                419
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "optional": false,
            "range": [
              415,
              435
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 23
              },
              "start": {
                "column": 8,
                "line": 23
              }
            }
          },
          "range": [
            411,
            435
          ],
          "loc": {
            "end": {
              "column": 28,
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
        407,
        436
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "r2",
            "optional": false,
            "range": [
              441,
              443
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    468,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      },
                      "range": [
                        453,
                        463
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            455,
                            461
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 24
                            },
                            "start": {
                              "column": 18,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          455,
                          463
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      452,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 15,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  451,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                446,
                450
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              446,
              470
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            441,
            470
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        437,
        471
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r6",
            "optional": false,
            "range": [
              476,
              478
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  486,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                481,
                485
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              481,
              488
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 25
              },
              "start": {
                "column": 9,
                "line": 25
              }
            }
          },
          "range": [
            476,
            488
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        472,
        489
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "r7",
            "optional": false,
            "range": [
              494,
              496
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  504,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                499,
                503
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              499,
              506
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            494,
            506
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        490,
        507
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r8",
            "optional": false,
            "range": [
              512,
              514
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    535,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 27,
                      "line": 27
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 27
                        },
                        "start": {
                          "column": 19,
                          "line": 27
                        }
                      },
                      "range": [
                        527,
                        530
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            529,
                            530
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 27
                            },
                            "start": {
                              "column": 21,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          529,
                          530
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 27
                          },
                          "start": {
                            "column": 21,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      526,
                      530
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 27
                      },
                      "start": {
                        "column": 18,
                        "line": 27
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 27
                    },
                    "start": {
                      "column": 14,
                      "line": 27
                    }
                  },
                  "range": [
                    522,
                    525
                  ],
                  "params": [
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
                          523,
                          524
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 27
                          },
                          "start": {
                            "column": 15,
                            "line": 27
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        523,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 27
                        },
                        "start": {
                          "column": 15,
                          "line": 27
                        }
                      }
                    }
                  ]
                },
                "range": [
                  522,
                  536
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
                    "line": 27
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                517,
                521
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              517,
              537
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            512,
            537
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        508,
        538
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "r11",
            "optional": false,
            "range": [
              564,
              567
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    597,
                    598
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 28
                    },
                    "start": {
                      "column": 37,
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 28
                        },
                        "start": {
                          "column": 23,
                          "line": 28
                        }
                      },
                      "range": [
                        583,
                        586
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            585,
                            586
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 28
                            },
                            "start": {
                              "column": 25,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          585,
                          586
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 28
                          },
                          "start": {
                            "column": 25,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      582,
                      586
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 28
                      },
                      "start": {
                        "column": 22,
                        "line": 28
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
                          "column": 32,
                          "line": 28
                        },
                        "start": {
                          "column": 29,
                          "line": 28
                        }
                      },
                      "range": [
                        589,
                        592
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "range": [
                            591,
                            592
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 28
                            },
                            "start": {
                              "column": 31,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          591,
                          592
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 28
                          },
                          "start": {
                            "column": 31,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      588,
                      592
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 28,
                        "line": 28
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 15,
                      "line": 28
                    }
                  },
                  "range": [
                    575,
                    581
                  ],
                  "params": [
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
                          576,
                          577
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 16,
                            "line": 28
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        576,
                        577
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
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
                        "name": "V",
                        "optional": false,
                        "range": [
                          579,
                          580
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 28
                          },
                          "start": {
                            "column": 19,
                            "line": 28
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        579,
                        580
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 28
                        },
                        "start": {
                          "column": 19,
                          "line": 28
                        }
                      }
                    }
                  ]
                },
                "range": [
                  575,
                  598
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 28
                  },
                  "start": {
                    "column": 15,
                    "line": 28
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                570,
                574
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
            "optional": false,
            "range": [
              570,
              599
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 10,
                "line": 28
              }
            }
          },
          "range": [
            564,
            599
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        560,
        600
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "r13",
            "optional": false,
            "range": [
              605,
              608
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "range": [
                  616,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 29
                  },
                  "start": {
                    "column": 15,
                    "line": 29
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                611,
                615
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 29
                },
                "start": {
                  "column": 10,
                  "line": 29
                }
              }
            },
            "optional": false,
            "range": [
              611,
              619
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 29
              },
              "start": {
                "column": 10,
                "line": 29
              }
            }
          },
          "range": [
            605,
            619
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        601,
        620
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "r14",
            "optional": false,
            "range": [
              625,
              628
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "range": [
                  636,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                631,
                635
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 10,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              631,
              639
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 30
              },
              "start": {
                "column": 10,
                "line": 30
              }
            }
          },
          "range": [
            625,
            639
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "var",
      "range": [
        621,
        640
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          672,
          688
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                674,
                677
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 32
                },
                "start": {
                  "column": 32,
                  "line": 32
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
                  "column": 43,
                  "line": 32
                },
                "start": {
                  "column": 35,
                  "line": 32
                }
              },
              "range": [
                677,
                685
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  679,
                  685
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 32
                  },
                  "start": {
                    "column": 37,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              674,
              686
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 32
              },
              "start": {
                "column": 32,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 32
          },
          "start": {
            "column": 30,
            "line": 32
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
            "name": "Function",
            "optional": false,
            "range": [
              663,
              671
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 32
              },
              "start": {
                "column": 21,
                "line": 32
              }
            }
          },
          "range": [
            663,
            671
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 32
            },
            "start": {
              "column": 21,
              "line": 32
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "range": [
          652,
          654
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 32
          }
        }
      },
      "range": [
        642,
        688
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 6,
                  "line": 33
                }
              },
              "range": [
                695,
                699
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F2",
                  "optional": false,
                  "range": [
                    697,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "range": [
                  697,
                  699
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              693,
              699
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            693,
            699
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        689,
        700
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "r16",
            "optional": false,
            "range": [
              705,
              708
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "range": [
                  716,
                  718
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                711,
                715
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 10,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              711,
              719
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 10,
                "line": 34
              }
            }
          },
          "range": [
            705,
            719
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        701,
        720
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    795,
                    796
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "range": [
                  790,
                  794
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                790,
                797
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              790,
              798
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    808,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "range": [
                  803,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "range": [
                803,
                810
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              803,
              811
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          784,
          813
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 62,
            "line": 36
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fff",
        "optional": false,
        "range": [
          731,
          734
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 9,
            "line": 36
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
                "column": 54,
                "line": 36
              },
              "start": {
                "column": 51,
                "line": 36
              }
            },
            "range": [
              773,
              776
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  775,
                  776
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 36
                  },
                  "start": {
                    "column": 53,
                    "line": 36
                  }
                }
              },
              "range": [
                775,
                776
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 36
                },
                "start": {
                  "column": 53,
                  "line": 36
                }
              }
            }
          },
          "range": [
            772,
            776
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 36
            },
            "start": {
              "column": 50,
              "line": 36
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
                "column": 60,
                "line": 36
              },
              "start": {
                "column": 57,
                "line": 36
              }
            },
            "range": [
              779,
              782
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  781,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 36
                  },
                  "start": {
                    "column": 59,
                    "line": 36
                  }
                }
              },
              "range": [
                781,
                782
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 36
                },
                "start": {
                  "column": 59,
                  "line": 36
                }
              }
            }
          },
          "range": [
            778,
            782
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 36
            },
            "start": {
              "column": 56,
              "line": 36
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 36
          },
          "start": {
            "column": 12,
            "line": 36
          }
        },
        "range": [
          734,
          771
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 36
                      },
                      "start": {
                        "column": 27,
                        "line": 36
                      }
                    },
                    "range": [
                      749,
                      755
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        751,
                        755
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 36
                        },
                        "start": {
                          "column": 29,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    747,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 36
                    },
                    "start": {
                      "column": 25,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                745,
                757
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 36
                },
                "start": {
                  "column": 23,
                  "line": 36
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
                735,
                736
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 13,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              735,
              757
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 36
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  769,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 36
                  },
                  "start": {
                    "column": 47,
                    "line": 36
                  }
                }
              },
              "range": [
                769,
                770
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 36
                },
                "start": {
                  "column": 47,
                  "line": 36
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                759,
                760
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 36
                },
                "start": {
                  "column": 37,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              759,
              770
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 36
              },
              "start": {
                "column": 37,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        722,
        813
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
