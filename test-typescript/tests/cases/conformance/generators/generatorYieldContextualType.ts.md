__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2752
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
        "name": "f1",
        "optional": false,
        "range": [
          17,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 32,
                "line": 1
              }
            },
            "range": [
              32,
              58
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                },
                "range": [
                  37,
                  58
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      49,
                      58
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            50,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 1
                            },
                            "start": {
                              "column": 50,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          50,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 1
                          },
                          "start": {
                            "column": 50,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            53,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 1
                            },
                            "start": {
                              "column": 53,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          53,
                          54
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 1
                          },
                          "start": {
                            "column": 53,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "range": [
                            56,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 1
                            },
                            "start": {
                              "column": 56,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          56,
                          57
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 1
                          },
                          "start": {
                            "column": 56,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 1
                      },
                      "start": {
                        "column": 49,
                        "line": 1
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "range": [
                      40,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
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
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 1
                    },
                    "start": {
                      "column": 40,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                34,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            }
          },
          "range": [
            29,
            58
          ],
          "loc": {
            "end": {
              "column": 58,
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
            "column": 65,
            "line": 1
          },
          "start": {
            "column": 59,
            "line": 1
          }
        },
        "range": [
          59,
          65
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            61,
            65
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 1
            },
            "start": {
              "column": 61,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        },
        "range": [
          19,
          28
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
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                23,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              23,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 23,
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
              "name": "S",
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
            "out": false,
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
        ]
      },
      "range": [
        0,
        66
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          101,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 3
                          },
                          "start": {
                            "column": 7,
                            "line": 3
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            111,
                            112
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
                        "delegate": false,
                        "range": [
                          105,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 3
                          },
                          "start": {
                            "column": 11,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        101,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 3
                        },
                        "start": {
                          "column": 7,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    95,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 1,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      122,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    115,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 1,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                92,
                126
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              79,
              126
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 2
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
            67,
            69
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            69,
            78
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  70,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
                    "line": 2
                  }
                }
              },
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
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
                  73,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              },
              "range": [
                73,
                74
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  76,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "range": [
                76,
                77
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 2,
              "line": 2
            }
          }
        },
        "range": [
          67,
          127
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        67,
        128
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
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
          147,
          149
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 7
              },
              "start": {
                "column": 32,
                "line": 7
              }
            },
            "range": [
              162,
              214
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 84,
                    "line": 7
                  },
                  "start": {
                    "column": 37,
                    "line": 7
                  }
                },
                "range": [
                  167,
                  214
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          179,
                          188
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "range": [
                                180,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 7
                                },
                                "start": {
                                  "column": 50,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              180,
                              181
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 7
                              },
                              "start": {
                                "column": 50,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                183,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 7
                                },
                                "start": {
                                  "column": 53,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              183,
                              184
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 7
                              },
                              "start": {
                                "column": 53,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                186,
                                187
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 7
                                },
                                "start": {
                                  "column": 56,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              186,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 7
                              },
                              "start": {
                                "column": 56,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 7
                          },
                          "start": {
                            "column": 49,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Generator",
                        "optional": false,
                        "range": [
                          170,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 7
                          },
                          "start": {
                            "column": 40,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        170,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 7
                        },
                        "start": {
                          "column": 40,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          205,
                          214
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "range": [
                                206,
                                207
                              ],
                              "loc": {
                                "end": {
                                  "column": 77,
                                  "line": 7
                                },
                                "start": {
                                  "column": 76,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              206,
                              207
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 7
                              },
                              "start": {
                                "column": 76,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                209,
                                210
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 7
                                },
                                "start": {
                                  "column": 79,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              209,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 7
                              },
                              "start": {
                                "column": 79,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "range": [
                                212,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 7
                                },
                                "start": {
                                  "column": 82,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              212,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 7
                              },
                              "start": {
                                "column": 82,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 7
                          },
                          "start": {
                            "column": 75,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsyncGenerator",
                        "optional": false,
                        "range": [
                          191,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 7
                          },
                          "start": {
                            "column": 61,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        191,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 7
                        },
                        "start": {
                          "column": 61,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    170,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 7
                    },
                    "start": {
                      "column": 40,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                164,
                214
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 7
                },
                "start": {
                  "column": 34,
                  "line": 7
                }
              }
            }
          },
          "range": [
            159,
            214
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 91,
            "line": 7
          },
          "start": {
            "column": 85,
            "line": 7
          }
        },
        "range": [
          215,
          221
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            217,
            221
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 7
            },
            "start": {
              "column": 87,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        },
        "range": [
          149,
          158
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
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              150,
              151
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
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
              "name": "R",
              "optional": false,
              "range": [
                153,
                154
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              153,
              154
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
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
              "name": "S",
              "optional": false,
              "range": [
                156,
                157
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
            "out": false,
            "range": [
              156,
              157
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
        ]
      },
      "range": [
        130,
        222
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": true,
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          263,
                          264
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 9
                          },
                          "start": {
                            "column": 7,
                            "line": 9
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            273,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "delegate": false,
                        "range": [
                          267,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 9
                          },
                          "start": {
                            "column": 11,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        263,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    257,
                    275
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 1,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      284,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    277,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 1,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                254,
                288
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 31,
                  "line": 8
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              235,
              288
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 8
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
            223,
            225
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
            225,
            234
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  226,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 8
                  },
                  "start": {
                    "column": 3,
                    "line": 8
                  }
                }
              },
              "range": [
                226,
                227
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 8
                },
                "start": {
                  "column": 3,
                  "line": 8
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
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  232,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              },
              "range": [
                232,
                233
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 8
            },
            "start": {
              "column": 2,
              "line": 8
            }
          }
        },
        "range": [
          223,
          289
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        223,
        290
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          328,
          369
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Back",
              "optional": false,
              "range": [
                332,
                336
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "range": [
              332,
              336
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cancel",
              "optional": false,
              "range": [
                340,
                346
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            },
            "range": [
              340,
              346
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LoadMore",
              "optional": false,
              "range": [
                350,
                358
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            "range": [
              350,
              358
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Noop",
              "optional": false,
              "range": [
                362,
                366
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 18
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            },
            "range": [
              362,
              366
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 2,
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
            "column": 15,
            "line": 14
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "range": [
          318,
          327
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "range": [
        313,
        369
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              395,
              530
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              479,
                              484
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 23
                              },
                              "start": {
                                "column": 18,
                                "line": 23
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            472,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 23
                            },
                            "start": {
                              "column": 11,
                              "line": 23
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"number\"",
                          "value": "number",
                          "range": [
                            489,
                            497
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 23
                            },
                            "start": {
                              "column": 28,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          472,
                          497
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "!=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "range": [
                              501,
                              510
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 23
                              },
                              "start": {
                                "column": 40,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "range": [
                              511,
                              516
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 23
                              },
                              "start": {
                                "column": 50,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            501,
                            517
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 23
                            },
                            "start": {
                              "column": 40,
                              "line": 23
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            521,
                            525
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
                        },
                        "range": [
                          501,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 23
                          },
                          "start": {
                            "column": 40,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        472,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      465,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  459,
                  530
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 24
                  },
                  "start": {
                    "column": 66,
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
                "name": "is",
                "optional": false,
                "range": [
                  411,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
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
                        "line": 22
                      },
                      "start": {
                        "column": 29,
                        "line": 22
                      }
                    },
                    "range": [
                      422,
                      437
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "range": [
                              424,
                              433
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 22
                              },
                              "start": {
                                "column": 31,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            424,
                            433
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 22
                            },
                            "start": {
                              "column": 31,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              436,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 22
                              },
                              "start": {
                                "column": 43,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            436,
                            437
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 22
                            },
                            "start": {
                              "column": 43,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        424,
                        437
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 22
                        },
                        "start": {
                          "column": 31,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    417,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 22
                  },
                  "start": {
                    "column": 45,
                    "line": 22
                  }
                },
                "range": [
                  438,
                  458
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
                      440,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 22
                      },
                      "start": {
                        "column": 47,
                        "line": 22
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 22
                      },
                      "start": {
                        "column": 56,
                        "line": 22
                      }
                    },
                    "range": [
                      449,
                      458
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Directive",
                        "optional": false,
                        "range": [
                          449,
                          458
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 22
                          },
                          "start": {
                            "column": 56,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        449,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 22
                        },
                        "start": {
                          "column": 56,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    440,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 22
                    },
                    "start": {
                      "column": 47,
                      "line": 22
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 20,
                    "line": 22
                  }
                },
                "range": [
                  413,
                  416
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
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 22
                        },
                        "start": {
                          "column": 21,
                          "line": 22
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 21,
                        "line": 22
                      }
                    }
                  }
                ]
              },
              "range": [
                402,
                530
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "range": [
          391,
          532
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 20,
            "line": 21
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          381,
          390
        ],
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "loc": {
          "end": {
            "column": 19,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "kind": "namespace",
      "range": [
        371,
        532
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          558,
          665
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "range": [
                562,
                567
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
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
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 7,
                  "line": 28
                }
              },
              "range": [
                567,
                575
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  569,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              562,
              576
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "range": [
                579,
                590
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 29
                },
                "start": {
                  "column": 14,
                  "line": 29
                }
              },
              "range": [
                591,
                599
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  593,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 29
                  },
                  "start": {
                    "column": 16,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              579,
              600
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "detail",
              "optional": false,
              "range": [
                603,
                609
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              },
              "range": [
                610,
                618
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  612,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              603,
              619
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "picked",
              "optional": false,
              "range": [
                622,
                628
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 2,
                  "line": 31
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              },
              "range": [
                629,
                638
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  631,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              622,
              639
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysShow",
              "optional": false,
              "range": [
                642,
                652
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              },
              "range": [
                653,
                662
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  655,
                  662
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              642,
              663
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 24,
            "line": 27
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickItem",
        "optional": false,
        "range": [
          544,
          557
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 27
          },
          "start": {
            "column": 10,
            "line": 27
          }
        }
      },
      "range": [
        534,
        665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          692,
          756
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "range": [
                696,
                707
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 36
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              },
              "range": [
                708,
                716
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  710,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 36
                  },
                  "start": {
                    "column": 16,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              696,
              717
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prompt",
              "optional": false,
              "range": [
                720,
                726
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 37
                },
                "start": {
                  "column": 2,
                  "line": 37
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              },
              "range": [
                727,
                735
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  729,
                  735
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              720,
              736
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "range": [
                739,
                744
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 38
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              },
              "range": [
                745,
                753
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  747,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              739,
              754
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 25,
            "line": 35
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickInputStep",
        "optional": false,
        "range": [
          677,
          691
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "range": [
        667,
        756
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          823,
          868
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "range": [
                827,
                838
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 42
                },
                "start": {
                  "column": 2,
                  "line": 42
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              },
              "range": [
                839,
                847
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  841,
                  847
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 42
                  },
                  "start": {
                    "column": 16,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              827,
              848
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "range": [
                851,
                856
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 43
                },
                "start": {
                  "column": 8,
                  "line": 43
                }
              },
              "range": [
                857,
                865
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  859,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 43
                  },
                  "start": {
                    "column": 10,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              851,
              866
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 65,
            "line": 41
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickStep",
        "optional": false,
        "range": [
          768,
          781
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 41
          },
          "start": {
            "column": 10,
            "line": 41
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 41
          },
          "start": {
            "column": 23,
            "line": 41
          }
        },
        "range": [
          781,
          822
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
                "name": "QuickPickItem",
                "optional": false,
                "range": [
                  792,
                  805
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 41
                  },
                  "start": {
                    "column": 34,
                    "line": 41
                  }
                }
              },
              "range": [
                792,
                805
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 41
                },
                "start": {
                  "column": 34,
                  "line": 41
                }
              }
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "range": [
                  808,
                  821
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 41
                  },
                  "start": {
                    "column": 50,
                    "line": 41
                  }
                }
              },
              "range": [
                808,
                821
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 41
                },
                "start": {
                  "column": 50,
                  "line": 41
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
                782,
                783
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 41
                },
                "start": {
                  "column": 24,
                  "line": 41
                }
              }
            },
            "out": false,
            "range": [
              782,
              821
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 41
              },
              "start": {
                "column": 24,
                "line": 41
              }
            }
          }
        ]
      },
      "range": [
        758,
        868
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepGenerator",
        "optional": false,
        "range": [
          875,
          888
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 46
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                904,
                1007
              ],
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "range": [
                          912,
                          925
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 48
                          },
                          "start": {
                            "column": 6,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        912,
                        925
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 48
                        },
                        "start": {
                          "column": 6,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "range": [
                          928,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 48
                          },
                          "start": {
                            "column": 22,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        928,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 48
                        },
                        "start": {
                          "column": 22,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    912,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 48
                    },
                    "start": {
                      "column": 6,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      960,
                      978
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              961,
                              965
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 49
                              },
                              "start": {
                                "column": 17,
                                "line": 49
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              968,
                              977
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 49
                              },
                              "start": {
                                "column": 24,
                                "line": 49
                              }
                            }
                          }
                        ],
                        "range": [
                          961,
                          977
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 49
                          },
                          "start": {
                            "column": 17,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 49
                      },
                      "start": {
                        "column": 16,
                        "line": 49
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "range": [
                      950,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 49
                      },
                      "start": {
                        "column": 6,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    950,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 49
                    },
                    "start": {
                      "column": 6,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        986,
                        989
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 50
                        },
                        "start": {
                          "column": 6,
                          "line": 50
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        992,
                        1001
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 50
                        },
                        "start": {
                          "column": 12,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "range": [
                    986,
                    1001
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 6,
                      "line": 50
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "range": [
                895,
                904
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              895,
              1007
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1026,
                1129
              ],
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "range": [
                          1034,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 53
                          },
                          "start": {
                            "column": 6,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1034,
                        1047
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 53
                        },
                        "start": {
                          "column": 6,
                          "line": 53
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "range": [
                          1050,
                          1064
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 53
                          },
                          "start": {
                            "column": 22,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1050,
                        1064
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 53
                        },
                        "start": {
                          "column": 22,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1034,
                    1064
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 53
                    },
                    "start": {
                      "column": 6,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1082,
                      1100
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "range": [
                              1083,
                              1087
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 54
                              },
                              "start": {
                                "column": 17,
                                "line": 54
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              1090,
                              1099
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 54
                              },
                              "start": {
                                "column": 24,
                                "line": 54
                              }
                            }
                          }
                        ],
                        "range": [
                          1083,
                          1099
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 54
                          },
                          "start": {
                            "column": 17,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 54
                      },
                      "start": {
                        "column": 16,
                        "line": 54
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "range": [
                      1072,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 54
                      },
                      "start": {
                        "column": 6,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1072,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 54
                    },
                    "start": {
                      "column": 6,
                      "line": 54
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1108,
                        1111
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 55
                        },
                        "start": {
                          "column": 6,
                          "line": 55
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        1114,
                        1123
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "range": [
                    1108,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 55
                    },
                    "start": {
                      "column": 6,
                      "line": 55
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 18,
                  "line": 52
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "range": [
                1012,
                1026
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              1012,
              1129
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          893,
          1129
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 56
          },
          "start": {
            "column": 2,
            "line": 47
          }
        }
      },
      "range": [
        870,
        1130
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepItemType",
        "optional": false,
        "range": [
          1137,
          1149
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
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
            "name": "T",
            "optional": false,
            "range": [
              1155,
              1156
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 58
              },
              "start": {
                "column": 23,
                "line": 58
              }
            }
          },
          "range": [
            1155,
            1156
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 58
            },
            "start": {
              "column": 23,
              "line": 58
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1178,
              1187
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1185,
                      1186
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 58
                      },
                      "start": {
                        "column": 53,
                        "line": 58
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1185,
                    1186
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 58
                    },
                    "start": {
                      "column": 53,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1179,
                  1186
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 58
                  },
                  "start": {
                    "column": 47,
                    "line": 58
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 58
              },
              "start": {
                "column": 46,
                "line": 58
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "range": [
              1165,
              1178
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 58
              },
              "start": {
                "column": 33,
                "line": 58
              }
            }
          },
          "range": [
            1165,
            1187
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 58
            },
            "start": {
              "column": 33,
              "line": 58
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1200,
                1201
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1200,
              1201
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "range": [
                1210,
                1224
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 60
                },
                "start": {
                  "column": 14,
                  "line": 60
                }
              }
            },
            "range": [
              1210,
              1224
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 60
              },
              "start": {
                "column": 14,
                "line": 60
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1240,
              1245
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          "trueType": {
            "type": "TSStringKeyword",
            "range": [
              1229,
              1235
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          "range": [
            1200,
            1245
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 60
            }
          }
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                1192,
                1193
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1192,
              1193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "range": [
            1192,
            1195
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 59
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        },
        "range": [
          1155,
          1245
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 62
          },
          "start": {
            "column": 23,
            "line": 58
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 58
          },
          "start": {
            "column": 17,
            "line": 58
          }
        },
        "range": [
          1149,
          1152
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
                1150,
                1151
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 58
                },
                "start": {
                  "column": 18,
                  "line": 58
                }
              }
            },
            "out": false,
            "range": [
              1150,
              1151
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 58
              },
              "start": {
                "column": 18,
                "line": 58
              }
            }
          }
        ]
      },
      "range": [
        1132,
        1246
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1272,
              1313
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Break",
                    "optional": false,
                    "range": [
                      1285,
                      1290
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 64
                      },
                      "start": {
                        "column": 15,
                        "line": 64
                      }
                    }
                  },
                  "init": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"BreakStep\"",
                        "value": "BreakStep",
                        "range": [
                          1300,
                          1311
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 64
                          },
                          "start": {
                            "column": 30,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        1293,
                        1299
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 64
                        },
                        "start": {
                          "column": 23,
                          "line": 64
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1293,
                      1312
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 64
                      },
                      "start": {
                        "column": 23,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1285,
                    1312
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 64
                    },
                    "start": {
                      "column": 15,
                      "line": 64
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1279,
                1313
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 64
                },
                "start": {
                  "column": 9,
                  "line": 64
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 43,
                "line": 64
              },
              "start": {
                "column": 2,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1268,
          1315
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 21,
            "line": 63
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1257,
          1267
        ],
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 63
          },
          "start": {
            "column": 10,
            "line": 63
          }
        }
      },
      "kind": "namespace",
      "range": [
        1247,
        1315
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "range": [
          1321,
          1331
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 66
          },
          "start": {
            "column": 5,
            "line": 66
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepResult",
                "optional": false,
                "range": [
                  1344,
                  1354
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 66
                  },
                  "start": {
                    "column": 28,
                    "line": 66
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Break",
                "optional": false,
                "range": [
                  1355,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 66
                  },
                  "start": {
                    "column": 39,
                    "line": 66
                  }
                }
              },
              "range": [
                1344,
                1360
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 66
                },
                "start": {
                  "column": 28,
                  "line": 66
                }
              }
            },
            "range": [
              1337,
              1360
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 66
              },
              "start": {
                "column": 21,
                "line": 66
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1363,
                1364
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 66
                },
                "start": {
                  "column": 47,
                  "line": 66
                }
              }
            },
            "range": [
              1363,
              1364
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 66
              },
              "start": {
                "column": 47,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1337,
          1364
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 66
          },
          "start": {
            "column": 21,
            "line": 66
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 66
          },
          "start": {
            "column": 15,
            "line": 66
          }
        },
        "range": [
          1331,
          1334
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
                1332,
                1333
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 66
                },
                "start": {
                  "column": 16,
                  "line": 66
                }
              }
            },
            "out": false,
            "range": [
              1332,
              1333
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 66
              },
              "start": {
                "column": 16,
                "line": 66
              }
            }
          }
        ]
      },
      "range": [
        1316,
        1365
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResultGenerator",
        "optional": false,
        "range": [
          1371,
          1390
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1409,
                1473
              ],
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "range": [
                          1410,
                          1423
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 68
                          },
                          "start": {
                            "column": 14,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1410,
                        1423
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 68
                        },
                        "start": {
                          "column": 14,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "range": [
                          1426,
                          1440
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 68
                          },
                          "start": {
                            "column": 30,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1426,
                        1440
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 68
                        },
                        "start": {
                          "column": 30,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "range": [
                    1410,
                    1440
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 68
                    },
                    "start": {
                      "column": 14,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1452,
                      1455
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
                            1453,
                            1454
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 68
                            },
                            "start": {
                              "column": 57,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1453,
                          1454
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 68
                          },
                          "start": {
                            "column": 57,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 68
                      },
                      "start": {
                        "column": 56,
                        "line": 68
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "range": [
                      1442,
                      1452
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 68
                      },
                      "start": {
                        "column": 46,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1442,
                    1455
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 68
                    },
                    "start": {
                      "column": 46,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1457,
                        1460
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 68
                        },
                        "start": {
                          "column": 61,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        1463,
                        1472
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 68
                        },
                        "start": {
                          "column": 67,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "range": [
                    1457,
                    1472
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 68
                    },
                    "start": {
                      "column": 61,
                      "line": 68
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 68
                },
                "start": {
                  "column": 13,
                  "line": 68
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "range": [
                1400,
                1409
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1400,
              1473
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1492,
                1580
              ],
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "range": [
                          1500,
                          1513
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 6,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1500,
                        1513
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 70
                        },
                        "start": {
                          "column": 6,
                          "line": 70
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "range": [
                          1516,
                          1530
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 70
                          },
                          "start": {
                            "column": 22,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1516,
                        1530
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 70
                        },
                        "start": {
                          "column": 22,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1500,
                    1530
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 70
                    },
                    "start": {
                      "column": 6,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1548,
                      1551
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
                            1549,
                            1550
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 71
                            },
                            "start": {
                              "column": 17,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1549,
                          1550
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 71
                          },
                          "start": {
                            "column": 17,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 71
                      },
                      "start": {
                        "column": 16,
                        "line": 71
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "range": [
                      1538,
                      1548
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 71
                      },
                      "start": {
                        "column": 6,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1538,
                    1551
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 71
                    },
                    "start": {
                      "column": 6,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        1559,
                        1562
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 72
                        },
                        "start": {
                          "column": 6,
                          "line": 72
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        1565,
                        1574
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 72
                        },
                        "start": {
                          "column": 12,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "range": [
                    1559,
                    1574
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 72
                    },
                    "start": {
                      "column": 6,
                      "line": 72
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 18,
                  "line": 69
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "range": [
                1478,
                1492
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1478,
              1580
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          1398,
          1580
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 73
          },
          "start": {
            "column": 2,
            "line": 68
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 67
          },
          "start": {
            "column": 24,
            "line": 67
          }
        },
        "range": [
          1390,
          1393
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
                1391,
                1392
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 67
                },
                "start": {
                  "column": 25,
                  "line": 67
                }
              }
            },
            "out": false,
            "range": [
              1391,
              1392
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 67
              },
              "start": {
                "column": 25,
                "line": 67
              }
            }
          }
        ]
      },
      "range": [
        1366,
        1581
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepSelection",
        "optional": false,
        "range": [
          1587,
          1600
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 74
          },
          "start": {
            "column": 5,
            "line": 74
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
            "name": "T",
            "optional": false,
            "range": [
              1606,
              1607
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 74
              },
              "start": {
                "column": 24,
                "line": 74
              }
            }
          },
          "range": [
            1606,
            1607
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 74
            },
            "start": {
              "column": 24,
              "line": 74
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1629,
              1638
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1636,
                      1637
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 74
                      },
                      "start": {
                        "column": 54,
                        "line": 74
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1636,
                    1637
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 74
                    },
                    "start": {
                      "column": 54,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1630,
                  1637
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 74
                  },
                  "start": {
                    "column": 48,
                    "line": 74
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 74
              },
              "start": {
                "column": 47,
                "line": 74
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "range": [
              1616,
              1629
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 74
              },
              "start": {
                "column": 34,
                "line": 74
              }
            }
          },
          "range": [
            1616,
            1638
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 74
            },
            "start": {
              "column": 34,
              "line": 74
            }
          }
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1663,
                1664
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              1663,
              1664
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "range": [
                1673,
                1687
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 76
                },
                "start": {
                  "column": 14,
                  "line": 76
                }
              }
            },
            "range": [
              1673,
              1687
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 76
              },
              "start": {
                "column": 14,
                "line": 76
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1715,
              1720
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  1692,
                  1698
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 77
                  },
                  "start": {
                    "column": 4,
                    "line": 77
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Directive",
                  "optional": false,
                  "range": [
                    1701,
                    1710
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 77
                    },
                    "start": {
                      "column": 13,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1701,
                  1710
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 77
                  },
                  "start": {
                    "column": 13,
                    "line": 77
                  }
                }
              }
            ],
            "range": [
              1692,
              1710
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          "range": [
            1663,
            1720
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 78
            },
            "start": {
              "column": 4,
              "line": 76
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1643,
                    1644
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1643,
                  1644
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "range": [
                1643,
                1646
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directive",
                "optional": false,
                "range": [
                  1649,
                  1658
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 75
                  },
                  "start": {
                    "column": 10,
                    "line": 75
                  }
                }
              },
              "range": [
                1649,
                1658
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 75
                },
                "start": {
                  "column": 10,
                  "line": 75
                }
              }
            }
          ],
          "range": [
            1643,
            1658
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 75
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        },
        "range": [
          1606,
          1720
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 78
          },
          "start": {
            "column": 24,
            "line": 74
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 74
          },
          "start": {
            "column": 18,
            "line": 74
          }
        },
        "range": [
          1600,
          1603
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
                1601,
                1602
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 74
                },
                "start": {
                  "column": 19,
                  "line": 74
                }
              }
            },
            "out": false,
            "range": [
              1601,
              1602
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 74
              },
              "start": {
                "column": 19,
                "line": 74
              }
            }
          }
        ]
      },
      "range": [
        1582,
        1721
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 78
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialStepState",
        "optional": false,
        "range": [
          1727,
          1743
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 79
          },
          "start": {
            "column": 5,
            "line": 79
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1766,
                1769
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
                      1767,
                      1768
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 79
                      },
                      "start": {
                        "column": 45,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1767,
                    1768
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 79
                    },
                    "start": {
                      "column": 45,
                      "line": 79
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 79
                },
                "start": {
                  "column": 44,
                  "line": 79
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "range": [
                1759,
                1766
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 79
                },
                "start": {
                  "column": 37,
                  "line": 79
                }
              }
            },
            "range": [
              1759,
              1769
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 79
              },
              "start": {
                "column": 37,
                "line": 79
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
                  "name": "counter",
                  "optional": false,
                  "range": [
                    1776,
                    1783
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 80
                    },
                    "start": {
                      "column": 2,
                      "line": 80
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
                      "line": 80
                    },
                    "start": {
                      "column": 9,
                      "line": 80
                    }
                  },
                  "range": [
                    1783,
                    1791
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1785,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 80
                      },
                      "start": {
                        "column": 11,
                        "line": 80
                      }
                    }
                  }
                },
                "range": [
                  1776,
                  1792
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 80
                  },
                  "start": {
                    "column": 2,
                    "line": 80
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "range": [
                    1795,
                    1802
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 81
                    },
                    "start": {
                      "column": 2,
                      "line": 81
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 81
                    },
                    "start": {
                      "column": 10,
                      "line": 81
                    }
                  },
                  "range": [
                    1803,
                    1812
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1805,
                      1812
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 81
                      },
                      "start": {
                        "column": 12,
                        "line": 81
                      }
                    }
                  }
                },
                "range": [
                  1795,
                  1813
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 81
                  },
                  "start": {
                    "column": 2,
                    "line": 81
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "range": [
                    1816,
                    1828
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 82
                    },
                    "start": {
                      "column": 2,
                      "line": 82
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 82
                    },
                    "start": {
                      "column": 15,
                      "line": 82
                    }
                  },
                  "range": [
                    1829,
                    1837
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1831,
                      1837
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 82
                      },
                      "start": {
                        "column": 17,
                        "line": 82
                      }
                    }
                  }
                },
                "range": [
                  1816,
                  1838
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 82
                  },
                  "start": {
                    "column": 2,
                    "line": 82
                  }
                }
              }
            ],
            "range": [
              1772,
              1840
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 83
              },
              "start": {
                "column": 50,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1759,
          1840
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 37,
            "line": 79
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 79
          },
          "start": {
            "column": 21,
            "line": 79
          }
        },
        "range": [
          1743,
          1756
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUnknownKeyword",
              "range": [
                1748,
                1755
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 79
                },
                "start": {
                  "column": 26,
                  "line": 79
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
                1744,
                1745
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 79
                },
                "start": {
                  "column": 22,
                  "line": 79
                }
              }
            },
            "out": false,
            "range": [
              1744,
              1755
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 79
              },
              "start": {
                "column": 22,
                "line": 79
              }
            }
          }
        ]
      },
      "range": [
        1722,
        1841
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepState",
        "optional": false,
        "range": [
          1847,
          1856
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1888,
                1889
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 84
                },
                "start": {
                  "column": 46,
                  "line": 84
                }
              }
            },
            "range": [
              1888,
              1889
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 84
              },
              "start": {
                "column": 46,
                "line": 84
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
                  "name": "counter",
                  "optional": false,
                  "range": [
                    1896,
                    1903
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 2,
                      "line": 85
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
                      "line": 85
                    },
                    "start": {
                      "column": 9,
                      "line": 85
                    }
                  },
                  "range": [
                    1903,
                    1911
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1905,
                      1911
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 85
                      },
                      "start": {
                        "column": 11,
                        "line": 85
                      }
                    }
                  }
                },
                "range": [
                  1896,
                  1912
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 85
                  },
                  "start": {
                    "column": 2,
                    "line": 85
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "range": [
                    1915,
                    1922
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 86
                    },
                    "start": {
                      "column": 2,
                      "line": 86
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 86
                    },
                    "start": {
                      "column": 10,
                      "line": 86
                    }
                  },
                  "range": [
                    1923,
                    1932
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1925,
                      1932
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 86
                      },
                      "start": {
                        "column": 12,
                        "line": 86
                      }
                    }
                  }
                },
                "range": [
                  1915,
                  1933
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 86
                  },
                  "start": {
                    "column": 2,
                    "line": 86
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "range": [
                    1936,
                    1948
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 87
                    },
                    "start": {
                      "column": 2,
                      "line": 87
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 87
                    },
                    "start": {
                      "column": 15,
                      "line": 87
                    }
                  },
                  "range": [
                    1949,
                    1957
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1951,
                      1957
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 87
                      },
                      "start": {
                        "column": 17,
                        "line": 87
                      }
                    }
                  }
                },
                "range": [
                  1936,
                  1958
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 87
                  },
                  "start": {
                    "column": 2,
                    "line": 87
                  }
                }
              }
            ],
            "range": [
              1892,
              1960
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 88
              },
              "start": {
                "column": 50,
                "line": 84
              }
            }
          }
        ],
        "range": [
          1888,
          1960
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 46,
            "line": 84
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 84
          },
          "start": {
            "column": 14,
            "line": 84
          }
        },
        "range": [
          1856,
          1885
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1867,
                  1884
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1868,
                      1874
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 84
                      },
                      "start": {
                        "column": 26,
                        "line": 84
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      1876,
                      1883
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 84
                      },
                      "start": {
                        "column": 34,
                        "line": 84
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 84
                  },
                  "start": {
                    "column": 25,
                    "line": 84
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  1861,
                  1867
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 84
                  },
                  "start": {
                    "column": 19,
                    "line": 84
                  }
                }
              },
              "range": [
                1861,
                1884
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 84
                },
                "start": {
                  "column": 19,
                  "line": 84
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
                1857,
                1858
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 84
                },
                "start": {
                  "column": 15,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              1857,
              1884
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 84
              },
              "start": {
                "column": 15,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        1842,
        1961
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 84
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
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                2144,
                2149
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 95
                },
                "start": {
                  "column": 9,
                  "line": 95
                }
              }
            },
            "range": [
              2137,
              2150
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 95
              },
              "start": {
                "column": 2,
                "line": 95
              }
            }
          }
        ],
        "range": [
          2133,
          2152
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 33,
            "line": 94
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "canPickStepContinue",
        "optional": false,
        "range": [
          1972,
          1991
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 90
          },
          "start": {
            "column": 9,
            "line": 90
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 10,
                "line": 91
              },
              "start": {
                "column": 7,
                "line": 91
              }
            },
            "range": [
              2025,
              2028
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2027,
                  2028
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 91
                  },
                  "start": {
                    "column": 9,
                    "line": 91
                  }
                }
              },
              "range": [
                2027,
                2028
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 91
                },
                "start": {
                  "column": 9,
                  "line": 91
                }
              }
            }
          },
          "range": [
            2020,
            2028
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 91
            },
            "start": {
              "column": 2,
              "line": 91
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 92
              },
              "start": {
                "column": 8,
                "line": 92
              }
            },
            "range": [
              2038,
              2056
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PartialStepState",
                "optional": false,
                "range": [
                  2040,
                  2056
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 92
                  },
                  "start": {
                    "column": 10,
                    "line": 92
                  }
                }
              },
              "range": [
                2040,
                2056
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 92
                },
                "start": {
                  "column": 10,
                  "line": 92
                }
              }
            }
          },
          "range": [
            2032,
            2056
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 92
            },
            "start": {
              "column": 2,
              "line": 92
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_selection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 93
              },
              "start": {
                "column": 12,
                "line": 93
              }
            },
            "range": [
              2070,
              2099
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2084,
                      2087
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
                            2085,
                            2086
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 93
                            },
                            "start": {
                              "column": 27,
                              "line": 93
                            }
                          }
                        },
                        "range": [
                          2085,
                          2086
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 93
                          },
                          "start": {
                            "column": 27,
                            "line": 93
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 93
                      },
                      "start": {
                        "column": 26,
                        "line": 93
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepItemType",
                    "optional": false,
                    "range": [
                      2072,
                      2084
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 93
                      },
                      "start": {
                        "column": 14,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    2072,
                    2087
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 93
                    },
                    "start": {
                      "column": 14,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Directive",
                    "optional": false,
                    "range": [
                      2090,
                      2099
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 93
                      },
                      "start": {
                        "column": 32,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    2090,
                    2099
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 93
                    },
                    "start": {
                      "column": 32,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                2072,
                2099
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 93
                },
                "start": {
                  "column": 14,
                  "line": 93
                }
              }
            }
          },
          "range": [
            2060,
            2099
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 93
            },
            "start": {
              "column": 2,
              "line": 93
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 94
          },
          "start": {
            "column": 1,
            "line": 94
          }
        },
        "range": [
          2101,
          2132
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_selection",
            "optional": false,
            "range": [
              2103,
              2113
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 94
              },
              "start": {
                "column": 3,
                "line": 94
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 94
              },
              "start": {
                "column": 17,
                "line": 94
              }
            },
            "range": [
              2117,
              2132
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2129,
                  2132
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
                        2130,
                        2131
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 94
                        },
                        "start": {
                          "column": 30,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2130,
                      2131
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 94
                      },
                      "start": {
                        "column": 30,
                        "line": 94
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 94
                  },
                  "start": {
                    "column": 29,
                    "line": 94
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepItemType",
                "optional": false,
                "range": [
                  2117,
                  2129
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 94
                  },
                  "start": {
                    "column": 17,
                    "line": 94
                  }
                }
              },
              "range": [
                2117,
                2132
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 94
                },
                "start": {
                  "column": 17,
                  "line": 94
                }
              }
            }
          },
          "range": [
            2103,
            2132
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 94
            },
            "start": {
              "column": 3,
              "line": 94
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 90
          },
          "start": {
            "column": 28,
            "line": 90
          }
        },
        "range": [
          1991,
          2016
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
                "name": "QuickPickStep",
                "optional": false,
                "range": [
                  2002,
                  2015
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 90
                  },
                  "start": {
                    "column": 39,
                    "line": 90
                  }
                }
              },
              "range": [
                2002,
                2015
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 90
                },
                "start": {
                  "column": 39,
                  "line": 90
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
                1992,
                1993
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 90
                },
                "start": {
                  "column": 29,
                  "line": 90
                }
              }
            },
            "out": false,
            "range": [
              1992,
              2015
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 90
              },
              "start": {
                "column": 29,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        1963,
        2152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 90
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
              "name": "step",
              "optional": false,
              "range": [
                2260,
                2264
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 101
                }
              }
            },
            "range": [
              2253,
              2265
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 101
              },
              "start": {
                "column": 2,
                "line": 101
              }
            }
          }
        ],
        "range": [
          2249,
          2267
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 20,
            "line": 100
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPickStep",
        "optional": false,
        "range": [
          2163,
          2177
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 99
              },
              "start": {
                "column": 6,
                "line": 99
              }
            },
            "range": [
              2210,
              2228
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2225,
                  2228
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
                        2226,
                        2227
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 99
                        },
                        "start": {
                          "column": 22,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2226,
                      2227
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 99
                      },
                      "start": {
                        "column": 22,
                        "line": 99
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 99
                  },
                  "start": {
                    "column": 21,
                    "line": 99
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "range": [
                  2212,
                  2225
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 99
                  },
                  "start": {
                    "column": 8,
                    "line": 99
                  }
                }
              },
              "range": [
                2212,
                2228
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 99
                },
                "start": {
                  "column": 8,
                  "line": 99
                }
              }
            }
          },
          "range": [
            2206,
            2228
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 99
            },
            "start": {
              "column": 2,
              "line": 99
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 19,
            "line": 100
          },
          "start": {
            "column": 1,
            "line": 100
          }
        },
        "range": [
          2230,
          2248
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2245,
              2248
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
                    2246,
                    2247
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 100
                    },
                    "start": {
                      "column": 17,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2246,
                  2247
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 100
                  },
                  "start": {
                    "column": 17,
                    "line": 100
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 100
              },
              "start": {
                "column": 16,
                "line": 100
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "range": [
              2232,
              2245
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 100
              },
              "start": {
                "column": 3,
                "line": 100
              }
            }
          },
          "range": [
            2232,
            2248
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 100
            },
            "start": {
              "column": 3,
              "line": 100
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 48,
            "line": 98
          },
          "start": {
            "column": 23,
            "line": 98
          }
        },
        "range": [
          2177,
          2202
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
                "name": "QuickPickItem",
                "optional": false,
                "range": [
                  2188,
                  2201
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 98
                  },
                  "start": {
                    "column": 34,
                    "line": 98
                  }
                }
              },
              "range": [
                2188,
                2201
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 98
                },
                "start": {
                  "column": 34,
                  "line": 98
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
                2178,
                2179
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 98
                },
                "start": {
                  "column": 24,
                  "line": 98
                }
              }
            },
            "out": false,
            "range": [
              2178,
              2201
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 98
              },
              "start": {
                "column": 24,
                "line": 98
              }
            }
          }
        ]
      },
      "range": [
        2154,
        2267
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 98
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
                  "name": "step",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 108
                      },
                      "start": {
                        "column": 12,
                        "line": 108
                      }
                    },
                    "range": [
                      2487,
                      2517
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2502,
                          2517
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QuickPickItem",
                              "optional": false,
                              "range": [
                                2503,
                                2516
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 108
                                },
                                "start": {
                                  "column": 28,
                                  "line": 108
                                }
                              }
                            },
                            "range": [
                              2503,
                              2516
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 108
                              },
                              "start": {
                                "column": 28,
                                "line": 108
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 108
                          },
                          "start": {
                            "column": 27,
                            "line": 108
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "range": [
                          2489,
                          2502
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 108
                          },
                          "start": {
                            "column": 14,
                            "line": 108
                          }
                        }
                      },
                      "range": [
                        2489,
                        2517
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 108
                        },
                        "start": {
                          "column": 14,
                          "line": 108
                        }
                      }
                    }
                  },
                  "range": [
                    2483,
                    2517
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 108
                    },
                    "start": {
                      "column": 8,
                      "line": 108
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "range": [
                              2556,
                              2561
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 109
                              },
                              "start": {
                                "column": 4,
                                "line": 109
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              2563,
                              2565
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 109
                              },
                              "start": {
                                "column": 11,
                                "line": 109
                              }
                            }
                          },
                          "range": [
                            2556,
                            2565
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 109
                            },
                            "start": {
                              "column": 4,
                              "line": 109
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "placeholder",
                            "optional": false,
                            "range": [
                              2571,
                              2582
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 110
                              },
                              "start": {
                                "column": 4,
                                "line": 110
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              2584,
                              2586
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 110
                              },
                              "start": {
                                "column": 17,
                                "line": 110
                              }
                            }
                          },
                          "range": [
                            2571,
                            2586
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
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
                        2550,
                        2591
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 111
                        },
                        "start": {
                          "column": 75,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createPickStep",
                    "optional": false,
                    "range": [
                      2520,
                      2534
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 108
                      },
                      "start": {
                        "column": 45,
                        "line": 108
                      }
                    }
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      2534,
                      2549
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "QuickPickItem",
                          "optional": false,
                          "range": [
                            2535,
                            2548
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 108
                            },
                            "start": {
                              "column": 60,
                              "line": 108
                            }
                          }
                        },
                        "range": [
                          2535,
                          2548
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 108
                          },
                          "start": {
                            "column": 60,
                            "line": 108
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 108
                      },
                      "start": {
                        "column": 59,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    2520,
                    2592
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 111
                    },
                    "start": {
                      "column": 45,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2483,
                  2592
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 108
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2477,
              2593
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 111
              },
              "start": {
                "column": 2,
                "line": 108
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
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 112
                      },
                      "start": {
                        "column": 17,
                        "line": 112
                      }
                    },
                    "range": [
                      2611,
                      2639
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2626,
                          2639
                        ],
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "range": [
                                2634,
                                2638
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 112
                                },
                                "start": {
                                  "column": 40,
                                  "line": 112
                                }
                              }
                            },
                            "range": [
                              2627,
                              2638
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 112
                              },
                              "start": {
                                "column": 33,
                                "line": 112
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 112
                          },
                          "start": {
                            "column": 32,
                            "line": 112
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StepSelection",
                        "optional": false,
                        "range": [
                          2613,
                          2626
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 112
                          },
                          "start": {
                            "column": 19,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        2613,
                        2639
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 112
                        },
                        "start": {
                          "column": 19,
                          "line": 112
                        }
                      }
                    }
                  },
                  "range": [
                    2602,
                    2639
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "range": [
                      2648,
                      2652
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 112
                      },
                      "start": {
                        "column": 54,
                        "line": 112
                      }
                    }
                  },
                  "delegate": false,
                  "range": [
                    2642,
                    2652
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 112
                    },
                    "start": {
                      "column": 48,
                      "line": 112
                    }
                  }
                },
                "range": [
                  2602,
                  2652
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 112
                  },
                  "start": {
                    "column": 8,
                    "line": 112
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2596,
              2653
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 112
              },
              "start": {
                "column": 2,
                "line": 112
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StepResult",
                  "optional": false,
                  "range": [
                    2732,
                    2742
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 115
                    },
                    "start": {
                      "column": 6,
                      "line": 115
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Break",
                  "optional": false,
                  "range": [
                    2743,
                    2748
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 115
                    },
                    "start": {
                      "column": 17,
                      "line": 115
                    }
                  }
                },
                "range": [
                  2732,
                  2748
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 115
                  },
                  "start": {
                    "column": 6,
                    "line": 115
                  }
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "selection",
                  "optional": false,
                  "range": [
                    2713,
                    2722
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 114
                    },
                    "start": {
                      "column": 6,
                      "line": 114
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    2723,
                    2724
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 114
                    },
                    "start": {
                      "column": 16,
                      "line": 114
                    }
                  }
                },
                "range": [
                  2713,
                  2725
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 114
                  },
                  "start": {
                    "column": 6,
                    "line": 114
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "range": [
                      2683,
                      2687
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 113
                      },
                      "start": {
                        "column": 29,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      2689,
                      2694
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 113
                      },
                      "start": {
                        "column": 35,
                        "line": 113
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "range": [
                      2696,
                      2705
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 113
                      },
                      "start": {
                        "column": 42,
                        "line": 113
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "canPickStepContinue",
                  "optional": false,
                  "range": [
                    2663,
                    2682
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 113
                    },
                    "start": {
                      "column": 9,
                      "line": 113
                    }
                  }
                },
                "optional": false,
                "range": [
                  2663,
                  2706
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 113
                  },
                  "start": {
                    "column": 9,
                    "line": 113
                  }
                }
              },
              "range": [
                2663,
                2748
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 115
                },
                "start": {
                  "column": 9,
                  "line": 113
                }
              }
            },
            "range": [
              2656,
              2749
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 115
              },
              "start": {
                "column": 2,
                "line": 113
              }
            }
          }
        ],
        "range": [
          2473,
          2751
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 71,
            "line": 107
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "showStep",
        "optional": false,
        "range": [
          2279,
          2287
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 104
          },
          "start": {
            "column": 10,
            "line": 104
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 14,
                "line": 107
              },
              "start": {
                "column": 7,
                "line": 107
              }
            },
            "range": [
              2409,
              2416
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "range": [
                  2411,
                  2416
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 107
                  },
                  "start": {
                    "column": 9,
                    "line": 107
                  }
                }
              },
              "range": [
                2411,
                2416
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 107
                },
                "start": {
                  "column": 9,
                  "line": 107
                }
              }
            }
          },
          "range": [
            2404,
            2416
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 107
            },
            "start": {
              "column": 2,
              "line": 107
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 107
              },
              "start": {
                "column": 24,
                "line": 107
              }
            },
            "range": [
              2426,
              2435
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "range": [
                  2428,
                  2435
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 107
                  },
                  "start": {
                    "column": 26,
                    "line": 107
                  }
                }
              },
              "range": [
                2428,
                2435
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 107
                },
                "start": {
                  "column": 26,
                  "line": 107
                }
              }
            }
          },
          "range": [
            2418,
            2435
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 107
            },
            "start": {
              "column": 16,
              "line": 107
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 107
          },
          "start": {
            "column": 34,
            "line": 107
          }
        },
        "range": [
          2436,
          2472
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              2457,
              2472
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QuickPickItem",
                  "optional": false,
                  "range": [
                    2458,
                    2471
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 107
                    },
                    "start": {
                      "column": 56,
                      "line": 107
                    }
                  }
                },
                "range": [
                  2458,
                  2471
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 107
                  },
                  "start": {
                    "column": 56,
                    "line": 107
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 107
              },
              "start": {
                "column": 55,
                "line": 107
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StepResultGenerator",
            "optional": false,
            "range": [
              2438,
              2457
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 107
              },
              "start": {
                "column": 36,
                "line": 107
              }
            }
          },
          "range": [
            2438,
            2472
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 107
            },
            "start": {
              "column": 36,
              "line": 107
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 18,
            "line": 104
          }
        },
        "range": [
          2287,
          2403
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PartialStepState",
                    "optional": false,
                    "range": [
                      2305,
                      2321
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 105
                      },
                      "start": {
                        "column": 16,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    2305,
                    2321
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 105
                    },
                    "start": {
                      "column": 16,
                      "line": 105
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
                        "name": "repo",
                        "optional": false,
                        "range": [
                          2326,
                          2330
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 105
                          },
                          "start": {
                            "column": 37,
                            "line": 105
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
                            "column": 46,
                            "line": 105
                          },
                          "start": {
                            "column": 41,
                            "line": 105
                          }
                        },
                        "range": [
                          2330,
                          2335
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2332,
                            2335
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 105
                            },
                            "start": {
                              "column": 43,
                              "line": 105
                            }
                          }
                        }
                      },
                      "range": [
                        2326,
                        2335
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 105
                        },
                        "start": {
                          "column": 37,
                          "line": 105
                        }
                      }
                    }
                  ],
                  "range": [
                    2324,
                    2337
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 105
                    },
                    "start": {
                      "column": 35,
                      "line": 105
                    }
                  }
                }
              ],
              "range": [
                2305,
                2337
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 105
                },
                "start": {
                  "column": 16,
                  "line": 105
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "State",
              "optional": false,
              "range": [
                2291,
                2296
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 105
                },
                "start": {
                  "column": 2,
                  "line": 105
                }
              }
            },
            "out": false,
            "range": [
              2291,
              2337
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 105
              },
              "start": {
                "column": 2,
                "line": 105
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "repos",
                    "optional": false,
                    "range": [
                      2359,
                      2364
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 106
                      },
                      "start": {
                        "column": 20,
                        "line": 106
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
                        "column": 32,
                        "line": 106
                      },
                      "start": {
                        "column": 25,
                        "line": 106
                      }
                    },
                    "range": [
                      2364,
                      2371
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          2366,
                          2369
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 106
                          },
                          "start": {
                            "column": 27,
                            "line": 106
                          }
                        }
                      },
                      "range": [
                        2366,
                        2371
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 106
                        },
                        "start": {
                          "column": 27,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    2359,
                    2372
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 106
                    },
                    "start": {
                      "column": 20,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "range": [
                      2373,
                      2378
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 106
                      },
                      "start": {
                        "column": 34,
                        "line": 106
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
                        "column": 47,
                        "line": 106
                      },
                      "start": {
                        "column": 39,
                        "line": 106
                      }
                    },
                    "range": [
                      2378,
                      2386
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2380,
                        2386
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 106
                        },
                        "start": {
                          "column": 41,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    2373,
                    2387
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 106
                    },
                    "start": {
                      "column": 34,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "range": [
                      2388,
                      2394
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 106
                      },
                      "start": {
                        "column": 49,
                        "line": 106
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
                        "column": 60,
                        "line": 106
                      },
                      "start": {
                        "column": 55,
                        "line": 106
                      }
                    },
                    "range": [
                      2394,
                      2399
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2396,
                        2399
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 106
                        },
                        "start": {
                          "column": 57,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    2388,
                    2399
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 106
                    },
                    "start": {
                      "column": 49,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                2357,
                2401
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 106
                },
                "start": {
                  "column": 18,
                  "line": 106
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "range": [
                2341,
                2348
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 106
                },
                "start": {
                  "column": 2,
                  "line": 106
                }
              }
            },
            "out": false,
            "range": [
              2341,
              2401
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 106
              },
              "start": {
                "column": 2,
                "line": 106
              }
            }
          }
        ]
      },
      "range": [
        2269,
        2751
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 117
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
