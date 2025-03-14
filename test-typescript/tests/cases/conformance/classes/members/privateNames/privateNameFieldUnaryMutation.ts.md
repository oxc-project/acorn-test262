__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1921
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          1920
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "test",
              "range": [
                14,
                19
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                19,
                27
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  21,
                  27
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
              }
            },
            "value": {
              "type": "Literal",
              "raw": "24",
              "value": 24,
              "range": [
                30,
                32
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              33
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                38,
                49
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                49,
                764
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            62,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            67,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          62,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        62,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      62,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            84,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            89,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          84,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        84,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      84,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            108,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 6
                            },
                            "start": {
                              "column": 10,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            113,
                            118
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          108,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        106,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      106,
                      119
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            130,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 7
                            },
                            "start": {
                              "column": 10,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            135,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          130,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        128,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      128,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            156,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 14,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                160,
                                164
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 8
                                },
                                "start": {
                                  "column": 18,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                165,
                                170
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 8
                                },
                                "start": {
                                  "column": 23,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              160,
                              170
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 8
                              },
                              "start": {
                                "column": 18,
                                "line": 8
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            160,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 18,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          156,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      150,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                            188,
                            189
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
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                192,
                                196
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 9
                                },
                                "start": {
                                  "column": 18,
                                  "line": 9
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                197,
                                202
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 9
                                },
                                "start": {
                                  "column": 23,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              192,
                              202
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 9
                              },
                              "start": {
                                "column": 18,
                                "line": 9
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            192,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          188,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      182,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            220,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 10
                            },
                            "start": {
                              "column": 14,
                              "line": 10
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                226,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 10
                                },
                                "start": {
                                  "column": 20,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                231,
                                236
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 10
                                },
                                "start": {
                                  "column": 25,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              226,
                              236
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 10
                              },
                              "start": {
                                "column": 20,
                                "line": 10
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            224,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          220,
                          236
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 10
                          },
                          "start": {
                            "column": 14,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      214,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            252,
                            253
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 14,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                258,
                                262
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 11
                                },
                                "start": {
                                  "column": 20,
                                  "line": 11
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                263,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 11
                                },
                                "start": {
                                  "column": 25,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              258,
                              268
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            256,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          252,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 11
                          },
                          "start": {
                            "column": 14,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      246,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        330,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 12
                        },
                        "start": {
                          "column": 60,
                          "line": 12
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            283,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            288,
                            293
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 12
                            },
                            "start": {
                              "column": 18,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          283,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          296,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        283,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            299,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 29,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            304,
                            309
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 12
                            },
                            "start": {
                              "column": 34,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          299,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 12
                          },
                          "start": {
                            "column": 29,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          312,
                          314
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        299,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 12
                        },
                        "start": {
                          "column": 29,
                          "line": 12
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            318,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 12
                            },
                            "start": {
                              "column": 48,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            323,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 12
                            },
                            "start": {
                              "column": 53,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          318,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        316,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 12
                        },
                        "start": {
                          "column": 46,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      278,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        393,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 13
                        },
                        "start": {
                          "column": 60,
                          "line": 13
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            346,
                            350
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 13
                            },
                            "start": {
                              "column": 13,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            351,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 13
                            },
                            "start": {
                              "column": 18,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          346,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          359,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 13
                          },
                          "start": {
                            "column": 26,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        346,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            362,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 13
                            },
                            "start": {
                              "column": 29,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            367,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 13
                            },
                            "start": {
                              "column": 34,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          362,
                          372
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 29,
                            "line": 13
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          375,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 13
                          },
                          "start": {
                            "column": 42,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        362,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 13
                        },
                        "start": {
                          "column": 29,
                          "line": 13
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            379,
                            383
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 13
                            },
                            "start": {
                              "column": 46,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            384,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 13
                            },
                            "start": {
                              "column": 51,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          379,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 13
                          },
                          "start": {
                            "column": 46,
                            "line": 13
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        379,
                        391
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 13
                        },
                        "start": {
                          "column": 46,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      341,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            406,
                            410
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 9,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            411,
                            416
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          406,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 9,
                            "line": 15
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        405,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      405,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            430,
                            434
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 16
                            },
                            "start": {
                              "column": 9,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            435,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 16
                            },
                            "start": {
                              "column": 14,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          430,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        429,
                        443
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
                    "range": [
                      429,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            456,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 17
                            },
                            "start": {
                              "column": 11,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            461,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 17
                            },
                            "start": {
                              "column": 16,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          456,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 17
                          },
                          "start": {
                            "column": 11,
                            "line": 17
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        453,
                        467
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      453,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            480,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 18
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            485,
                            490
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          480,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 18
                          },
                          "start": {
                            "column": 11,
                            "line": 18
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        477,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      477,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
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
                          "name": "e",
                          "optional": false,
                          "range": [
                            507,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                512,
                                516
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 19
                                },
                                "start": {
                                  "column": 19,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                517,
                                522
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 19
                                },
                                "start": {
                                  "column": 24,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              512,
                              522
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 19
                              },
                              "start": {
                                "column": 19,
                                "line": 19
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            511,
                            525
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 18,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          507,
                          525
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 14,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      501,
                      526
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
                          "range": [
                            541,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                546,
                                550
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 20
                                },
                                "start": {
                                  "column": 19,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                551,
                                556
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 20
                                },
                                "start": {
                                  "column": 24,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              546,
                              556
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 20
                              },
                              "start": {
                                "column": 19,
                                "line": 20
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            545,
                            559
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 20
                            },
                            "start": {
                              "column": 18,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          541,
                          559
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
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
                        "column": 33,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
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
                          "name": "g",
                          "optional": false,
                          "range": [
                            575,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 21
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                582,
                                586
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 21
                                },
                                "start": {
                                  "column": 21,
                                  "line": 21
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                587,
                                592
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 21
                                },
                                "start": {
                                  "column": 26,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              582,
                              592
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 21
                              },
                              "start": {
                                "column": 21,
                                "line": 21
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            579,
                            593
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          575,
                          593
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 21
                          },
                          "start": {
                            "column": 14,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      569,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
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
                          "name": "h",
                          "optional": false,
                          "range": [
                            609,
                            610
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 22
                            },
                            "start": {
                              "column": 14,
                              "line": 22
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                616,
                                620
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 22
                                },
                                "start": {
                                  "column": 21,
                                  "line": 22
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                621,
                                626
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 22
                                },
                                "start": {
                                  "column": 26,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              616,
                              626
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 22
                              },
                              "start": {
                                "column": 21,
                                "line": 22
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            613,
                            627
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 22
                            },
                            "start": {
                              "column": 18,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          609,
                          627
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 22
                          },
                          "start": {
                            "column": 14,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      603,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        691,
                        693
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 23
                        },
                        "start": {
                          "column": 62,
                          "line": 23
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            642,
                            646
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 23
                            },
                            "start": {
                              "column": 13,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            647,
                            652
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
                        "range": [
                          642,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 23
                          },
                          "start": {
                            "column": 13,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          655,
                          656
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
                      "range": [
                        642,
                        656
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
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            658,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 23
                            },
                            "start": {
                              "column": 29,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            663,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 23
                            },
                            "start": {
                              "column": 34,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          658,
                          668
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 23
                          },
                          "start": {
                            "column": 29,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          671,
                          673
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 23
                          },
                          "start": {
                            "column": 42,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        658,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 23
                        },
                        "start": {
                          "column": 29,
                          "line": 23
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            678,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 23
                            },
                            "start": {
                              "column": 49,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            683,
                            688
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 23
                            },
                            "start": {
                              "column": 54,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          678,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 23
                          },
                          "start": {
                            "column": 49,
                            "line": 23
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        675,
                        689
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 23
                        },
                        "start": {
                          "column": 46,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      637,
                      693
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        756,
                        758
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 24
                        },
                        "start": {
                          "column": 62,
                          "line": 24
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            707,
                            711
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 24
                            },
                            "start": {
                              "column": 13,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            712,
                            717
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 24
                            },
                            "start": {
                              "column": 18,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          707,
                          717
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 24
                          },
                          "start": {
                            "column": 13,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          720,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 24
                          },
                          "start": {
                            "column": 26,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        707,
                        721
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 24
                        },
                        "start": {
                          "column": 13,
                          "line": 24
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            723,
                            727
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 24
                            },
                            "start": {
                              "column": 29,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            728,
                            733
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 24
                            },
                            "start": {
                              "column": 34,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          723,
                          733
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 24
                          },
                          "start": {
                            "column": 29,
                            "line": 24
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          736,
                          738
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 24
                          },
                          "start": {
                            "column": 42,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        723,
                        738
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 24
                        },
                        "start": {
                          "column": 29,
                          "line": 24
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            741,
                            745
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 24
                            },
                            "start": {
                              "column": 47,
                              "line": 24
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            746,
                            751
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 24
                            },
                            "start": {
                              "column": 52,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          741,
                          751
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 24
                          },
                          "start": {
                            "column": 47,
                            "line": 24
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        740,
                        754
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 24
                        },
                        "start": {
                          "column": 46,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      702,
                      758
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  52,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              38,
              764
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "test",
              "optional": false,
              "range": [
                769,
                773
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                773,
                1880
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                786,
                                790
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
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                791,
                                802
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 27
                                },
                                "start": {
                                  "column": 13,
                                  "line": 27
                                }
                              }
                            },
                            "range": [
                              786,
                              802
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 27
                              },
                              "start": {
                                "column": 8,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            786,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 27
                            },
                            "start": {
                              "column": 8,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            805,
                            810
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 27
                            },
                            "start": {
                              "column": 27,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          786,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        786,
                        812
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      786,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                822,
                                826
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 28
                                },
                                "start": {
                                  "column": 8,
                                  "line": 28
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                827,
                                838
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 28
                                },
                                "start": {
                                  "column": 13,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              822,
                              838
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 28
                              },
                              "start": {
                                "column": 8,
                                "line": 28
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            822,
                            840
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 28
                            },
                            "start": {
                              "column": 8,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            841,
                            846
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 28
                            },
                            "start": {
                              "column": 27,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          822,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        822,
                        848
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      822,
                      849
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                860,
                                864
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
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                865,
                                876
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 29
                                },
                                "start": {
                                  "column": 15,
                                  "line": 29
                                }
                              }
                            },
                            "range": [
                              860,
                              876
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
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
                            860,
                            878
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 29
                            },
                            "start": {
                              "column": 10,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            879,
                            884
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 29
                            },
                            "start": {
                              "column": 29,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          860,
                          884
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
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        858,
                        884
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      858,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                896,
                                900
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
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                901,
                                912
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 30
                                },
                                "start": {
                                  "column": 15,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              896,
                              912
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
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
                            896,
                            914
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 30
                            },
                            "start": {
                              "column": 10,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            915,
                            920
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 30
                            },
                            "start": {
                              "column": 29,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          896,
                          920
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 30
                          },
                          "start": {
                            "column": 10,
                            "line": 30
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        894,
                        920
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      894,
                      921
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                            936,
                            937
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
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    940,
                                    944
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 31
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    945,
                                    956
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 31
                                    }
                                  }
                                },
                                "range": [
                                  940,
                                  956
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 31
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                940,
                                958
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 31
                                },
                                "start": {
                                  "column": 18,
                                  "line": 31
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                959,
                                964
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 31
                                },
                                "start": {
                                  "column": 37,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              940,
                              964
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 31
                              },
                              "start": {
                                "column": 18,
                                "line": 31
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            940,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 31
                            },
                            "start": {
                              "column": 18,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          936,
                          966
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 31
                          },
                          "start": {
                            "column": 14,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      930,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
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
                            982,
                            983
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 32
                            },
                            "start": {
                              "column": 14,
                              "line": 32
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    986,
                                    990
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 32
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    991,
                                    1002
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  986,
                                  1002
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 32
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                986,
                                1004
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 32
                                },
                                "start": {
                                  "column": 18,
                                  "line": 32
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1005,
                                1010
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 32
                                },
                                "start": {
                                  "column": 37,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              986,
                              1010
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 32
                              },
                              "start": {
                                "column": 18,
                                "line": 32
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            986,
                            1012
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 32
                            },
                            "start": {
                              "column": 18,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          982,
                          1012
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 32
                          },
                          "start": {
                            "column": 14,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      976,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1028,
                            1029
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 33
                            },
                            "start": {
                              "column": 14,
                              "line": 33
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1034,
                                    1038
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 33
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1039,
                                    1050
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  1034,
                                  1050
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 33
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1034,
                                1052
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 33
                                },
                                "start": {
                                  "column": 20,
                                  "line": 33
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1053,
                                1058
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 33
                                },
                                "start": {
                                  "column": 39,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              1034,
                              1058
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 33
                              },
                              "start": {
                                "column": 20,
                                "line": 33
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            1032,
                            1058
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 33
                            },
                            "start": {
                              "column": 18,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1028,
                          1058
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 33
                          },
                          "start": {
                            "column": 14,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1022,
                      1059
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            1074,
                            1075
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
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1080,
                                    1084
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 34
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1085,
                                    1096
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 34
                                    }
                                  }
                                },
                                "range": [
                                  1080,
                                  1096
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 34
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1080,
                                1098
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 34
                                },
                                "start": {
                                  "column": 20,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1099,
                                1104
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 34
                                },
                                "start": {
                                  "column": 39,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              1080,
                              1104
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 34
                              },
                              "start": {
                                "column": 20,
                                "line": 34
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            1078,
                            1104
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 34
                            },
                            "start": {
                              "column": 18,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1074,
                          1104
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 34
                          },
                          "start": {
                            "column": 14,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1068,
                      1105
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1208,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 35
                        },
                        "start": {
                          "column": 102,
                          "line": 35
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1119,
                                1123
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 35
                                },
                                "start": {
                                  "column": 13,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1124,
                                1135
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 35
                                },
                                "start": {
                                  "column": 18,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              1119,
                              1135
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 35
                              },
                              "start": {
                                "column": 13,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1119,
                            1137
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 35
                            },
                            "start": {
                              "column": 13,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1138,
                            1143
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 35
                            },
                            "start": {
                              "column": 32,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1119,
                          1143
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 35
                          },
                          "start": {
                            "column": 13,
                            "line": 35
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1146,
                          1147
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 35
                          },
                          "start": {
                            "column": 40,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1119,
                        1147
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 35
                        },
                        "start": {
                          "column": 13,
                          "line": 35
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1149,
                                1153
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 35
                                },
                                "start": {
                                  "column": 43,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1154,
                                1165
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 35
                                },
                                "start": {
                                  "column": 48,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              1149,
                              1165
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 35
                              },
                              "start": {
                                "column": 43,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1149,
                            1167
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 35
                            },
                            "start": {
                              "column": 43,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1168,
                            1173
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 35
                            },
                            "start": {
                              "column": 62,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1149,
                          1173
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 35
                          },
                          "start": {
                            "column": 43,
                            "line": 35
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1176,
                          1178
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 35
                          },
                          "start": {
                            "column": 70,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        1149,
                        1178
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 35
                        },
                        "start": {
                          "column": 43,
                          "line": 35
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1182,
                                1186
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 35
                                },
                                "start": {
                                  "column": 76,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1187,
                                1198
                              ],
                              "loc": {
                                "end": {
                                  "column": 92,
                                  "line": 35
                                },
                                "start": {
                                  "column": 81,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              1182,
                              1198
                            ],
                            "loc": {
                              "end": {
                                "column": 92,
                                "line": 35
                              },
                              "start": {
                                "column": 76,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1182,
                            1200
                          ],
                          "loc": {
                            "end": {
                              "column": 94,
                              "line": 35
                            },
                            "start": {
                              "column": 76,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1201,
                            1206
                          ],
                          "loc": {
                            "end": {
                              "column": 100,
                              "line": 35
                            },
                            "start": {
                              "column": 95,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1182,
                          1206
                        ],
                        "loc": {
                          "end": {
                            "column": 100,
                            "line": 35
                          },
                          "start": {
                            "column": 76,
                            "line": 35
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        1180,
                        1206
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 35
                        },
                        "start": {
                          "column": 74,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1114,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1313,
                        1315
                      ],
                      "loc": {
                        "end": {
                          "column": 104,
                          "line": 36
                        },
                        "start": {
                          "column": 102,
                          "line": 36
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1224,
                                1228
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 36
                                },
                                "start": {
                                  "column": 13,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1229,
                                1240
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 36
                                },
                                "start": {
                                  "column": 18,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              1224,
                              1240
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 36
                              },
                              "start": {
                                "column": 13,
                                "line": 36
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1224,
                            1242
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 36
                            },
                            "start": {
                              "column": 13,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1243,
                            1248
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 36
                            },
                            "start": {
                              "column": 32,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1224,
                          1248
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 36
                          },
                          "start": {
                            "column": 13,
                            "line": 36
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1251,
                          1252
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 36
                          },
                          "start": {
                            "column": 40,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        1224,
                        1252
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 36
                        },
                        "start": {
                          "column": 13,
                          "line": 36
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1254,
                                1258
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 36
                                },
                                "start": {
                                  "column": 43,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1259,
                                1270
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 36
                                },
                                "start": {
                                  "column": 48,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              1254,
                              1270
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 36
                              },
                              "start": {
                                "column": 43,
                                "line": 36
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1254,
                            1272
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 36
                            },
                            "start": {
                              "column": 43,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1273,
                            1278
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 36
                            },
                            "start": {
                              "column": 62,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1254,
                          1278
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 36
                          },
                          "start": {
                            "column": 43,
                            "line": 36
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1281,
                          1283
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 36
                          },
                          "start": {
                            "column": 70,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        1254,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 36
                        },
                        "start": {
                          "column": 43,
                          "line": 36
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1285,
                                1289
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 36
                                },
                                "start": {
                                  "column": 74,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1290,
                                1301
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 36
                                },
                                "start": {
                                  "column": 79,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              1285,
                              1301
                            ],
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 36
                              },
                              "start": {
                                "column": 74,
                                "line": 36
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1285,
                            1303
                          ],
                          "loc": {
                            "end": {
                              "column": 92,
                              "line": 36
                            },
                            "start": {
                              "column": 74,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1304,
                            1309
                          ],
                          "loc": {
                            "end": {
                              "column": 98,
                              "line": 36
                            },
                            "start": {
                              "column": 93,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1285,
                          1309
                        ],
                        "loc": {
                          "end": {
                            "column": 98,
                            "line": 36
                          },
                          "start": {
                            "column": 74,
                            "line": 36
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1285,
                        1311
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 36
                        },
                        "start": {
                          "column": 74,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1219,
                      1315
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1326,
                                1330
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 38
                                },
                                "start": {
                                  "column": 9,
                                  "line": 38
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1331,
                                1342
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 38
                                },
                                "start": {
                                  "column": 14,
                                  "line": 38
                                }
                              }
                            },
                            "range": [
                              1326,
                              1342
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 38
                              },
                              "start": {
                                "column": 9,
                                "line": 38
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1326,
                            1344
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 38
                            },
                            "start": {
                              "column": 9,
                              "line": 38
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1345,
                            1350
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 38
                            },
                            "start": {
                              "column": 28,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1326,
                          1350
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 38
                          },
                          "start": {
                            "column": 9,
                            "line": 38
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1325,
                        1353
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1325,
                      1354
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1364,
                                1368
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 39
                                },
                                "start": {
                                  "column": 9,
                                  "line": 39
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1369,
                                1380
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 39
                                },
                                "start": {
                                  "column": 14,
                                  "line": 39
                                }
                              }
                            },
                            "range": [
                              1364,
                              1380
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 39
                              },
                              "start": {
                                "column": 9,
                                "line": 39
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1364,
                            1382
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 39
                            },
                            "start": {
                              "column": 9,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1383,
                            1388
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 39
                            },
                            "start": {
                              "column": 28,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1364,
                          1388
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 39
                          },
                          "start": {
                            "column": 9,
                            "line": 39
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": false,
                      "range": [
                        1363,
                        1391
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1363,
                      1392
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1404,
                                1408
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 40
                                },
                                "start": {
                                  "column": 11,
                                  "line": 40
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1409,
                                1420
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 40
                                },
                                "start": {
                                  "column": 16,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1404,
                              1420
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 40
                              },
                              "start": {
                                "column": 11,
                                "line": 40
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1404,
                            1422
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 40
                            },
                            "start": {
                              "column": 11,
                              "line": 40
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1423,
                            1428
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 40
                            },
                            "start": {
                              "column": 30,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1404,
                          1428
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 40
                          },
                          "start": {
                            "column": 11,
                            "line": 40
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        1401,
                        1429
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1401,
                      1430
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1442,
                                1446
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 41
                                },
                                "start": {
                                  "column": 11,
                                  "line": 41
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1447,
                                1458
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 41
                                },
                                "start": {
                                  "column": 16,
                                  "line": 41
                                }
                              }
                            },
                            "range": [
                              1442,
                              1458
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 41
                              },
                              "start": {
                                "column": 11,
                                "line": 41
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1442,
                            1460
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 41
                            },
                            "start": {
                              "column": 11,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1461,
                            1466
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 41
                            },
                            "start": {
                              "column": 30,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1442,
                          1466
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 41
                          },
                          "start": {
                            "column": 11,
                            "line": 41
                          }
                        }
                      },
                      "operator": "--",
                      "prefix": true,
                      "range": [
                        1439,
                        1467
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1439,
                      1468
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
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
                          "name": "e",
                          "optional": false,
                          "range": [
                            1483,
                            1484
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 42
                            },
                            "start": {
                              "column": 14,
                              "line": 42
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1488,
                                    1492
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 42
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1493,
                                    1504
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 42
                                    }
                                  }
                                },
                                "range": [
                                  1488,
                                  1504
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 42
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1488,
                                1506
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 42
                                },
                                "start": {
                                  "column": 19,
                                  "line": 42
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1507,
                                1512
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 42
                                },
                                "start": {
                                  "column": 38,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              1488,
                              1512
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 42
                              },
                              "start": {
                                "column": 19,
                                "line": 42
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            1487,
                            1515
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 42
                            },
                            "start": {
                              "column": 18,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1483,
                          1515
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 42
                          },
                          "start": {
                            "column": 14,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1477,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
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
                          "name": "f",
                          "optional": false,
                          "range": [
                            1531,
                            1532
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 43
                            },
                            "start": {
                              "column": 14,
                              "line": 43
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1536,
                                    1540
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 43
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1541,
                                    1552
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  1536,
                                  1552
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 43
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1536,
                                1554
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 43
                                },
                                "start": {
                                  "column": 19,
                                  "line": 43
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1555,
                                1560
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 43
                                },
                                "start": {
                                  "column": 38,
                                  "line": 43
                                }
                              }
                            },
                            "range": [
                              1536,
                              1560
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 43
                              },
                              "start": {
                                "column": 19,
                                "line": 43
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            1535,
                            1563
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 43
                            },
                            "start": {
                              "column": 18,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1531,
                          1563
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 43
                          },
                          "start": {
                            "column": 14,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1525,
                      1564
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
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
                          "name": "g",
                          "optional": false,
                          "range": [
                            1579,
                            1580
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 44
                            },
                            "start": {
                              "column": 14,
                              "line": 44
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1586,
                                    1590
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 44
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1591,
                                    1602
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 44
                                    }
                                  }
                                },
                                "range": [
                                  1586,
                                  1602
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 44
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1586,
                                1604
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 44
                                },
                                "start": {
                                  "column": 21,
                                  "line": 44
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1605,
                                1610
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 44
                                },
                                "start": {
                                  "column": 40,
                                  "line": 44
                                }
                              }
                            },
                            "range": [
                              1586,
                              1610
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 44
                              },
                              "start": {
                                "column": 21,
                                "line": 44
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": true,
                          "range": [
                            1583,
                            1611
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 44
                            },
                            "start": {
                              "column": 18,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1579,
                          1611
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 44
                          },
                          "start": {
                            "column": 14,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1573,
                      1612
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
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
                          "name": "h",
                          "optional": false,
                          "range": [
                            1627,
                            1628
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 45
                            },
                            "start": {
                              "column": 14,
                              "line": 45
                            }
                          }
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1634,
                                    1638
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 45
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "range": [
                                    1639,
                                    1650
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 45
                                    }
                                  }
                                },
                                "range": [
                                  1634,
                                  1650
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 45
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1634,
                                1652
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 45
                                },
                                "start": {
                                  "column": 21,
                                  "line": 45
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "test",
                              "range": [
                                1653,
                                1658
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 45
                                },
                                "start": {
                                  "column": 40,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              1634,
                              1658
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 45
                              },
                              "start": {
                                "column": 21,
                                "line": 45
                              }
                            }
                          },
                          "operator": "--",
                          "prefix": true,
                          "range": [
                            1631,
                            1659
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 45
                            },
                            "start": {
                              "column": 18,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1627,
                          1659
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 45
                          },
                          "start": {
                            "column": 14,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1621,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1765,
                        1767
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 46
                        },
                        "start": {
                          "column": 104,
                          "line": 46
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1674,
                                1678
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 46
                                },
                                "start": {
                                  "column": 13,
                                  "line": 46
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1679,
                                1690
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 46
                                },
                                "start": {
                                  "column": 18,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1674,
                              1690
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 46
                              },
                              "start": {
                                "column": 13,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1674,
                            1692
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 46
                            },
                            "start": {
                              "column": 13,
                              "line": 46
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1693,
                            1698
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 46
                            },
                            "start": {
                              "column": 32,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1674,
                          1698
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 46
                          },
                          "start": {
                            "column": 13,
                            "line": 46
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1701,
                          1702
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 46
                          },
                          "start": {
                            "column": 40,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1674,
                        1702
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 46
                        },
                        "start": {
                          "column": 13,
                          "line": 46
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1704,
                                1708
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 46
                                },
                                "start": {
                                  "column": 43,
                                  "line": 46
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1709,
                                1720
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 46
                                },
                                "start": {
                                  "column": 48,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1704,
                              1720
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 46
                              },
                              "start": {
                                "column": 43,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1704,
                            1722
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 46
                            },
                            "start": {
                              "column": 43,
                              "line": 46
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1723,
                            1728
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 46
                            },
                            "start": {
                              "column": 62,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1704,
                          1728
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 46
                          },
                          "start": {
                            "column": 43,
                            "line": 46
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1731,
                          1733
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 46
                          },
                          "start": {
                            "column": 70,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        1704,
                        1733
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 46
                        },
                        "start": {
                          "column": 43,
                          "line": 46
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1738,
                                1742
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 46
                                },
                                "start": {
                                  "column": 77,
                                  "line": 46
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1743,
                                1754
                              ],
                              "loc": {
                                "end": {
                                  "column": 93,
                                  "line": 46
                                },
                                "start": {
                                  "column": 82,
                                  "line": 46
                                }
                              }
                            },
                            "range": [
                              1738,
                              1754
                            ],
                            "loc": {
                              "end": {
                                "column": 93,
                                "line": 46
                              },
                              "start": {
                                "column": 77,
                                "line": 46
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1738,
                            1756
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 46
                            },
                            "start": {
                              "column": 77,
                              "line": 46
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1757,
                            1762
                          ],
                          "loc": {
                            "end": {
                              "column": 101,
                              "line": 46
                            },
                            "start": {
                              "column": 96,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1738,
                          1762
                        ],
                        "loc": {
                          "end": {
                            "column": 101,
                            "line": 46
                          },
                          "start": {
                            "column": 77,
                            "line": 46
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": true,
                      "range": [
                        1735,
                        1763
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 46
                        },
                        "start": {
                          "column": 74,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1669,
                      1767
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1872,
                        1874
                      ],
                      "loc": {
                        "end": {
                          "column": 106,
                          "line": 47
                        },
                        "start": {
                          "column": 104,
                          "line": 47
                        }
                      }
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1781,
                                1785
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 47
                                },
                                "start": {
                                  "column": 13,
                                  "line": 47
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1786,
                                1797
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 47
                                },
                                "start": {
                                  "column": 18,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              1781,
                              1797
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 47
                              },
                              "start": {
                                "column": 13,
                                "line": 47
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1781,
                            1799
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 47
                            },
                            "start": {
                              "column": 13,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1800,
                            1805
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 47
                            },
                            "start": {
                              "column": 32,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1781,
                          1805
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 47
                          },
                          "start": {
                            "column": 13,
                            "line": 47
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1808,
                          1809
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 47
                          },
                          "start": {
                            "column": 40,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1781,
                        1809
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1811,
                                1815
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 47
                                },
                                "start": {
                                  "column": 43,
                                  "line": 47
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1816,
                                1827
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 47
                                },
                                "start": {
                                  "column": 48,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              1811,
                              1827
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 47
                              },
                              "start": {
                                "column": 43,
                                "line": 47
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1811,
                            1829
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 47
                            },
                            "start": {
                              "column": 43,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1830,
                            1835
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 47
                            },
                            "start": {
                              "column": 62,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1811,
                          1835
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 47
                          },
                          "start": {
                            "column": 43,
                            "line": 47
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1838,
                          1840
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 47
                          },
                          "start": {
                            "column": 70,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1811,
                        1840
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 47
                        },
                        "start": {
                          "column": 43,
                          "line": 47
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                1843,
                                1847
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 47
                                },
                                "start": {
                                  "column": 75,
                                  "line": 47
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                1848,
                                1859
                              ],
                              "loc": {
                                "end": {
                                  "column": 91,
                                  "line": 47
                                },
                                "start": {
                                  "column": 80,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              1843,
                              1859
                            ],
                            "loc": {
                              "end": {
                                "column": 91,
                                "line": 47
                              },
                              "start": {
                                "column": 75,
                                "line": 47
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1843,
                            1861
                          ],
                          "loc": {
                            "end": {
                              "column": 93,
                              "line": 47
                            },
                            "start": {
                              "column": 75,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "test",
                          "range": [
                            1862,
                            1867
                          ],
                          "loc": {
                            "end": {
                              "column": 99,
                              "line": 47
                            },
                            "start": {
                              "column": 94,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1843,
                          1867
                        ],
                        "loc": {
                          "end": {
                            "column": 99,
                            "line": 47
                          },
                          "start": {
                            "column": 75,
                            "line": 47
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        1842,
                        1870
                      ],
                      "loc": {
                        "end": {
                          "column": 102,
                          "line": 47
                        },
                        "start": {
                          "column": 74,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1776,
                      1874
                    ],
                    "loc": {
                      "end": {
                        "column": 106,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  }
                ],
                "range": [
                  776,
                  1880
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              769,
              1880
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 26
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
              "name": "getInstance",
              "optional": false,
              "range": [
                1885,
                1896
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
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
                1896,
                1918
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          1912,
                          1913
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 49
                          },
                          "start": {
                            "column": 31,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1908,
                        1915
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 49
                        },
                        "start": {
                          "column": 27,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1901,
                      1916
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 49
                      },
                      "start": {
                        "column": 20,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  1899,
                  1918
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 49
                  },
                  "start": {
                    "column": 18,
                    "line": 49
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 49
                },
                "start": {
                  "column": 15,
                  "line": 49
                }
              }
            },
            "range": [
              1885,
              1918
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        1920
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 51
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
