__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    870
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
        "name": "isFoo",
        "optional": false,
        "range": [
          17,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        },
        "range": [
          24,
          33
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            26,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
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
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "name": "isBar",
        "optional": false,
        "range": [
          52,
          57
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        },
        "range": [
          59,
          68
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            61,
            68
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        }
      },
      "range": [
        35,
        69
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 2
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
            "name": "isUndefinedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              },
              "range": [
                98,
                127
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 34,
                          "line": 3
                        }
                      },
                      "range": [
                        104,
                        114
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          107,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 3
                          },
                          "start": {
                            "column": 37,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      101,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 31,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      118,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 3
                      },
                      "start": {
                        "column": 48,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  100,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              84,
              127
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            84,
            127
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        70,
        128
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          141,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo",
        "optional": false,
        "range": [
          134,
          139
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        130,
        166
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          188,
          220
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 20,
            "line": 9
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            172,
            177
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isBar",
          "optional": false,
          "range": [
            181,
            186
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "range": [
          172,
          186
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        168,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          244,
          269
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 22,
            "line": 13
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            226,
            231
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "range": [
              235,
              240
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          },
          "optional": false,
          "range": [
            235,
            242
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        },
        "range": [
          226,
          242
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        222,
        269
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          302,
          321
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 31,
            "line": 17
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "range": [
            275,
            289
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "range": [
              293,
              298
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          },
          "optional": false,
          "range": [
            293,
            300
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 17
            },
            "start": {
              "column": 22,
              "line": 17
            }
          }
        },
        "range": [
          275,
          300
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 17
          },
          "start": {
            "column": 4,
            "line": 17
          }
        }
      },
      "range": [
        271,
        321
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          345,
          364
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 22,
            "line": 21
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            327,
            332
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "right": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFoo",
            "optional": false,
            "range": [
              336,
              341
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 13,
                "line": 21
              }
            }
          },
          "optional": false,
          "range": [
            336,
            343
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 21
            },
            "start": {
              "column": 13,
              "line": 21
            }
          }
        },
        "range": [
          327,
          343
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        323,
        364
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              },
              "range": [
                381,
                390
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  383,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              380,
              390
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
              }
            }
          },
          "init": null,
          "range": [
            380,
            390
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 25
            },
            "start": {
              "column": 14,
              "line": 25
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        366,
        391
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "ux",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 26
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              },
              "range": [
                408,
                429
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      410,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 26
                      },
                      "start": {
                        "column": 18,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      420,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 26
                      },
                      "start": {
                        "column": 28,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  410,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 18,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              406,
              429
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 14,
                "line": 26
              }
            }
          },
          "init": null,
          "range": [
            406,
            429
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 26
            },
            "start": {
              "column": 14,
              "line": 26
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        392,
        430
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              },
              "range": [
                446,
                455
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  448,
                  455
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              445,
              455
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 27
              },
              "start": {
                "column": 14,
                "line": 27
              }
            }
          },
          "init": null,
          "range": [
            445,
            455
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 27
            },
            "start": {
              "column": 14,
              "line": 27
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        431,
        456
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "uy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 28
                }
              },
              "range": [
                473,
                494
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      475,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      485,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 28
                      },
                      "start": {
                        "column": 28,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  475,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              471,
              494
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 28
              },
              "start": {
                "column": 14,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            471,
            494
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 28
            },
            "start": {
              "column": 14,
              "line": 28
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        457,
        495
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
        "name": "z",
        "optional": false,
        "range": [
          513,
          514
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 29
          },
          "start": {
            "column": 20,
            "line": 29
          }
        },
        "range": [
          516,
          525
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            518,
            525
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 29
            },
            "start": {
              "column": 22,
              "line": 29
            }
          }
        }
      },
      "range": [
        496,
        526
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "uz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 16,
                  "line": 30
                }
              },
              "range": [
                543,
                572
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 30
                        },
                        "start": {
                          "column": 22,
                          "line": 30
                        }
                      },
                      "range": [
                        549,
                        559
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          552,
                          559
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 30
                          },
                          "start": {
                            "column": 25,
                            "line": 30
                          }
                        }
                      }
                    },
                    "range": [
                      546,
                      559
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 30
                      },
                      "start": {
                        "column": 19,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      563,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 30
                      },
                      "start": {
                        "column": 36,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  545,
                  572
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              541,
              572
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 30
              },
              "start": {
                "column": 14,
                "line": 30
              }
            }
          },
          "init": null,
          "range": [
            541,
            572
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 30
            },
            "start": {
              "column": 14,
              "line": 30
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        527,
        573
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          591,
          616
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 32
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            579,
            580
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            584,
            589
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 32
            },
            "start": {
              "column": 9,
              "line": 32
            }
          }
        },
        "range": [
          579,
          589
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 32
          },
          "start": {
            "column": 4,
            "line": 32
          }
        }
      },
      "range": [
        575,
        616
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
        "body": [],
        "range": [
          634,
          659
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 16,
            "line": 36
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            622,
            627
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            631,
            632
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
        "range": [
          622,
          632
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        618,
        659
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
        "body": [],
        "range": [
          689,
          714
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 28,
            "line": 40
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                665,
                666
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                670,
                671
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "range": [
              665,
              671
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                675,
                676
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 40
                },
                "start": {
                  "column": 14,
                  "line": 40
                }
              }
            },
            "optional": false,
            "range": [
              675,
              678
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 40
              },
              "start": {
                "column": 14,
                "line": 40
              }
            }
          },
          "range": [
            665,
            678
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo",
          "optional": false,
          "range": [
            682,
            687
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 40
            },
            "start": {
              "column": 21,
              "line": 40
            }
          }
        },
        "range": [
          665,
          687
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 40
          },
          "start": {
            "column": 4,
            "line": 40
          }
        }
      },
      "range": [
        661,
        714
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
        "body": [],
        "range": [
          752,
          773
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 36,
            "line": 44
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                720,
                721
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
              "type": "Identifier",
              "decorators": [],
              "name": "uy",
              "optional": false,
              "range": [
                725,
                727
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 44
                },
                "start": {
                  "column": 9,
                  "line": 44
                }
              }
            },
            "range": [
              720,
              727
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              731,
              732
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 44
              },
              "start": {
                "column": 15,
                "line": 44
              }
            }
          },
          "range": [
            720,
            732
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false,
          "range": [
            736,
            750
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 44
            },
            "start": {
              "column": 20,
              "line": 44
            }
          }
        },
        "range": [
          720,
          750
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 44
          },
          "start": {
            "column": 4,
            "line": 44
          }
        }
      },
      "range": [
        716,
        773
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
        "body": [],
        "range": [
          803,
          828
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 28,
            "line": 48
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "ux",
              "optional": false,
              "range": [
                779,
                781
              ],
              "loc": {
                "end": {
                  "column": 6,
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
              "name": "y",
              "optional": false,
              "range": [
                785,
                786
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 48
                },
                "start": {
                  "column": 10,
                  "line": 48
                }
              }
            },
            "range": [
              779,
              786
            ],
            "loc": {
              "end": {
                "column": 11,
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
            "name": "uz",
            "optional": false,
            "range": [
              790,
              792
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 48
              },
              "start": {
                "column": 15,
                "line": 48
              }
            }
          },
          "range": [
            779,
            792
          ],
          "loc": {
            "end": {
              "column": 17,
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
          "name": "isFoo",
          "optional": false,
          "range": [
            796,
            801
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 48
            },
            "start": {
              "column": 21,
              "line": 48
            }
          }
        },
        "range": [
          779,
          801
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 48
          },
          "start": {
            "column": 4,
            "line": 48
          }
        }
      },
      "range": [
        775,
        828
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
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  864,
                  865
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                864,
                867
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              864,
              868
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          842,
          870
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 12,
            "line": 52
          }
        }
      },
      "test": {
        "type": "LogicalExpression",
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            834,
            835
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "range": [
            839,
            840
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 52
            },
            "start": {
              "column": 9,
              "line": 52
            }
          }
        },
        "range": [
          834,
          840
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 52
          },
          "start": {
            "column": 4,
            "line": 52
          }
        }
      },
      "range": [
        830,
        870
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
