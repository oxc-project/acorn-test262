__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    5184
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
          "name": "x",
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
                "name": "T",
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
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        },
        "range": [
          34,
          37
        ],
        "typeAnnotation": {
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
            "const": true,
            "in": false,
            "name": {
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
            "out": false,
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
          }
        ]
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
            "name": "x11",
            "optional": false,
            "range": [
              46,
              49
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  55,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
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
                52,
                54
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              52,
              59
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            46,
            59
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        40,
        60
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "x12",
            "optional": false,
            "range": [
              67,
              70
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
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
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      77,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          83,
                          86
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
                            "line": 4
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          88,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      82,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  76,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
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
                73,
                75
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              73,
              94
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            67,
            94
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        61,
        95
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "x13",
            "optional": false,
            "range": [
              102,
              105
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        113,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        116,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 5
                        },
                        "start": {
                          "column": 20,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      113,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        119,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"c\"",
                      "value": "c",
                      "range": [
                        122,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      119,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 31,
                          "line": 5
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"e\"",
                          "value": "e",
                          "range": [
                            131,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 5
                            },
                            "start": {
                              "column": 35,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            136,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 5
                            },
                            "start": {
                              "column": 40,
                              "line": 5
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            139,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 5
                            },
                            "start": {
                              "column": 43,
                              "line": 5
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
                                "name": "f",
                                "optional": false,
                                "range": [
                                  147,
                                  148
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
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "\"g\"",
                                "value": "g",
                                "range": [
                                  150,
                                  153
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                147,
                                153
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 5
                                },
                                "start": {
                                  "column": 51,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            145,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 5
                            },
                            "start": {
                              "column": 49,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        130,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 5
                        },
                        "start": {
                          "column": 34,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      127,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 5
                      },
                      "start": {
                        "column": 31,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  111,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
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
                108,
                110
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              108,
              159
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "range": [
            102,
            159
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        96,
        160
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
          179,
          181
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            },
            "range": [
              195,
              210
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
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 35,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    197,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    201,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                197,
                210
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 7
                },
                "start": {
                  "column": 35,
                  "line": 7
                }
              }
            }
          },
          "range": [
            194,
            210
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 7
            },
            "start": {
              "column": 32,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 7
          },
          "start": {
            "column": 49,
            "line": 7
          }
        },
        "range": [
          211,
          214
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              213,
              214
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 7
              },
              "start": {
                "column": 51,
                "line": 7
              }
            }
          },
          "range": [
            213,
            214
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 7
            },
            "start": {
              "column": 51,
              "line": 7
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 7
          }
        },
        "range": [
          181,
          193
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                188,
                189
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
              182,
              189
            ],
            "loc": {
              "end": {
                "column": 27,
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
              "name": "U",
              "optional": false,
              "range": [
                191,
                192
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              191,
              192
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        162,
        215
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "x21",
            "optional": false,
            "range": [
              223,
              226
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  232,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
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
                229,
                231
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              229,
              236
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            223,
            236
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        217,
        237
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "x22",
            "optional": false,
            "range": [
              244,
              247
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
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
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      254,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          260,
                          263
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 10
                          },
                          "start": {
                            "column": 22,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          265,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 10
                          },
                          "start": {
                            "column": 27,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      259,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 21,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  253,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
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
                250,
                252
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              250,
              271
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 10
              }
            }
          },
          "range": [
            244,
            271
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 10
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
        238,
        272
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 10
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
            "name": "x23",
            "optional": false,
            "range": [
              279,
              282
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        290,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        293,
                        294
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      290,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        296,
                        297
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"c\"",
                      "value": "c",
                      "range": [
                        299,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 26,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      296,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        304,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"e\"",
                          "value": "e",
                          "range": [
                            308,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 11
                            },
                            "start": {
                              "column": 35,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            313,
                            314
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 11
                            },
                            "start": {
                              "column": 40,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            316,
                            320
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 11
                            },
                            "start": {
                              "column": 43,
                              "line": 11
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
                                "name": "f",
                                "optional": false,
                                "range": [
                                  324,
                                  325
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 11
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "\"g\"",
                                "value": "g",
                                "range": [
                                  327,
                                  330
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                324,
                                330
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 11
                                },
                                "start": {
                                  "column": 51,
                                  "line": 11
                                }
                              }
                            }
                          ],
                          "range": [
                            322,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 11
                            },
                            "start": {
                              "column": 49,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        307,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 11
                        },
                        "start": {
                          "column": 34,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      304,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 11
                      },
                      "start": {
                        "column": 31,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  288,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
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
                285,
                287
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              285,
              336
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          "range": [
            279,
            336
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        273,
        337
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
        "name": "f3",
        "optional": false,
        "range": [
          356,
          358
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 13
          },
          "start": {
            "column": 17,
            "line": 13
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
                "column": 33,
                "line": 13
              },
              "start": {
                "column": 30,
                "line": 13
              }
            },
            "range": [
              369,
              372
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  371,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              "range": [
                371,
                372
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 32,
                  "line": 13
                }
              }
            }
          },
          "range": [
            368,
            372
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 13
          },
          "start": {
            "column": 34,
            "line": 13
          }
        },
        "range": [
          373,
          378
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
                375,
                376
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 13
                },
                "start": {
                  "column": 36,
                  "line": 13
                }
              }
            },
            "range": [
              375,
              376
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 36,
                "line": 13
              }
            }
          },
          "range": [
            375,
            378
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 13
            },
            "start": {
              "column": 36,
              "line": 13
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 13
          },
          "start": {
            "column": 19,
            "line": 13
          }
        },
        "range": [
          358,
          367
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                365,
                366
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
            "out": false,
            "range": [
              359,
              366
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        339,
        379
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 13
        },
        "start": {
          "column": 0,
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
            "name": "x31",
            "optional": false,
            "range": [
              387,
              390
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  396,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "range": [
                393,
                395
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              393,
              404
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 15
              }
            }
          },
          "range": [
            387,
            404
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
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
        381,
        405
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 15
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
            "name": "x32",
            "optional": false,
            "range": [
              412,
              415
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  421,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 15,
                    "line": 16
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "range": [
                418,
                420
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              418,
              429
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 16
              },
              "start": {
                "column": 12,
                "line": 16
              }
            }
          },
          "range": [
            412,
            429
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        406,
        430
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
        "name": "f4",
        "optional": false,
        "range": [
          449,
          451
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
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
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 32,
                "line": 18
              }
            },
            "range": [
              464,
              472
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
                      467,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 35,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    467,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 35,
                      "line": 18
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
                      470,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 18
                      },
                      "start": {
                        "column": 38,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    470,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 38,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                466,
                472
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 34,
                  "line": 18
                }
              }
            }
          },
          "range": [
            461,
            472
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 18
            },
            "start": {
              "column": 29,
              "line": 18
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 44,
            "line": 18
          },
          "start": {
            "column": 41,
            "line": 18
          }
        },
        "range": [
          473,
          476
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              475,
              476
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 18
              },
              "start": {
                "column": 43,
                "line": 18
              }
            }
          },
          "range": [
            475,
            476
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 18
            },
            "start": {
              "column": 43,
              "line": 18
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 18
          },
          "start": {
            "column": 19,
            "line": 18
          }
        },
        "range": [
          451,
          460
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                458,
                459
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 26,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              452,
              459
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        432,
        477
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 18
        },
        "start": {
          "column": 0,
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
            "name": "x41",
            "optional": false,
            "range": [
              485,
              488
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
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
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          496,
                          497
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
                      {
                        "type": "Literal",
                        "raw": "'x'",
                        "value": "x",
                        "range": [
                          499,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 20
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      495,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 20
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    }
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          506,
                          507
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 20
                          },
                          "start": {
                            "column": 27,
                            "line": 20
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "'y'",
                        "value": "y",
                        "range": [
                          509,
                          512
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      505,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 20
                      },
                      "start": {
                        "column": 26,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  494,
                  514
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                491,
                493
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              491,
              515
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          },
          "range": [
            485,
            515
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 20
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
        479,
        516
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 20
        },
        "start": {
          "column": 0,
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
            "name": "x42",
            "optional": false,
            "range": [
              523,
              526
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 21
              },
              "start": {
                "column": 6,
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
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            535,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 21
                            },
                            "start": {
                              "column": 18,
                              "line": 21
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            538,
                            539
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
                          535,
                          539
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
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            541,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "'x'",
                          "value": "x",
                          "range": [
                            544,
                            547
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 21
                            },
                            "start": {
                              "column": 27,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          541,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 21
                          },
                          "start": {
                            "column": 24,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      533,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 16,
                        "line": 21
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            553,
                            554
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 21
                            },
                            "start": {
                              "column": 36,
                              "line": 21
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            556,
                            557
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 21
                            },
                            "start": {
                              "column": 39,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          553,
                          557
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 21
                          },
                          "start": {
                            "column": 36,
                            "line": 21
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            559,
                            560
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 21
                            },
                            "start": {
                              "column": 42,
                              "line": 21
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "'y'",
                          "value": "y",
                          "range": [
                            562,
                            565
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 21
                            },
                            "start": {
                              "column": 45,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          559,
                          565
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 21
                          },
                          "start": {
                            "column": 42,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "range": [
                      551,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  532,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "range": [
                529,
                531
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "optional": false,
            "range": [
              529,
              569
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          },
          "range": [
            523,
            569
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        517,
        570
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
        "name": "f5",
        "optional": false,
        "range": [
          589,
          591
        ],
        "loc": {
          "end": {
            "column": 19,
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
                "column": 48,
                "line": 23
              },
              "start": {
                "column": 32,
                "line": 23
              }
            },
            "range": [
              604,
              620
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
                      608,
                      609
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
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 23
                      },
                      "start": {
                        "column": 37,
                        "line": 23
                      }
                    },
                    "range": [
                      609,
                      612
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          611,
                          612
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 23
                          },
                          "start": {
                            "column": 39,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        611,
                        612
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 23
                        },
                        "start": {
                          "column": 39,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    608,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 23
                    },
                    "start": {
                      "column": 36,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      614,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 42,
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
                        "column": 46,
                        "line": 23
                      },
                      "start": {
                        "column": 43,
                        "line": 23
                      }
                    },
                    "range": [
                      615,
                      618
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          617,
                          618
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
                      "range": [
                        617,
                        618
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
                    }
                  },
                  "range": [
                    614,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 23
                    },
                    "start": {
                      "column": 42,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                606,
                620
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 23
                },
                "start": {
                  "column": 34,
                  "line": 23
                }
              }
            }
          },
          "range": [
            601,
            620
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 23
            },
            "start": {
              "column": 29,
              "line": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 23
          },
          "start": {
            "column": 49,
            "line": 23
          }
        },
        "range": [
          621,
          624
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              623,
              624
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 23
              },
              "start": {
                "column": 51,
                "line": 23
              }
            }
          },
          "range": [
            623,
            624
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 23
            },
            "start": {
              "column": 51,
              "line": 23
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 23
          },
          "start": {
            "column": 19,
            "line": 23
          }
        },
        "range": [
          591,
          600
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                598,
                599
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
            "out": false,
            "range": [
              592,
              599
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 20,
                "line": 23
              }
            }
          }
        ]
      },
      "range": [
        572,
        625
      ],
      "loc": {
        "end": {
          "column": 53,
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
            "name": "x51",
            "optional": false,
            "range": [
              633,
              636
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        644,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 17,
                          "line": 25
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            648,
                            649
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 25
                            },
                            "start": {
                              "column": 21,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'x'",
                          "value": "x",
                          "range": [
                            651,
                            654
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 25
                            },
                            "start": {
                              "column": 24,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        647,
                        655
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      644,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        657,
                        658
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 25
                        },
                        "start": {
                          "column": 30,
                          "line": 25
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            661,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 25
                            },
                            "start": {
                              "column": 34,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'y'",
                          "value": "y",
                          "range": [
                            664,
                            667
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 25
                            },
                            "start": {
                              "column": 37,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        660,
                        668
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 25
                        },
                        "start": {
                          "column": 33,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      657,
                      668
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 25
                      },
                      "start": {
                        "column": 30,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  642,
                  670
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "range": [
                639,
                641
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "optional": false,
            "range": [
              639,
              671
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          "range": [
            633,
            671
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        627,
        672
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "x52",
            "optional": false,
            "range": [
              679,
              682
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        690,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 26
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              695,
                              696
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 26
                              },
                              "start": {
                                "column": 22,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              698,
                              699
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 26
                              },
                              "start": {
                                "column": 25,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            695,
                            699
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 26
                            },
                            "start": {
                              "column": 22,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              701,
                              702
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 26
                              },
                              "start": {
                                "column": 28,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'x'",
                            "value": "x",
                            "range": [
                              704,
                              707
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 26
                              },
                              "start": {
                                "column": 31,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            701,
                            707
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
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
                        693,
                        709
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 26
                        },
                        "start": {
                          "column": 20,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      690,
                      709
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 17,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        711,
                        712
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 26
                        },
                        "start": {
                          "column": 38,
                          "line": 26
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              716,
                              717
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 26
                              },
                              "start": {
                                "column": 43,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              719,
                              720
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 26
                              },
                              "start": {
                                "column": 46,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            716,
                            720
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 26
                            },
                            "start": {
                              "column": 43,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              722,
                              723
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 26
                              },
                              "start": {
                                "column": 49,
                                "line": 26
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "'y'",
                            "value": "y",
                            "range": [
                              725,
                              728
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 26
                              },
                              "start": {
                                "column": 52,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            722,
                            728
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 26
                            },
                            "start": {
                              "column": 49,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        714,
                        730
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 26
                        },
                        "start": {
                          "column": 41,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      711,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 26
                      },
                      "start": {
                        "column": 38,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  688,
                  732
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 26
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "range": [
                685,
                687
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              685,
              733
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          },
          "range": [
            679,
            733
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        673,
        734
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
        "name": "f6",
        "optional": false,
        "range": [
          753,
          755
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
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              795,
              799
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 28
              },
              "start": {
                "column": 59,
                "line": 28
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 28
              },
              "start": {
                "column": 63,
                "line": 28
              }
            },
            "range": [
              799,
              802
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  801,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 28
                  },
                  "start": {
                    "column": 65,
                    "line": 28
                  }
                }
              },
              "range": [
                801,
                802
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 28
                },
                "start": {
                  "column": 65,
                  "line": 28
                }
              }
            }
          },
          "range": [
            792,
            802
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 28
            },
            "start": {
              "column": 56,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 28
          },
          "start": {
            "column": 67,
            "line": 28
          }
        },
        "range": [
          803,
          806
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              805,
              806
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 28
              },
              "start": {
                "column": 69,
                "line": 28
              }
            }
          },
          "range": [
            805,
            806
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 28
            },
            "start": {
              "column": 69,
              "line": 28
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 28
          },
          "start": {
            "column": 19,
            "line": 28
          }
        },
        "range": [
          755,
          791
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    781,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 28
                    },
                    "start": {
                      "column": 45,
                      "line": 28
                    }
                  }
                },
                "range": [
                  781,
                  790
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 28
                  },
                  "start": {
                    "column": 45,
                    "line": 28
                  }
                }
              },
              "range": [
                772,
                790
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
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
                762,
                763
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
            "out": false,
            "range": [
              756,
              790
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 28
              },
              "start": {
                "column": 20,
                "line": 28
              }
            }
          }
        ]
      },
      "range": [
        736,
        807
      ],
      "loc": {
        "end": {
          "column": 71,
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
            "name": "x61",
            "optional": false,
            "range": [
              815,
              818
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 30
              },
              "start": {
                "column": 6,
                "line": 30
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  824,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 30
                  },
                  "start": {
                    "column": 15,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  827,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 30
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        834,
                        835
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 25,
                          "line": 30
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        837,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 30
                        },
                        "start": {
                          "column": 28,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      834,
                      838
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        840,
                        841
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 30
                        },
                        "start": {
                          "column": 31,
                          "line": 30
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'x'",
                      "value": "x",
                      "range": [
                        843,
                        846
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 30
                        },
                        "start": {
                          "column": 34,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      840,
                      846
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 30
                      },
                      "start": {
                        "column": 31,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  832,
                  848
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 30
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                821,
                823
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 12,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              821,
              849
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 30
              },
              "start": {
                "column": 12,
                "line": 30
              }
            }
          },
          "range": [
            815,
            849
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 30
            },
            "start": {
              "column": 6,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        809,
        850
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 30
        },
        "start": {
          "column": 0,
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
            "name": "x62",
            "optional": false,
            "range": [
              857,
              860
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        870,
                        871
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        873,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 31
                        },
                        "start": {
                          "column": 22,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    869,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 31
                    },
                    "start": {
                      "column": 18,
                      "line": 31
                    }
                  }
                },
                "range": [
                  866,
                  877
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                863,
                865
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              863,
              878
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 31
              },
              "start": {
                "column": 12,
                "line": 31
              }
            }
          },
          "range": [
            857,
            878
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 31
            },
            "start": {
              "column": 6,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        851,
        879
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 31
        },
        "start": {
          "column": 0,
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
            "name": "x63",
            "optional": false,
            "range": [
              886,
              889
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  895,
                  899
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
                  }
                }
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        905,
                        906
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
                    {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        908,
                        911
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
                    }
                  ],
                  "range": [
                    904,
                    912
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 24,
                      "line": 32
                    }
                  }
                },
                "range": [
                  901,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                892,
                894
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
            "optional": false,
            "range": [
              892,
              913
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          },
          "range": [
            886,
            913
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        880,
        914
      ],
      "loc": {
        "end": {
          "column": 34,
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
            "name": "x64",
            "optional": false,
            "range": [
              921,
              924
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        935,
                        936
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 33
                        },
                        "start": {
                          "column": 20,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        938,
                        941
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    934,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 19,
                      "line": 33
                    }
                  }
                },
                "range": [
                  930,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 33
                  },
                  "start": {
                    "column": 15,
                    "line": 33
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                927,
                929
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 33
                },
                "start": {
                  "column": 12,
                  "line": 33
                }
              }
            },
            "optional": false,
            "range": [
              927,
              944
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 33
              },
              "start": {
                "column": 12,
                "line": 33
              }
            }
          },
          "range": [
            921,
            944
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        915,
        945
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "x65",
            "optional": false,
            "range": [
              952,
              955
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  961,
                  965
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 34
                  },
                  "start": {
                    "column": 15,
                    "line": 34
                  }
                }
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        972,
                        973
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 26,
                          "line": 34
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        975,
                        978
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 34
                        },
                        "start": {
                          "column": 29,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    971,
                    979
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 34
                    },
                    "start": {
                      "column": 25,
                      "line": 34
                    }
                  }
                },
                "range": [
                  967,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                958,
                960
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              958,
              981
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 34
              },
              "start": {
                "column": 12,
                "line": 34
              }
            }
          },
          "range": [
            952,
            981
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 34
            },
            "start": {
              "column": 6,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        946,
        982
      ],
      "loc": {
        "end": {
          "column": 36,
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
          1002,
          1067
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1008,
                1019
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
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
                1019,
                1028
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1026,
                  1028
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 37
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 37
                      },
                      "start": {
                        "column": 17,
                        "line": 37
                      }
                    },
                    "range": [
                      1021,
                      1024
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1023,
                          1024
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 37
                          },
                          "start": {
                            "column": 19,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1023,
                        1024
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 37
                        },
                        "start": {
                          "column": 19,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    1020,
                    1024
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 37
                    },
                    "start": {
                      "column": 16,
                      "line": 37
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 37
                },
                "start": {
                  "column": 15,
                  "line": 37
                }
              }
            },
            "range": [
              1008,
              1028
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
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
              "name": "foo",
              "optional": false,
              "range": [
                1033,
                1036
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                1036,
                1065
              ],
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
                        1061,
                        1062
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 38
                        },
                        "start": {
                          "column": 32,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1054,
                      1063
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 38
                      },
                      "start": {
                        "column": 25,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  1052,
                  1065
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 38
                  },
                  "start": {
                    "column": 23,
                    "line": 38
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 18,
                        "line": 38
                      }
                    },
                    "range": [
                      1047,
                      1050
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1049,
                          1050
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 38
                          },
                          "start": {
                            "column": 20,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        1049,
                        1050
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 38
                        },
                        "start": {
                          "column": 20,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    1046,
                    1050
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 38
                    },
                    "start": {
                      "column": 17,
                      "line": 38
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 38
                  }
                },
                "range": [
                  1036,
                  1045
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": true,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1043,
                        1044
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 38
                        },
                        "start": {
                          "column": 14,
                          "line": 38
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1037,
                      1044
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 36,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              }
            },
            "range": [
              1033,
              1065
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 38
              },
              "start": {
                "column": 4,
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
            "column": 18,
            "line": 36
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          990,
          992
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 36
          },
          "start": {
            "column": 6,
            "line": 36
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 36
          },
          "start": {
            "column": 8,
            "line": 36
          }
        },
        "range": [
          992,
          1001
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                999,
                1000
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 36
                },
                "start": {
                  "column": 15,
                  "line": 36
                }
              }
            },
            "out": false,
            "range": [
              993,
              1000
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          }
        ]
      },
      "range": [
        984,
        1067
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
            "name": "c71",
            "optional": false,
            "range": [
              1075,
              1078
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 41
              },
              "start": {
                "column": 6,
                "line": 41
              }
            }
          },
          "init": {
            "type": "NewExpression",
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1090,
                        1091
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 41
                        },
                        "start": {
                          "column": 21,
                          "line": 41
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1093,
                        1094
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
                    "range": [
                      1090,
                      1094
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 41
                      },
                      "start": {
                        "column": 21,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1096,
                        1097
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 41
                        },
                        "start": {
                          "column": 27,
                          "line": 41
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"c\"",
                      "value": "c",
                      "range": [
                        1099,
                        1102
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 41
                        },
                        "start": {
                          "column": 30,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1096,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 41
                      },
                      "start": {
                        "column": 27,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        1104,
                        1105
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 41
                        },
                        "start": {
                          "column": 35,
                          "line": 41
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "\"e\"",
                          "value": "e",
                          "range": [
                            1108,
                            1111
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 41
                            },
                            "start": {
                              "column": 39,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            1113,
                            1114
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 41
                            },
                            "start": {
                              "column": 44,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "true",
                          "value": true,
                          "range": [
                            1116,
                            1120
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 41
                            },
                            "start": {
                              "column": 47,
                              "line": 41
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
                                "name": "f",
                                "optional": false,
                                "range": [
                                  1124,
                                  1125
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 41
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "\"g\"",
                                "value": "g",
                                "range": [
                                  1127,
                                  1130
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 41
                                  }
                                }
                              },
                              "range": [
                                1124,
                                1130
                              ],
                              "loc": {
                                "end": {
                                  "column": 61,
                                  "line": 41
                                },
                                "start": {
                                  "column": 55,
                                  "line": 41
                                }
                              }
                            }
                          ],
                          "range": [
                            1122,
                            1132
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 41
                            },
                            "start": {
                              "column": 53,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        1107,
                        1133
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 41
                        },
                        "start": {
                          "column": 38,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1104,
                      1133
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 41
                      },
                      "start": {
                        "column": 35,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  1088,
                  1135
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 41
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "range": [
                1085,
                1087
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 41
                }
              }
            },
            "range": [
              1081,
              1136
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 41
              },
              "start": {
                "column": 12,
                "line": 41
              }
            }
          },
          "range": [
            1075,
            1136
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 41
            },
            "start": {
              "column": 6,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1069,
        1137
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 41
        },
        "start": {
          "column": 0,
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
            "name": "c72",
            "optional": false,
            "range": [
              1144,
              1147
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
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
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      1159,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 42
                      },
                      "start": {
                        "column": 21,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          1165,
                          1168
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 42
                          },
                          "start": {
                            "column": 27,
                            "line": 42
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "'c'",
                        "value": "c",
                        "range": [
                          1170,
                          1173
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 42
                          },
                          "start": {
                            "column": 32,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "range": [
                      1164,
                      1174
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 42
                      },
                      "start": {
                        "column": 26,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  1158,
                  1175
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 20,
                    "line": 42
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
                "name": "c71",
                "optional": false,
                "range": [
                  1150,
                  1153
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 42
                  },
                  "start": {
                    "column": 12,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1154,
                  1157
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 16,
                    "line": 42
                  }
                }
              },
              "range": [
                1150,
                1157
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 42
                },
                "start": {
                  "column": 12,
                  "line": 42
                }
              }
            },
            "optional": false,
            "range": [
              1150,
              1176
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 42
              },
              "start": {
                "column": 12,
                "line": 42
              }
            }
          },
          "range": [
            1144,
            1176
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1138,
        1177
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 42
        },
        "start": {
          "column": 0,
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
            "name": "C2",
            "optional": false,
            "range": [
              1185,
              1187
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1206,
                1208
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 44
                },
                "start": {
                  "column": 27,
                  "line": 44
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 44
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              },
              "range": [
                1196,
                1205
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1203,
                      1204
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1197,
                    1204
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 44
                    },
                    "start": {
                      "column": 18,
                      "line": 44
                    }
                  }
                }
              ]
            },
            "range": [
              1190,
              1208
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 44
              },
              "start": {
                "column": 11,
                "line": 44
              }
            }
          },
          "range": [
            1185,
            1208
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1179,
        1208
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 44
        },
        "start": {
          "column": 0,
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
            "name": "fx1",
            "optional": false,
            "range": [
              1216,
              1219
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1241,
                1242
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 46
                },
                "start": {
                  "column": 31,
                  "line": 46
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
                      "line": 46
                    },
                    "start": {
                      "column": 23,
                      "line": 46
                    }
                  },
                  "range": [
                    1233,
                    1236
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1235,
                        1236
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 46
                        },
                        "start": {
                          "column": 25,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1235,
                      1236
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 46
                      },
                      "start": {
                        "column": 25,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  1232,
                  1236
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 12,
                  "line": 46
                }
              },
              "range": [
                1222,
                1231
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1229,
                      1230
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 46
                      },
                      "start": {
                        "column": 19,
                        "line": 46
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1223,
                    1230
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 46
                    },
                    "start": {
                      "column": 13,
                      "line": 46
                    }
                  }
                }
              ]
            },
            "range": [
              1222,
              1242
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 46
              },
              "start": {
                "column": 12,
                "line": 46
              }
            }
          },
          "range": [
            1216,
            1242
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1210,
        1243
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "fx2",
            "optional": false,
            "range": [
              1250,
              1253
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1276,
                1277
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 47
                },
                "start": {
                  "column": 32,
                  "line": 47
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
                      "column": 27,
                      "line": 47
                    },
                    "start": {
                      "column": 24,
                      "line": 47
                    }
                  },
                  "range": [
                    1268,
                    1271
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1270,
                        1271
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 47
                        },
                        "start": {
                          "column": 26,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1270,
                      1271
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 47
                      },
                      "start": {
                        "column": 26,
                        "line": 47
                      }
                    }
                  }
                },
                "range": [
                  1267,
                  1271
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 47
                  },
                  "start": {
                    "column": 23,
                    "line": 47
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              },
              "range": [
                1256,
                1266
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1263,
                      1264
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 47
                      },
                      "start": {
                        "column": 19,
                        "line": 47
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1257,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 47
                    },
                    "start": {
                      "column": 13,
                      "line": 47
                    }
                  }
                }
              ]
            },
            "range": [
              1256,
              1277
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 47
              },
              "start": {
                "column": 12,
                "line": 47
              }
            }
          },
          "range": [
            1250,
            1277
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1244,
        1278
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1302,
          1310
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1304,
                1305
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 24,
                  "line": 49
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
                  "column": 28,
                  "line": 49
                },
                "start": {
                  "column": 25,
                  "line": 49
                }
              },
              "range": [
                1305,
                1308
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1307,
                    1308
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 49
                    },
                    "start": {
                      "column": 27,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1307,
                  1308
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 49
                  },
                  "start": {
                    "column": 27,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1304,
              1308
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 49
              },
              "start": {
                "column": 24,
                "line": 49
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 49
          },
          "start": {
            "column": 22,
            "line": 49
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "range": [
          1290,
          1292
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 49
          },
          "start": {
            "column": 10,
            "line": 49
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 49
          },
          "start": {
            "column": 12,
            "line": 49
          }
        },
        "range": [
          1292,
          1301
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1299,
                1300
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 49
                },
                "start": {
                  "column": 19,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              1293,
              1300
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 49
              },
              "start": {
                "column": 13,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        1280,
        1310
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1335,
          1363
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1341,
                1342
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
            "kind": "method",
            "optional": false,
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
                      "line": 52
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  },
                  "range": [
                    1353,
                    1356
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1355,
                        1356
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 52
                        },
                        "start": {
                          "column": 18,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1355,
                      1356
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 52
                      },
                      "start": {
                        "column": 18,
                        "line": 52
                      }
                    }
                  }
                },
                "range": [
                  1352,
                  1356
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 52
                  },
                  "start": {
                    "column": 15,
                    "line": 52
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 52
                },
                "start": {
                  "column": 20,
                  "line": 52
                }
              },
              "range": [
                1357,
                1360
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1359,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 52
                    },
                    "start": {
                      "column": 22,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1359,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 52
                  },
                  "start": {
                    "column": 22,
                    "line": 52
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 52
                },
                "start": {
                  "column": 5,
                  "line": 52
                }
              },
              "range": [
                1342,
                1351
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1349,
                      1350
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 52
                      },
                      "start": {
                        "column": 12,
                        "line": 52
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1343,
                    1350
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 52
                    },
                    "start": {
                      "column": 6,
                      "line": 52
                    }
                  }
                }
              ]
            },
            "range": [
              1341,
              1361
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 13,
            "line": 51
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          1332,
          1334
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 51
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "range": [
        1322,
        1363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          1370,
          1372
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 55
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
            1384,
            1385
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 55
            },
            "start": {
              "column": 19,
              "line": 55
            }
          }
        },
        "range": [
          1384,
          1385
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 55
          },
          "start": {
            "column": 19,
            "line": 55
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 55
          },
          "start": {
            "column": 7,
            "line": 55
          }
        },
        "range": [
          1372,
          1381
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1379,
                1380
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 55
                },
                "start": {
                  "column": 14,
                  "line": 55
                }
              }
            },
            "out": false,
            "range": [
              1373,
              1380
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 55
              },
              "start": {
                "column": 8,
                "line": 55
              }
            }
          }
        ]
      },
      "range": [
        1365,
        1386
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "range": [
          1403,
          1405
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 57
          }
        }
      },
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
                  "line": 57
                },
                "start": {
                  "column": 21,
                  "line": 57
                }
              },
              "range": [
                1419,
                1422
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1421,
                    1422
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 57
                    },
                    "start": {
                      "column": 23,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1421,
                  1422
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 57
                  },
                  "start": {
                    "column": 23,
                    "line": 57
                  }
                }
              }
            },
            "range": [
              1418,
              1422
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 57
              },
              "start": {
                "column": 20,
                "line": 57
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 30,
              "line": 57
            },
            "start": {
              "column": 26,
              "line": 57
            }
          },
          "range": [
            1424,
            1428
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1427,
                1428
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 57
                },
                "start": {
                  "column": 29,
                  "line": 57
                }
              }
            },
            "range": [
              1427,
              1428
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 57
              },
              "start": {
                "column": 29,
                "line": 57
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 19,
              "line": 57
            },
            "start": {
              "column": 10,
              "line": 57
            }
          },
          "range": [
            1408,
            1417
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": true,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1415,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 57
                  },
                  "start": {
                    "column": 17,
                    "line": 57
                  }
                }
              },
              "out": false,
              "range": [
                1409,
                1416
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            }
          ]
        },
        "range": [
          1408,
          1428
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 57
          },
          "start": {
            "column": 10,
            "line": 57
          }
        }
      },
      "range": [
        1398,
        1429
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "range": [
          1435,
          1437
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "line": 58
                    },
                    "start": {
                      "column": 23,
                      "line": 58
                    }
                  },
                  "range": [
                    1453,
                    1456
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1455,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 58
                        },
                        "start": {
                          "column": 25,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1455,
                      1456
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 58
                      },
                      "start": {
                        "column": 25,
                        "line": 58
                      }
                    }
                  }
                },
                "range": [
                  1452,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 58
                  },
                  "start": {
                    "column": 22,
                    "line": 58
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 58
                },
                "start": {
                  "column": 27,
                  "line": 58
                }
              },
              "range": [
                1457,
                1460
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1459,
                    1460
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 58
                    },
                    "start": {
                      "column": 29,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1459,
                  1460
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 58
                  },
                  "start": {
                    "column": 29,
                    "line": 58
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 58
                },
                "start": {
                  "column": 12,
                  "line": 58
                }
              },
              "range": [
                1442,
                1451
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1449,
                      1450
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 58
                      },
                      "start": {
                        "column": 19,
                        "line": 58
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1443,
                    1450
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 58
                    },
                    "start": {
                      "column": 13,
                      "line": 58
                    }
                  }
                }
              ]
            },
            "range": [
              1442,
              1460
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 58
              },
              "start": {
                "column": 12,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1440,
          1462
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 58
          },
          "start": {
            "column": 10,
            "line": 58
          }
        }
      },
      "range": [
        1430,
        1463
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "range": [
          1469,
          1471
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
                  "column": 28,
                  "line": 59
                },
                "start": {
                  "column": 25,
                  "line": 59
                }
              },
              "range": [
                1489,
                1492
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1491,
                    1492
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 59
                    },
                    "start": {
                      "column": 27,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1491,
                  1492
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 59
                  },
                  "start": {
                    "column": 27,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1488,
              1492
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 59
              },
              "start": {
                "column": 24,
                "line": 59
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 34,
              "line": 59
            },
            "start": {
              "column": 30,
              "line": 59
            }
          },
          "range": [
            1494,
            1498
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1497,
                1498
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 59
                },
                "start": {
                  "column": 33,
                  "line": 59
                }
              }
            },
            "range": [
              1497,
              1498
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 59
              },
              "start": {
                "column": 33,
                "line": 59
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 59
            }
          },
          "range": [
            1478,
            1487
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": true,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1485,
                  1486
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 59
                  },
                  "start": {
                    "column": 21,
                    "line": 59
                  }
                }
              },
              "out": false,
              "range": [
                1479,
                1486
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 59
                },
                "start": {
                  "column": 15,
                  "line": 59
                }
              }
            }
          ]
        },
        "range": [
          1474,
          1498
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 59
          },
          "start": {
            "column": 10,
            "line": 59
          }
        }
      },
      "range": [
        1464,
        1499
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "range": [
          1505,
          1507
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 60
          },
          "start": {
            "column": 5,
            "line": 60
          }
        }
      },
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
                      "column": 30,
                      "line": 60
                    },
                    "start": {
                      "column": 27,
                      "line": 60
                    }
                  },
                  "range": [
                    1527,
                    1530
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1529,
                        1530
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 60
                        },
                        "start": {
                          "column": 29,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1529,
                      1530
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 60
                      },
                      "start": {
                        "column": 29,
                        "line": 60
                      }
                    }
                  }
                },
                "range": [
                  1526,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 60
                  },
                  "start": {
                    "column": 26,
                    "line": 60
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 60
                },
                "start": {
                  "column": 31,
                  "line": 60
                }
              },
              "range": [
                1531,
                1534
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1533,
                    1534
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 60
                    },
                    "start": {
                      "column": 33,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1533,
                  1534
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 60
                  },
                  "start": {
                    "column": 33,
                    "line": 60
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 60
                },
                "start": {
                  "column": 16,
                  "line": 60
                }
              },
              "range": [
                1516,
                1525
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1523,
                      1524
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 60
                      },
                      "start": {
                        "column": 23,
                        "line": 60
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1517,
                    1524
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 60
                    },
                    "start": {
                      "column": 17,
                      "line": 60
                    }
                  }
                }
              ]
            },
            "range": [
              1512,
              1534
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 60
              },
              "start": {
                "column": 12,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1510,
          1536
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 60
          },
          "start": {
            "column": 10,
            "line": 60
          }
        }
      },
      "range": [
        1500,
        1537
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "range": [
          1576,
          1579
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
          }
        }
      },
      "typeAnnotation": {
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
                1584,
                1585
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 64
                },
                "start": {
                  "column": 13,
                  "line": 64
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
                  "column": 35,
                  "line": 64
                },
                "start": {
                  "column": 14,
                  "line": 64
                }
              },
              "range": [
                1585,
                1606
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
                        1589,
                        1590
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 64
                        },
                        "start": {
                          "column": 18,
                          "line": 64
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
                          "line": 64
                        },
                        "start": {
                          "column": 19,
                          "line": 64
                        }
                      },
                      "range": [
                        1590,
                        1604
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
                              "name": "c",
                              "optional": false,
                              "range": [
                                1594,
                                1595
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 64
                                },
                                "start": {
                                  "column": 23,
                                  "line": 64
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
                                  "column": 31,
                                  "line": 64
                                },
                                "start": {
                                  "column": 24,
                                  "line": 64
                                }
                              },
                              "range": [
                                1595,
                                1602
                              ],
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"123\"",
                                  "value": "123",
                                  "range": [
                                    1597,
                                    1602
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 64
                                    }
                                  }
                                },
                                "range": [
                                  1597,
                                  1602
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 64
                                  }
                                }
                              }
                            },
                            "range": [
                              1594,
                              1602
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 64
                              },
                              "start": {
                                "column": 23,
                                "line": 64
                              }
                            }
                          }
                        ],
                        "range": [
                          1592,
                          1604
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 64
                          },
                          "start": {
                            "column": 21,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1589,
                      1604
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 64
                      },
                      "start": {
                        "column": 18,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1587,
                  1606
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 64
                  },
                  "start": {
                    "column": 16,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1584,
              1606
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 64
              },
              "start": {
                "column": 13,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1582,
          1608
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 64
          },
          "start": {
            "column": 11,
            "line": 64
          }
        }
      },
      "range": [
        1571,
        1609
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPath",
        "optional": false,
        "range": [
          1616,
          1623
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 66
          },
          "start": {
            "column": 5,
            "line": 66
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
            "name": "P",
            "optional": false,
            "range": [
              1636,
              1637
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "range": [
            1636,
            1637
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 67
            },
            "start": {
              "column": 4,
              "line": 67
            }
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [],
            "range": [
              1655,
              1657
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 67
              },
              "start": {
                "column": 23,
                "line": 67
              }
            }
          },
          "range": [
            1646,
            1657
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 67
            },
            "start": {
              "column": 14,
              "line": 67
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
              "name": "P",
              "optional": false,
              "range": [
                1668,
                1669
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1668,
              1669
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "readonly",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
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
                            1710,
                            1711
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 68
                            },
                            "start": {
                              "column": 46,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1710,
                          1711
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 68
                          },
                          "start": {
                            "column": 46,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1704,
                        1711
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 68
                        },
                        "start": {
                          "column": 40,
                          "line": 68
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        1694,
                        1695
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 68
                        },
                        "start": {
                          "column": 30,
                          "line": 68
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1694,
                      1711
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 68
                      },
                      "start": {
                        "column": 30,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1688,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 68
                    },
                    "start": {
                      "column": 24,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Rest",
                        "optional": false,
                        "range": [
                          1722,
                          1726
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 68
                          },
                          "start": {
                            "column": 58,
                            "line": 68
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        1722,
                        1726
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 68
                        },
                        "start": {
                          "column": 58,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1716,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 68
                      },
                      "start": {
                        "column": 52,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1713,
                    1726
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 68
                    },
                    "start": {
                      "column": 49,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                1687,
                1727
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 68
                },
                "start": {
                  "column": 23,
                  "line": 68
                }
              }
            },
            "range": [
              1678,
              1727
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 68
              },
              "start": {
                "column": 14,
                "line": 68
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1756,
              1761
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1737,
                1749
              ],
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        1740,
                        1741
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 68
                        },
                        "start": {
                          "column": 76,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1740,
                      1741
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 68
                      },
                      "start": {
                        "column": 76,
                        "line": 68
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
                        1738,
                        1739
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 68
                        },
                        "start": {
                          "column": 74,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1738,
                      1739
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 68
                      },
                      "start": {
                        "column": 74,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1738,
                    1742
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 68
                    },
                    "start": {
                      "column": 74,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "range": [
                      1744,
                      1748
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 68
                      },
                      "start": {
                        "column": 80,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1744,
                    1748
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 68
                    },
                    "start": {
                      "column": 80,
                      "line": 68
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 68
                },
                "start": {
                  "column": 73,
                  "line": 68
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "GetPath",
              "optional": false,
              "range": [
                1730,
                1737
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 68
                },
                "start": {
                  "column": 66,
                  "line": 68
                }
              }
            },
            "range": [
              1730,
              1749
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 68
              },
              "start": {
                "column": 66,
                "line": 68
              }
            }
          },
          "range": [
            1668,
            1761
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 69
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1660,
              1661
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 67
              },
              "start": {
                "column": 28,
                "line": 67
              }
            }
          },
          "range": [
            1660,
            1661
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 67
            },
            "start": {
              "column": 28,
              "line": 67
            }
          }
        },
        "range": [
          1636,
          1761
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 69
          },
          "start": {
            "column": 4,
            "line": 67
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
            "column": 12,
            "line": 66
          }
        },
        "range": [
          1623,
          1629
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
                1624,
                1625
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 66
                },
                "start": {
                  "column": 13,
                  "line": 66
                }
              }
            },
            "out": false,
            "range": [
              1624,
              1625
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 66
              },
              "start": {
                "column": 13,
                "line": 66
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
              "name": "P",
              "optional": false,
              "range": [
                1627,
                1628
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
              1627,
              1628
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
        1611,
        1762
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 66
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
          1854,
          1856
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 71
          },
          "start": {
            "column": 90,
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
        "name": "set",
        "optional": false,
        "range": [
          1773,
          1776
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 71
              },
              "start": {
                "column": 54,
                "line": 71
              }
            },
            "range": [
              1818,
              1821
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1820,
                  1821
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 71
                  },
                  "start": {
                    "column": 56,
                    "line": 71
                  }
                }
              },
              "range": [
                1820,
                1821
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 71
                },
                "start": {
                  "column": 56,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1815,
            1821
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 71
            },
            "start": {
              "column": 51,
              "line": 71
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 66,
                "line": 71
              },
              "start": {
                "column": 63,
                "line": 71
              }
            },
            "range": [
              1827,
              1830
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "range": [
                  1829,
                  1830
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 71
                  },
                  "start": {
                    "column": 65,
                    "line": 71
                  }
                }
              },
              "range": [
                1829,
                1830
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 71
                },
                "start": {
                  "column": 65,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1823,
            1830
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 71
            },
            "start": {
              "column": 59,
              "line": 71
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 71
              },
              "start": {
                "column": 73,
                "line": 71
              }
            },
            "range": [
              1837,
              1852
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1846,
                  1852
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
                        1847,
                        1848
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 71
                        },
                        "start": {
                          "column": 83,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1847,
                      1848
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 71
                      },
                      "start": {
                        "column": 83,
                        "line": 71
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        1850,
                        1851
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 71
                        },
                        "start": {
                          "column": 86,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1850,
                      1851
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 71
                      },
                      "start": {
                        "column": 86,
                        "line": 71
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 71
                  },
                  "start": {
                    "column": 82,
                    "line": 71
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetPath",
                "optional": false,
                "range": [
                  1839,
                  1846
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 71
                  },
                  "start": {
                    "column": 75,
                    "line": 71
                  }
                }
              },
              "range": [
                1839,
                1852
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 71
                },
                "start": {
                  "column": 75,
                  "line": 71
                }
              }
            }
          },
          "range": [
            1832,
            1852
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 71
            },
            "start": {
              "column": 68,
              "line": 71
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 71
          },
          "start": {
            "column": 12,
            "line": 71
          }
        },
        "range": [
          1776,
          1814
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
                1777,
                1778
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 71
                },
                "start": {
                  "column": 13,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1777,
              1778
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 71
              },
              "start": {
                "column": 13,
                "line": 71
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    1805,
                    1811
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 71
                    },
                    "start": {
                      "column": 41,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1805,
                  1813
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 71
                  },
                  "start": {
                    "column": 41,
                    "line": 71
                  }
                }
              },
              "range": [
                1796,
                1813
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 71
                },
                "start": {
                  "column": 32,
                  "line": 71
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                1786,
                1787
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 71
                },
                "start": {
                  "column": 22,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1780,
              1813
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 71
              },
              "start": {
                "column": 16,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        1764,
        1856
      ],
      "loc": {
        "end": {
          "column": 92,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 73
                },
                "start": {
                  "column": 15,
                  "line": 73
                }
              },
              "range": [
                1873,
                1878
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    1875,
                    1878
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 73
                    },
                    "start": {
                      "column": 17,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1875,
                  1878
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 73
                  },
                  "start": {
                    "column": 17,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              1870,
              1878
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 73
              },
              "start": {
                "column": 12,
                "line": 73
              }
            }
          },
          "init": null,
          "range": [
            1870,
            1878
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 73
            },
            "start": {
              "column": 12,
              "line": 73
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1858,
        1879
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 74
                },
                "start": {
                  "column": 17,
                  "line": 74
                }
              },
              "range": [
                1897,
                1904
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"123\"",
                  "value": "123",
                  "range": [
                    1899,
                    1904
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 74
                    },
                    "start": {
                      "column": 19,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1899,
                  1904
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 74
                  },
                  "start": {
                    "column": 19,
                    "line": 74
                  }
                }
              }
            },
            "range": [
              1892,
              1904
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 74
              },
              "start": {
                "column": 12,
                "line": 74
              }
            }
          },
          "init": null,
          "range": [
            1892,
            1904
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 74
            },
            "start": {
              "column": 12,
              "line": 74
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        1880,
        1905
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "obj",
            "optional": false,
            "range": [
              1911,
              1914
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  1917,
                  1920
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 76
                  },
                  "start": {
                    "column": 10,
                    "line": 76
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'b'",
                "value": "b",
                "range": [
                  1922,
                  1925
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 76
                  },
                  "start": {
                    "column": 15,
                    "line": 76
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'c'",
                "value": "c",
                "range": [
                  1927,
                  1930
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 76
                  },
                  "start": {
                    "column": 20,
                    "line": 76
                  }
                }
              }
            ],
            "range": [
              1916,
              1931
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 76
              },
              "start": {
                "column": 9,
                "line": 76
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "range": [
              1933,
              1938
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 76
              },
              "start": {
                "column": 26,
                "line": 76
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "range": [
            1907,
            1910
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 76
            },
            "start": {
              "column": 0,
              "line": 76
            }
          }
        },
        "optional": false,
        "range": [
          1907,
          1939
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 76
          },
          "start": {
            "column": 0,
            "line": 76
          }
        }
      },
      "range": [
        1907,
        1940
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
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
        "name": "inners",
        "optional": false,
        "range": [
          1981,
          1987
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 80
          },
          "start": {
            "column": 17,
            "line": 80
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              2023,
              2027
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 80
              },
              "start": {
                "column": 59,
                "line": 80
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 98,
                "line": 80
              },
              "start": {
                "column": 63,
                "line": 80
              }
            },
            "range": [
              2027,
              2062
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      2039,
                      2046
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 80
                      },
                      "start": {
                        "column": 75,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2051,
                          2052
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 80
                          },
                          "start": {
                            "column": 87,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        2051,
                        2052
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 80
                        },
                        "start": {
                          "column": 87,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      2048,
                      2052
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 80
                      },
                      "start": {
                        "column": 84,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      2054,
                      2061
                    ],
                    "loc": {
                      "end": {
                        "column": 97,
                        "line": 80
                      },
                      "start": {
                        "column": 90,
                        "line": 80
                      }
                    }
                  }
                ],
                "range": [
                  2038,
                  2062
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 80
                  },
                  "start": {
                    "column": 74,
                    "line": 80
                  }
                }
              },
              "range": [
                2029,
                2062
              ],
              "loc": {
                "end": {
                  "column": 98,
                  "line": 80
                },
                "start": {
                  "column": 65,
                  "line": 80
                }
              }
            }
          },
          "range": [
            2020,
            2062
          ],
          "loc": {
            "end": {
              "column": 98,
              "line": 80
            },
            "start": {
              "column": 56,
              "line": 80
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 102,
            "line": 80
          },
          "start": {
            "column": 99,
            "line": 80
          }
        },
        "range": [
          2063,
          2066
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2065,
              2066
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 80
              },
              "start": {
                "column": 101,
                "line": 80
              }
            }
          },
          "range": [
            2065,
            2066
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 80
            },
            "start": {
              "column": 101,
              "line": 80
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 55,
            "line": 80
          },
          "start": {
            "column": 23,
            "line": 80
          }
        },
        "range": [
          1987,
          2019
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2013,
                    2016
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 80
                    },
                    "start": {
                      "column": 49,
                      "line": 80
                    }
                  }
                },
                "range": [
                  2013,
                  2018
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 80
                  },
                  "start": {
                    "column": 49,
                    "line": 80
                  }
                }
              },
              "range": [
                2004,
                2018
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 80
                },
                "start": {
                  "column": 40,
                  "line": 80
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
                1994,
                1995
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 80
                },
                "start": {
                  "column": 30,
                  "line": 80
                }
              }
            },
            "out": false,
            "range": [
              1988,
              2018
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 80
              },
              "start": {
                "column": 24,
                "line": 80
              }
            }
          }
        ]
      },
      "range": [
        1964,
        2067
      ],
      "loc": {
        "end": {
          "column": 103,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 80
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
            "range": [
              2075,
              2079
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 82
              },
              "start": {
                "column": 6,
                "line": 82
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2089,
                  2090
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 82
                  },
                  "start": {
                    "column": 20,
                    "line": 82
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  2091,
                  2092
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 82
                  },
                  "start": {
                    "column": 22,
                    "line": 82
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  2093,
                  2094
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 82
                  },
                  "start": {
                    "column": 24,
                    "line": 82
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  2095,
                  2096
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 82
                  },
                  "start": {
                    "column": 26,
                    "line": 82
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  2097,
                  2098
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 82
                  },
                  "start": {
                    "column": 28,
                    "line": 82
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners",
              "optional": false,
              "range": [
                2082,
                2088
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 82
                },
                "start": {
                  "column": 13,
                  "line": 82
                }
              }
            },
            "optional": false,
            "range": [
              2082,
              2099
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 82
              },
              "start": {
                "column": 13,
                "line": 82
              }
            }
          },
          "range": [
            2075,
            2099
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 82
            },
            "start": {
              "column": 6,
              "line": 82
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2069,
        2100
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "name": "inners2",
        "optional": false,
        "range": [
          2119,
          2126
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 84
              },
              "start": {
                "column": 61,
                "line": 84
              }
            },
            "range": [
              2163,
              2198
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      2175,
                      2182
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 84
                      },
                      "start": {
                        "column": 73,
                        "line": 84
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2187,
                          2188
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 84
                          },
                          "start": {
                            "column": 85,
                            "line": 84
                          }
                        }
                      },
                      "range": [
                        2187,
                        2188
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 84
                        },
                        "start": {
                          "column": 85,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      2184,
                      2188
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 84
                      },
                      "start": {
                        "column": 82,
                        "line": 84
                      }
                    }
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "range": [
                      2190,
                      2197
                    ],
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 84
                      },
                      "start": {
                        "column": 88,
                        "line": 84
                      }
                    }
                  }
                ],
                "range": [
                  2174,
                  2198
                ],
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 84
                  },
                  "start": {
                    "column": 72,
                    "line": 84
                  }
                }
              },
              "range": [
                2165,
                2198
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 84
                },
                "start": {
                  "column": 63,
                  "line": 84
                }
              }
            }
          },
          "range": [
            2159,
            2198
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 84
            },
            "start": {
              "column": 57,
              "line": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 84
          },
          "start": {
            "column": 97,
            "line": 84
          }
        },
        "range": [
          2199,
          2202
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2201,
              2202
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 84
              },
              "start": {
                "column": 99,
                "line": 84
              }
            }
          },
          "range": [
            2201,
            2202
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 84
            },
            "start": {
              "column": 99,
              "line": 84
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 84
          },
          "start": {
            "column": 24,
            "line": 84
          }
        },
        "range": [
          2126,
          2158
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2152,
                    2155
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 84
                    },
                    "start": {
                      "column": 50,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2152,
                  2157
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 84
                  },
                  "start": {
                    "column": 50,
                    "line": 84
                  }
                }
              },
              "range": [
                2143,
                2157
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 84
                },
                "start": {
                  "column": 41,
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
                2133,
                2134
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 84
                },
                "start": {
                  "column": 31,
                  "line": 84
                }
              }
            },
            "out": false,
            "range": [
              2127,
              2157
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 84
              },
              "start": {
                "column": 25,
                "line": 84
              }
            }
          }
        ]
      },
      "range": [
        2102,
        2203
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
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
            "name": "test2",
            "optional": false,
            "range": [
              2211,
              2216
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 86
              },
              "start": {
                "column": 6,
                "line": 86
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
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2228,
                      2229
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 86
                      },
                      "start": {
                        "column": 23,
                        "line": 86
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      2230,
                      2231
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 86
                      },
                      "start": {
                        "column": 25,
                        "line": 86
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      2232,
                      2233
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 86
                      },
                      "start": {
                        "column": 27,
                        "line": 86
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      2234,
                      2235
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 86
                      },
                      "start": {
                        "column": 29,
                        "line": 86
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "5",
                    "value": 5,
                    "range": [
                      2236,
                      2237
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 86
                      },
                      "start": {
                        "column": 31,
                        "line": 86
                      }
                    }
                  }
                ],
                "range": [
                  2227,
                  2238
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 86
                  },
                  "start": {
                    "column": 22,
                    "line": 86
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inners2",
              "optional": false,
              "range": [
                2219,
                2226
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 86
                },
                "start": {
                  "column": 14,
                  "line": 86
                }
              }
            },
            "optional": false,
            "range": [
              2219,
              2239
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 86
              },
              "start": {
                "column": 14,
                "line": 86
              }
            }
          },
          "range": [
            2211,
            2239
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 86
            },
            "start": {
              "column": 6,
              "line": 86
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2205,
        2240
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmpty",
        "optional": false,
        "range": [
          2269,
          2277
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                2317,
                2318
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 90
                },
                "start": {
                  "column": 53,
                  "line": 90
                }
              }
            },
            "range": [
              2317,
              2318
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 90
              },
              "start": {
                "column": 53,
                "line": 90
              }
            }
          },
          "range": [
            2311,
            2318
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 90
            },
            "start": {
              "column": 47,
              "line": 90
            }
          }
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "range": [
            2327,
            2332
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 90
            },
            "start": {
              "column": 63,
              "line": 90
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              2343,
              2344
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 90
              },
              "start": {
                "column": 79,
                "line": 90
              }
            }
          },
          "range": [
            2343,
            2344
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 90
            },
            "start": {
              "column": 79,
              "line": 90
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "range": [
            2335,
            2340
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 90
            },
            "start": {
              "column": 71,
              "line": 90
            }
          }
        },
        "range": [
          2311,
          2344
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 90
          },
          "start": {
            "column": 47,
            "line": 90
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 44,
            "line": 90
          },
          "start": {
            "column": 13,
            "line": 90
          }
        },
        "range": [
          2277,
          2308
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2294,
                  2307
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2295,
                      2301
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 90
                      },
                      "start": {
                        "column": 31,
                        "line": 90
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      2303,
                      2306
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 90
                      },
                      "start": {
                        "column": 39,
                        "line": 90
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 90
                  },
                  "start": {
                    "column": 30,
                    "line": 90
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  2288,
                  2294
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 90
                  },
                  "start": {
                    "column": 24,
                    "line": 90
                  }
                }
              },
              "range": [
                2288,
                2307
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 90
                },
                "start": {
                  "column": 24,
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
                2278,
                2279
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 90
                },
                "start": {
                  "column": 14,
                  "line": 90
                }
              }
            },
            "out": false,
            "range": [
              2278,
              2307
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 90
              },
              "start": {
                "column": 14,
                "line": 90
              }
            }
          }
        ]
      },
      "range": [
        2264,
        2345
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
              2353,
              2358
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 92
              },
              "start": {
                "column": 6,
                "line": 92
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                2418,
                2419
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 92
                },
                "start": {
                  "column": 71,
                  "line": 92
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
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 92
                    },
                    "start": {
                      "column": 53,
                      "line": 92
                    }
                  },
                  "range": [
                    2400,
                    2413
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2410,
                        2413
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              2411,
                              2412
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 92
                              },
                              "start": {
                                "column": 64,
                                "line": 92
                              }
                            }
                          },
                          "range": [
                            2411,
                            2412
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 92
                            },
                            "start": {
                              "column": 64,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 92
                        },
                        "start": {
                          "column": 63,
                          "line": 92
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmpty",
                      "optional": false,
                      "range": [
                        2402,
                        2410
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 92
                        },
                        "start": {
                          "column": 55,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      2402,
                      2413
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 92
                      },
                      "start": {
                        "column": 55,
                        "line": 92
                      }
                    }
                  }
                },
                "range": [
                  2399,
                  2413
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 92
                  },
                  "start": {
                    "column": 52,
                    "line": 92
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 92
                },
                "start": {
                  "column": 14,
                  "line": 92
                }
              },
              "range": [
                2361,
                2398
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2384,
                        2397
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2385,
                            2391
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 92
                            },
                            "start": {
                              "column": 38,
                              "line": 92
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            2393,
                            2396
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 92
                            },
                            "start": {
                              "column": 46,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 92
                        },
                        "start": {
                          "column": 37,
                          "line": 92
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        2378,
                        2384
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 92
                        },
                        "start": {
                          "column": 31,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      2378,
                      2397
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 92
                      },
                      "start": {
                        "column": 31,
                        "line": 92
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      2368,
                      2369
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 92
                      },
                      "start": {
                        "column": 21,
                        "line": 92
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2362,
                    2397
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 92
                    },
                    "start": {
                      "column": 15,
                      "line": 92
                    }
                  }
                }
              ]
            },
            "range": [
              2361,
              2419
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 92
              },
              "start": {
                "column": 14,
                "line": 92
              }
            }
          },
          "range": [
            2353,
            2419
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 92
            },
            "start": {
              "column": 6,
              "line": 92
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2347,
        2420
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 92
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
            "name": "t",
            "optional": false,
            "range": [
              2428,
              2429
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 94
              },
              "start": {
                "column": 6,
                "line": 94
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2440,
                        2443
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 94
                        },
                        "start": {
                          "column": 18,
                          "line": 94
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        2445,
                        2447
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 94
                        },
                        "start": {
                          "column": 23,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2440,
                      2447
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 94
                      },
                      "start": {
                        "column": 18,
                        "line": 94
                      }
                    }
                  }
                ],
                "range": [
                  2438,
                  2449
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 94
                  },
                  "start": {
                    "column": 16,
                    "line": 94
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "range": [
                2432,
                2437
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 94
                },
                "start": {
                  "column": 10,
                  "line": 94
                }
              }
            },
            "optional": false,
            "range": [
              2432,
              2450
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 94
              },
              "start": {
                "column": 10,
                "line": 94
              }
            }
          },
          "range": [
            2428,
            2450
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 94
            },
            "start": {
              "column": 6,
              "line": 94
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2422,
        2451
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotEmptyMapped",
        "optional": false,
        "range": [
          2483,
          2497
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                2537,
                2538
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 96
                },
                "start": {
                  "column": 59,
                  "line": 96
                }
              }
            },
            "range": [
              2537,
              2538
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 96
              },
              "start": {
                "column": 59,
                "line": 96
              }
            }
          },
          "range": [
            2531,
            2538
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 96
            },
            "start": {
              "column": 53,
              "line": 96
            }
          }
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "range": [
            2547,
            2552
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 96
            },
            "start": {
              "column": 69,
              "line": 96
            }
          }
        },
        "falseType": {
          "type": "TSMappedType",
          "constraint": {
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
                  2577,
                  2578
                ],
                "loc": {
                  "end": {
                    "column": 100,
                    "line": 96
                  },
                  "start": {
                    "column": 99,
                    "line": 96
                  }
                }
              },
              "range": [
                2577,
                2578
              ],
              "loc": {
                "end": {
                  "column": 100,
                  "line": 96
                },
                "start": {
                  "column": 99,
                  "line": 96
                }
              }
            },
            "range": [
              2571,
              2578
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 96
              },
              "start": {
                "column": 93,
                "line": 96
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              2566,
              2567
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 96
              },
              "start": {
                "column": 88,
                "line": 96
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
                  2583,
                  2584
                ],
                "loc": {
                  "end": {
                    "column": 106,
                    "line": 96
                  },
                  "start": {
                    "column": 105,
                    "line": 96
                  }
                }
              },
              "range": [
                2583,
                2584
              ],
              "loc": {
                "end": {
                  "column": 106,
                  "line": 96
                },
                "start": {
                  "column": 105,
                  "line": 96
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
                  2581,
                  2582
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 96
                  },
                  "start": {
                    "column": 103,
                    "line": 96
                  }
                }
              },
              "range": [
                2581,
                2582
              ],
              "loc": {
                "end": {
                  "column": 104,
                  "line": 96
                },
                "start": {
                  "column": 103,
                  "line": 96
                }
              }
            },
            "range": [
              2581,
              2585
            ],
            "loc": {
              "end": {
                "column": 107,
                "line": 96
              },
              "start": {
                "column": 103,
                "line": 96
              }
            }
          },
          "range": [
            2563,
            2587
          ],
          "loc": {
            "end": {
              "column": 109,
              "line": 96
            },
            "start": {
              "column": 85,
              "line": 96
            }
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "range": [
            2555,
            2560
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 96
            },
            "start": {
              "column": 77,
              "line": 96
            }
          }
        },
        "range": [
          2531,
          2587
        ],
        "loc": {
          "end": {
            "column": 109,
            "line": 96
          },
          "start": {
            "column": 53,
            "line": 96
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 96
          },
          "start": {
            "column": 19,
            "line": 96
          }
        },
        "range": [
          2497,
          2528
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2514,
                  2527
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2515,
                      2521
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 96
                      },
                      "start": {
                        "column": 37,
                        "line": 96
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      2523,
                      2526
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 96
                      },
                      "start": {
                        "column": 45,
                        "line": 96
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 96
                  },
                  "start": {
                    "column": 36,
                    "line": 96
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  2508,
                  2514
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 96
                  },
                  "start": {
                    "column": 30,
                    "line": 96
                  }
                }
              },
              "range": [
                2508,
                2527
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 96
                },
                "start": {
                  "column": 30,
                  "line": 96
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
                2498,
                2499
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 96
                },
                "start": {
                  "column": 20,
                  "line": 96
                }
              }
            },
            "out": false,
            "range": [
              2498,
              2527
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 96
              },
              "start": {
                "column": 20,
                "line": 96
              }
            }
          }
        ]
      },
      "range": [
        2478,
        2588
      ],
      "loc": {
        "end": {
          "column": 110,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
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
            "name": "thingMapped",
            "optional": false,
            "range": [
              2596,
              2607
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 98
              },
              "start": {
                "column": 6,
                "line": 98
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                2673,
                2674
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 98
                },
                "start": {
                  "column": 83,
                  "line": 98
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
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 98
                    },
                    "start": {
                      "column": 59,
                      "line": 98
                    }
                  },
                  "range": [
                    2649,
                    2668
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2665,
                        2668
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              2666,
                              2667
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 98
                              },
                              "start": {
                                "column": 76,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2666,
                            2667
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 98
                            },
                            "start": {
                              "column": 76,
                              "line": 98
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 98
                        },
                        "start": {
                          "column": 75,
                          "line": 98
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NotEmptyMapped",
                      "optional": false,
                      "range": [
                        2651,
                        2665
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 98
                        },
                        "start": {
                          "column": 61,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2651,
                      2668
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 98
                      },
                      "start": {
                        "column": 61,
                        "line": 98
                      }
                    }
                  }
                },
                "range": [
                  2648,
                  2668
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 98
                  },
                  "start": {
                    "column": 58,
                    "line": 98
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 98
                },
                "start": {
                  "column": 20,
                  "line": 98
                }
              },
              "range": [
                2610,
                2647
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": true,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2633,
                        2646
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2634,
                            2640
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 98
                            },
                            "start": {
                              "column": 44,
                              "line": 98
                            }
                          }
                        },
                        {
                          "type": "TSAnyKeyword",
                          "range": [
                            2642,
                            2645
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 98
                            },
                            "start": {
                              "column": 52,
                              "line": 98
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 98
                        },
                        "start": {
                          "column": 43,
                          "line": 98
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "range": [
                        2627,
                        2633
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 98
                        },
                        "start": {
                          "column": 37,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2627,
                      2646
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 98
                      },
                      "start": {
                        "column": 37,
                        "line": 98
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "range": [
                      2617,
                      2618
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 98
                      },
                      "start": {
                        "column": 27,
                        "line": 98
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2611,
                    2646
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 98
                    },
                    "start": {
                      "column": 21,
                      "line": 98
                    }
                  }
                }
              ]
            },
            "range": [
              2610,
              2674
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 98
              },
              "start": {
                "column": 20,
                "line": 98
              }
            }
          },
          "range": [
            2596,
            2674
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 98
            },
            "start": {
              "column": 6,
              "line": 98
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2590,
        2675
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 98
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
            "name": "tMapped",
            "optional": false,
            "range": [
              2683,
              2690
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 100
              },
              "start": {
                "column": 6,
                "line": 100
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2707,
                        2710
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 100
                        },
                        "start": {
                          "column": 30,
                          "line": 100
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        2712,
                        2714
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 100
                        },
                        "start": {
                          "column": 35,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2707,
                      2714
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 100
                      },
                      "start": {
                        "column": 30,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  2705,
                  2716
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 100
                  },
                  "start": {
                    "column": 28,
                    "line": 100
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "thingMapped",
              "optional": false,
              "range": [
                2693,
                2704
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 100
                },
                "start": {
                  "column": 16,
                  "line": 100
                }
              }
            },
            "optional": false,
            "range": [
              2693,
              2717
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 100
              },
              "start": {
                "column": 16,
                "line": 100
              }
            }
          },
          "range": [
            2683,
            2717
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 100
            },
            "start": {
              "column": 6,
              "line": 100
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2677,
        2718
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 100
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
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  2910,
                  2912
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 105
                  },
                  "start": {
                    "column": 11,
                    "line": 105
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
                    2916,
                    2917
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 105
                    },
                    "start": {
                      "column": 17,
                      "line": 105
                    }
                  }
                },
                "range": [
                  2916,
                  2917
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 105
                  },
                  "start": {
                    "column": 17,
                    "line": 105
                  }
                }
              },
              "range": [
                2910,
                2917
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 105
                },
                "start": {
                  "column": 11,
                  "line": 105
                }
              }
            },
            "range": [
              2903,
              2917
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          2897,
          2919
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 93,
            "line": 104
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_minimal",
        "optional": false,
        "range": [
          2813,
          2834
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 104
          },
          "start": {
            "column": 9,
            "line": 104
          }
        }
      },
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
                "column": 91,
                "line": 104
              },
              "start": {
                "column": 69,
                "line": 104
              }
            },
            "range": [
              2873,
              2895
            ],
            "typeAnnotation": {
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
                      2879,
                      2883
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 104
                      },
                      "start": {
                        "column": 75,
                        "line": 104
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 104
                      },
                      "start": {
                        "column": 79,
                        "line": 104
                      }
                    },
                    "range": [
                      2883,
                      2886
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2885,
                          2886
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 104
                          },
                          "start": {
                            "column": 81,
                            "line": 104
                          }
                        }
                      },
                      "range": [
                        2885,
                        2886
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 104
                        },
                        "start": {
                          "column": 81,
                          "line": 104
                        }
                      }
                    }
                  },
                  "range": [
                    2876,
                    2886
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 104
                    },
                    "start": {
                      "column": 72,
                      "line": 104
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 104
                  },
                  "start": {
                    "column": 84,
                    "line": 104
                  }
                },
                "range": [
                  2888,
                  2895
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    2891,
                    2895
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 104
                    },
                    "start": {
                      "column": 87,
                      "line": 104
                    }
                  }
                }
              },
              "range": [
                2875,
                2895
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 104
                },
                "start": {
                  "column": 71,
                  "line": 104
                }
              }
            }
          },
          "range": [
            2871,
            2895
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 104
            },
            "start": {
              "column": 67,
              "line": 104
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 104
          },
          "start": {
            "column": 30,
            "line": 104
          }
        },
        "range": [
          2834,
          2870
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    2860,
                    2867
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 104
                    },
                    "start": {
                      "column": 56,
                      "line": 104
                    }
                  }
                },
                "range": [
                  2860,
                  2869
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 104
                  },
                  "start": {
                    "column": 56,
                    "line": 104
                  }
                }
              },
              "range": [
                2851,
                2869
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 104
                },
                "start": {
                  "column": 47,
                  "line": 104
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
                2841,
                2842
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 104
                },
                "start": {
                  "column": 37,
                  "line": 104
                }
              }
            },
            "out": false,
            "range": [
              2835,
              2869
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 104
              },
              "start": {
                "column": 31,
                "line": 104
              }
            }
          }
        ]
      },
      "range": [
        2804,
        2919
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 104
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
            "name": "test_55033_minimal",
            "optional": false,
            "range": [
              2927,
              2945
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 108
              },
              "start": {
                "column": 6,
                "line": 108
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
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    2985,
                    2987
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 108
                    },
                    "start": {
                      "column": 64,
                      "line": 108
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 108
                        },
                        "start": {
                          "column": 51,
                          "line": 108
                        }
                      },
                      "range": [
                        2972,
                        2980
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2974,
                          2980
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 108
                          },
                          "start": {
                            "column": 53,
                            "line": 108
                          }
                        }
                      }
                    },
                    "range": [
                      2971,
                      2980
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 108
                      },
                      "start": {
                        "column": 50,
                        "line": 108
                      }
                    }
                  }
                ],
                "range": [
                  2970,
                  2987
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 108
                  },
                  "start": {
                    "column": 49,
                    "line": 108
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory_55033_minimal",
              "optional": false,
              "range": [
                2948,
                2969
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 108
                },
                "start": {
                  "column": 27,
                  "line": 108
                }
              }
            },
            "optional": false,
            "range": [
              2948,
              2988
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 108
              },
              "start": {
                "column": 27,
                "line": 108
              }
            }
          },
          "range": [
            2927,
            2988
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 108
            },
            "start": {
              "column": 6,
              "line": 108
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2921,
        2988
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 108
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
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          3153,
                          3155
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 112
                          },
                          "start": {
                            "column": 15,
                            "line": 112
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            3159,
                            3160
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 112
                            },
                            "start": {
                              "column": 21,
                              "line": 112
                            }
                          }
                        },
                        "range": [
                          3159,
                          3160
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 112
                          },
                          "start": {
                            "column": 21,
                            "line": 112
                          }
                        }
                      },
                      "range": [
                        3153,
                        3160
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 112
                        },
                        "start": {
                          "column": 15,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      3146,
                      3161
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  }
                ],
                "range": [
                  3136,
                  3167
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 113
                  },
                  "start": {
                    "column": 59,
                    "line": 111
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "range": [
                  3097,
                  3101
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 111
                  },
                  "start": {
                    "column": 20,
                    "line": 111
                  }
                }
              },
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      3124,
                      3128
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 111
                      },
                      "start": {
                        "column": 47,
                        "line": 111
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 111
                      },
                      "start": {
                        "column": 51,
                        "line": 111
                      }
                    },
                    "range": [
                      3128,
                      3131
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          3130,
                          3131
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 111
                          },
                          "start": {
                            "column": 53,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        3130,
                        3131
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 111
                        },
                        "start": {
                          "column": 53,
                          "line": 111
                        }
                      }
                    }
                  },
                  "range": [
                    3121,
                    3131
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 111
                    },
                    "start": {
                      "column": 44,
                      "line": 111
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 111
                  },
                  "start": {
                    "column": 55,
                    "line": 111
                  }
                },
                "range": [
                  3132,
                  3135
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3134,
                      3135
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 111
                      },
                      "start": {
                        "column": 57,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    3134,
                    3135
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 111
                    },
                    "start": {
                      "column": 57,
                      "line": 111
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 111
                  },
                  "start": {
                    "column": 24,
                    "line": 111
                  }
                },
                "range": [
                  3101,
                  3120
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": true,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3118,
                          3119
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 111
                          },
                          "start": {
                            "column": 41,
                            "line": 111
                          }
                        }
                      },
                      "range": [
                        3118,
                        3119
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 111
                        },
                        "start": {
                          "column": 41,
                          "line": 111
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3108,
                        3109
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 111
                        },
                        "start": {
                          "column": 31,
                          "line": 111
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3102,
                      3119
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 111
                      },
                      "start": {
                        "column": 25,
                        "line": 111
                      }
                    }
                  }
                ]
              },
              "range": [
                3088,
                3167
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 11,
                  "line": 111
                }
              }
            },
            "range": [
              3081,
              3168
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          3075,
          3170
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 114
          },
          "start": {
            "column": 85,
            "line": 110
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033",
        "optional": false,
        "range": [
          2999,
          3012
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 110
          },
          "start": {
            "column": 9,
            "line": 110
          }
        }
      },
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
                "column": 83,
                "line": 110
              },
              "start": {
                "column": 61,
                "line": 110
              }
            },
            "range": [
              3051,
              3073
            ],
            "typeAnnotation": {
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
                      3057,
                      3061
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 110
                      },
                      "start": {
                        "column": 67,
                        "line": 110
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 110
                      },
                      "start": {
                        "column": 71,
                        "line": 110
                      }
                    },
                    "range": [
                      3061,
                      3064
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3063,
                          3064
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 110
                          },
                          "start": {
                            "column": 73,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        3063,
                        3064
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 110
                        },
                        "start": {
                          "column": 73,
                          "line": 110
                        }
                      }
                    }
                  },
                  "range": [
                    3054,
                    3064
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 110
                    },
                    "start": {
                      "column": 64,
                      "line": 110
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 110
                  },
                  "start": {
                    "column": 76,
                    "line": 110
                  }
                },
                "range": [
                  3066,
                  3073
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3069,
                    3073
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 110
                    },
                    "start": {
                      "column": 79,
                      "line": 110
                    }
                  }
                }
              },
              "range": [
                3053,
                3073
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 110
                },
                "start": {
                  "column": 63,
                  "line": 110
                }
              }
            }
          },
          "range": [
            3049,
            3073
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 110
            },
            "start": {
              "column": 59,
              "line": 110
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 110
          },
          "start": {
            "column": 22,
            "line": 110
          }
        },
        "range": [
          3012,
          3048
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    3038,
                    3045
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 110
                    },
                    "start": {
                      "column": 48,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3038,
                  3047
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 110
                  },
                  "start": {
                    "column": 48,
                    "line": 110
                  }
                }
              },
              "range": [
                3029,
                3047
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 110
                },
                "start": {
                  "column": 39,
                  "line": 110
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
                3019,
                3020
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 110
                },
                "start": {
                  "column": 29,
                  "line": 110
                }
              }
            },
            "out": false,
            "range": [
              3013,
              3047
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 110
              },
              "start": {
                "column": 23,
                "line": 110
              }
            }
          }
        ]
      },
      "range": [
        2990,
        3170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 110
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
            "name": "t1_55033",
            "optional": false,
            "range": [
              3178,
              3186
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 116
              },
              "start": {
                "column": 6,
                "line": 116
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
                      "name": "test",
                      "optional": false,
                      "range": [
                        3250,
                        3254
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 117
                        },
                        "start": {
                          "column": 6,
                          "line": 117
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        3256,
                        3259
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 117
                        },
                        "start": {
                          "column": 12,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      3250,
                      3259
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 117
                      },
                      "start": {
                        "column": 6,
                        "line": 117
                      }
                    }
                  }
                ],
                "range": [
                  3248,
                  3261
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 117
                  },
                  "start": {
                    "column": 4,
                    "line": 117
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"some string\"",
                "value": "some string",
                "range": [
                  3267,
                  3280
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3239,
                      3241
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 116
                      },
                      "start": {
                        "column": 67,
                        "line": 116
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 116
                          },
                          "start": {
                            "column": 33,
                            "line": 116
                          }
                        },
                        "range": [
                          3205,
                          3223
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
                                "name": "test",
                                "optional": false,
                                "range": [
                                  3209,
                                  3213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 116
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 116
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
                                    "line": 116
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 116
                                  }
                                },
                                "range": [
                                  3213,
                                  3221
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3215,
                                    3221
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 116
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 116
                                    }
                                  }
                                }
                              },
                              "range": [
                                3209,
                                3221
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 116
                                },
                                "start": {
                                  "column": 37,
                                  "line": 116
                                }
                              }
                            }
                          ],
                          "range": [
                            3207,
                            3223
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 116
                            },
                            "start": {
                              "column": 35,
                              "line": 116
                            }
                          }
                        }
                      },
                      "range": [
                        3204,
                        3223
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 116
                        },
                        "start": {
                          "column": 32,
                          "line": 116
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 116
                          },
                          "start": {
                            "column": 54,
                            "line": 116
                          }
                        },
                        "range": [
                          3226,
                          3234
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3228,
                            3234
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 116
                            },
                            "start": {
                              "column": 56,
                              "line": 116
                            }
                          }
                        }
                      },
                      "range": [
                        3225,
                        3234
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 116
                        },
                        "start": {
                          "column": 53,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "range": [
                    3203,
                    3241
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 116
                    },
                    "start": {
                      "column": 31,
                      "line": 116
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "range": [
                  3189,
                  3202
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 116
                  },
                  "start": {
                    "column": 17,
                    "line": 116
                  }
                }
              },
              "optional": false,
              "range": [
                3189,
                3242
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 116
                },
                "start": {
                  "column": 17,
                  "line": 116
                }
              }
            },
            "optional": false,
            "range": [
              3189,
              3282
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 119
              },
              "start": {
                "column": 17,
                "line": 116
              }
            }
          },
          "range": [
            3178,
            3282
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 119
            },
            "start": {
              "column": 6,
              "line": 116
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3172,
        3283
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 119
        },
        "start": {
          "column": 0,
          "line": 116
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
            "name": "t2_55033",
            "optional": false,
            "range": [
              3291,
              3299
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 121
              },
              "start": {
                "column": 6,
                "line": 121
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "range": [
                          3363,
                          3367
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 122
                          },
                          "start": {
                            "column": 6,
                            "line": 122
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "123",
                        "value": 123,
                        "range": [
                          3369,
                          3372
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 122
                          },
                          "start": {
                            "column": 12,
                            "line": 122
                          }
                        }
                      },
                      "range": [
                        3363,
                        3372
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 122
                        },
                        "start": {
                          "column": 6,
                          "line": 122
                        }
                      }
                    }
                  ],
                  "range": [
                    3361,
                    3374
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 122
                    },
                    "start": {
                      "column": 4,
                      "line": 122
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3378,
                      3383
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 122
                      },
                      "start": {
                        "column": 21,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    3378,
                    3383
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 122
                    },
                    "start": {
                      "column": 21,
                      "line": 122
                    }
                  }
                },
                "range": [
                  3361,
                  3383
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 122
                  },
                  "start": {
                    "column": 4,
                    "line": 122
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"some string\"",
                "value": "some string",
                "range": [
                  3389,
                  3402
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 123
                  },
                  "start": {
                    "column": 4,
                    "line": 123
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3352,
                      3354
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 121
                      },
                      "start": {
                        "column": 67,
                        "line": 121
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 121
                          },
                          "start": {
                            "column": 33,
                            "line": 121
                          }
                        },
                        "range": [
                          3318,
                          3336
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
                                "name": "test",
                                "optional": false,
                                "range": [
                                  3322,
                                  3326
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 121
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 121
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
                                    "line": 121
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 121
                                  }
                                },
                                "range": [
                                  3326,
                                  3334
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3328,
                                    3334
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 121
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 121
                                    }
                                  }
                                }
                              },
                              "range": [
                                3322,
                                3334
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 121
                                },
                                "start": {
                                  "column": 37,
                                  "line": 121
                                }
                              }
                            }
                          ],
                          "range": [
                            3320,
                            3336
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 121
                            },
                            "start": {
                              "column": 35,
                              "line": 121
                            }
                          }
                        }
                      },
                      "range": [
                        3317,
                        3336
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 121
                        },
                        "start": {
                          "column": 32,
                          "line": 121
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 121
                          },
                          "start": {
                            "column": 54,
                            "line": 121
                          }
                        },
                        "range": [
                          3339,
                          3347
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3341,
                            3347
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 121
                            },
                            "start": {
                              "column": 56,
                              "line": 121
                            }
                          }
                        }
                      },
                      "range": [
                        3338,
                        3347
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 121
                        },
                        "start": {
                          "column": 53,
                          "line": 121
                        }
                      }
                    }
                  ],
                  "range": [
                    3316,
                    3354
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 121
                    },
                    "start": {
                      "column": 31,
                      "line": 121
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033",
                "optional": false,
                "range": [
                  3302,
                  3315
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 121
                  },
                  "start": {
                    "column": 17,
                    "line": 121
                  }
                }
              },
              "optional": false,
              "range": [
                3302,
                3355
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 121
                },
                "start": {
                  "column": 17,
                  "line": 121
                }
              }
            },
            "optional": false,
            "range": [
              3302,
              3404
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 124
              },
              "start": {
                "column": 17,
                "line": 121
              }
            }
          },
          "range": [
            3291,
            3404
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 124
            },
            "start": {
              "column": 6,
              "line": 121
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3285,
        3405
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 121
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
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "range": [
                          3601,
                          3603
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 130
                          },
                          "start": {
                            "column": 15,
                            "line": 130
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            3607,
                            3608
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 130
                            },
                            "start": {
                              "column": 21,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          3607,
                          3608
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 130
                          },
                          "start": {
                            "column": 21,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        3601,
                        3608
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 130
                        },
                        "start": {
                          "column": 15,
                          "line": 130
                        }
                      }
                    },
                    "range": [
                      3594,
                      3609
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 130
                      },
                      "start": {
                        "column": 8,
                        "line": 130
                      }
                    }
                  }
                ],
                "range": [
                  3584,
                  3615
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 131
                  },
                  "start": {
                    "column": 59,
                    "line": 129
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "range": [
                  3545,
                  3549
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 129
                  },
                  "start": {
                    "column": 20,
                    "line": 129
                  }
                }
              },
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      3572,
                      3576
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 129
                      },
                      "start": {
                        "column": 47,
                        "line": 129
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 129
                      },
                      "start": {
                        "column": 51,
                        "line": 129
                      }
                    },
                    "range": [
                      3576,
                      3579
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "range": [
                          3578,
                          3579
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 129
                          },
                          "start": {
                            "column": 53,
                            "line": 129
                          }
                        }
                      },
                      "range": [
                        3578,
                        3579
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 129
                        },
                        "start": {
                          "column": 53,
                          "line": 129
                        }
                      }
                    }
                  },
                  "range": [
                    3569,
                    3579
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 129
                    },
                    "start": {
                      "column": 44,
                      "line": 129
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 129
                  },
                  "start": {
                    "column": 55,
                    "line": 129
                  }
                },
                "range": [
                  3580,
                  3583
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      3582,
                      3583
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 129
                      },
                      "start": {
                        "column": 57,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    3582,
                    3583
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 129
                    },
                    "start": {
                      "column": 57,
                      "line": 129
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 129
                  },
                  "start": {
                    "column": 24,
                    "line": 129
                  }
                },
                "range": [
                  3549,
                  3568
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": true,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3566,
                          3567
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 129
                          },
                          "start": {
                            "column": 41,
                            "line": 129
                          }
                        }
                      },
                      "range": [
                        3566,
                        3567
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 129
                        },
                        "start": {
                          "column": 41,
                          "line": 129
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "range": [
                        3556,
                        3557
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 129
                        },
                        "start": {
                          "column": 31,
                          "line": 129
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      3550,
                      3567
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 129
                      },
                      "start": {
                        "column": 25,
                        "line": 129
                      }
                    }
                  }
                ]
              },
              "range": [
                3536,
                3615
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 131
                },
                "start": {
                  "column": 11,
                  "line": 129
                }
              }
            },
            "range": [
              3529,
              3616
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          }
        ],
        "range": [
          3523,
          3618
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 132
          },
          "start": {
            "column": 78,
            "line": 128
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory_55033_2",
        "optional": false,
        "range": [
          3454,
          3469
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 128
          },
          "start": {
            "column": 9,
            "line": 128
          }
        }
      },
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
                "column": 76,
                "line": 128
              },
              "start": {
                "column": 54,
                "line": 128
              }
            },
            "range": [
              3499,
              3521
            ],
            "typeAnnotation": {
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
                      3505,
                      3509
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 128
                      },
                      "start": {
                        "column": 60,
                        "line": 128
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 128
                      },
                      "start": {
                        "column": 64,
                        "line": 128
                      }
                    },
                    "range": [
                      3509,
                      3512
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3511,
                          3512
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 128
                          },
                          "start": {
                            "column": 66,
                            "line": 128
                          }
                        }
                      },
                      "range": [
                        3511,
                        3512
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 128
                        },
                        "start": {
                          "column": 66,
                          "line": 128
                        }
                      }
                    }
                  },
                  "range": [
                    3502,
                    3512
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 128
                    },
                    "start": {
                      "column": 57,
                      "line": 128
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 128
                  },
                  "start": {
                    "column": 69,
                    "line": 128
                  }
                },
                "range": [
                  3514,
                  3521
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    3517,
                    3521
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 128
                    },
                    "start": {
                      "column": 72,
                      "line": 128
                    }
                  }
                }
              },
              "range": [
                3501,
                3521
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 128
                },
                "start": {
                  "column": 56,
                  "line": 128
                }
              }
            }
          },
          "range": [
            3497,
            3521
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 128
            },
            "start": {
              "column": 52,
              "line": 128
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 51,
            "line": 128
          },
          "start": {
            "column": 24,
            "line": 128
          }
        },
        "range": [
          3469,
          3496
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  3486,
                  3493
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 128
                  },
                  "start": {
                    "column": 41,
                    "line": 128
                  }
                }
              },
              "range": [
                3486,
                3495
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 128
                },
                "start": {
                  "column": 41,
                  "line": 128
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
                3476,
                3477
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 128
                },
                "start": {
                  "column": 31,
                  "line": 128
                }
              }
            },
            "out": false,
            "range": [
              3470,
              3495
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 128
              },
              "start": {
                "column": 25,
                "line": 128
              }
            }
          }
        ]
      },
      "range": [
        3445,
        3618
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 128
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
            "name": "t1_55033_2",
            "optional": false,
            "range": [
              3626,
              3636
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 134
              },
              "start": {
                "column": 6,
                "line": 134
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
                      "name": "test",
                      "optional": false,
                      "range": [
                        3702,
                        3706
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 135
                        },
                        "start": {
                          "column": 6,
                          "line": 135
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        3708,
                        3711
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 135
                        },
                        "start": {
                          "column": 12,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      3702,
                      3711
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 135
                      },
                      "start": {
                        "column": 6,
                        "line": 135
                      }
                    }
                  }
                ],
                "range": [
                  3700,
                  3713
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 135
                  },
                  "start": {
                    "column": 4,
                    "line": 135
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"some string\"",
                "value": "some string",
                "range": [
                  3719,
                  3732
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 136
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3691,
                      3693
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 134
                      },
                      "start": {
                        "column": 71,
                        "line": 134
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 134
                          },
                          "start": {
                            "column": 37,
                            "line": 134
                          }
                        },
                        "range": [
                          3657,
                          3675
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
                                "name": "test",
                                "optional": false,
                                "range": [
                                  3661,
                                  3665
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 134
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 134
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
                                    "line": 134
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 134
                                  }
                                },
                                "range": [
                                  3665,
                                  3673
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3667,
                                    3673
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 134
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 134
                                    }
                                  }
                                }
                              },
                              "range": [
                                3661,
                                3673
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 134
                                },
                                "start": {
                                  "column": 41,
                                  "line": 134
                                }
                              }
                            }
                          ],
                          "range": [
                            3659,
                            3675
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 134
                            },
                            "start": {
                              "column": 39,
                              "line": 134
                            }
                          }
                        }
                      },
                      "range": [
                        3656,
                        3675
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 134
                        },
                        "start": {
                          "column": 36,
                          "line": 134
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 134
                          },
                          "start": {
                            "column": 58,
                            "line": 134
                          }
                        },
                        "range": [
                          3678,
                          3686
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3680,
                            3686
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 134
                            },
                            "start": {
                              "column": 60,
                              "line": 134
                            }
                          }
                        }
                      },
                      "range": [
                        3677,
                        3686
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 134
                        },
                        "start": {
                          "column": 57,
                          "line": 134
                        }
                      }
                    }
                  ],
                  "range": [
                    3655,
                    3693
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 134
                    },
                    "start": {
                      "column": 35,
                      "line": 134
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "range": [
                  3639,
                  3654
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 134
                  },
                  "start": {
                    "column": 19,
                    "line": 134
                  }
                }
              },
              "optional": false,
              "range": [
                3639,
                3694
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 134
                },
                "start": {
                  "column": 19,
                  "line": 134
                }
              }
            },
            "optional": false,
            "range": [
              3639,
              3734
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 137
              },
              "start": {
                "column": 19,
                "line": 134
              }
            }
          },
          "range": [
            3626,
            3734
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 137
            },
            "start": {
              "column": 6,
              "line": 134
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3620,
        3735
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 134
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
            "name": "t2_55033_2",
            "optional": false,
            "range": [
              3743,
              3753
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 139
              },
              "start": {
                "column": 6,
                "line": 139
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "range": [
                          3819,
                          3823
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 140
                          },
                          "start": {
                            "column": 6,
                            "line": 140
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "123",
                        "value": 123,
                        "range": [
                          3825,
                          3828
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 140
                          },
                          "start": {
                            "column": 12,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        3819,
                        3828
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 140
                        },
                        "start": {
                          "column": 6,
                          "line": 140
                        }
                      }
                    }
                  ],
                  "range": [
                    3817,
                    3830
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 140
                    },
                    "start": {
                      "column": 4,
                      "line": 140
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "range": [
                      3834,
                      3839
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 140
                      },
                      "start": {
                        "column": 21,
                        "line": 140
                      }
                    }
                  },
                  "range": [
                    3834,
                    3839
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 140
                    },
                    "start": {
                      "column": 21,
                      "line": 140
                    }
                  }
                },
                "range": [
                  3817,
                  3839
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 140
                  },
                  "start": {
                    "column": 4,
                    "line": 140
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"some string\"",
                "value": "some string",
                "range": [
                  3845,
                  3858
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 141
                  },
                  "start": {
                    "column": 4,
                    "line": 141
                  }
                }
              }
            ],
            "callee": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3808,
                      3810
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 139
                      },
                      "start": {
                        "column": 71,
                        "line": 139
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 139
                          },
                          "start": {
                            "column": 37,
                            "line": 139
                          }
                        },
                        "range": [
                          3774,
                          3792
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
                                "name": "test",
                                "optional": false,
                                "range": [
                                  3778,
                                  3782
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 139
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
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 139
                                  }
                                },
                                "range": [
                                  3782,
                                  3790
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3784,
                                    3790
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 139
                                    }
                                  }
                                }
                              },
                              "range": [
                                3778,
                                3790
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 139
                                },
                                "start": {
                                  "column": 41,
                                  "line": 139
                                }
                              }
                            }
                          ],
                          "range": [
                            3776,
                            3792
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 139
                            },
                            "start": {
                              "column": 39,
                              "line": 139
                            }
                          }
                        }
                      },
                      "range": [
                        3773,
                        3792
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 139
                        },
                        "start": {
                          "column": 36,
                          "line": 139
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 139
                          },
                          "start": {
                            "column": 58,
                            "line": 139
                          }
                        },
                        "range": [
                          3795,
                          3803
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3797,
                            3803
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 139
                            },
                            "start": {
                              "column": 60,
                              "line": 139
                            }
                          }
                        }
                      },
                      "range": [
                        3794,
                        3803
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 139
                        },
                        "start": {
                          "column": 57,
                          "line": 139
                        }
                      }
                    }
                  ],
                  "range": [
                    3772,
                    3810
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 139
                    },
                    "start": {
                      "column": 35,
                      "line": 139
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "factory_55033_2",
                "optional": false,
                "range": [
                  3756,
                  3771
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 139
                  },
                  "start": {
                    "column": 19,
                    "line": 139
                  }
                }
              },
              "optional": false,
              "range": [
                3756,
                3811
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 139
                },
                "start": {
                  "column": 19,
                  "line": 139
                }
              }
            },
            "optional": false,
            "range": [
              3756,
              3860
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 142
              },
              "start": {
                "column": 19,
                "line": 139
              }
            }
          },
          "range": [
            3743,
            3860
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 142
            },
            "start": {
              "column": 6,
              "line": 139
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3737,
        3861
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 142
        },
        "start": {
          "column": 0,
          "line": 139
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
        "name": "fn",
        "optional": false,
        "range": [
          3948,
          3950
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 146
          },
          "start": {
            "column": 17,
            "line": 146
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              3977,
              3981
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 146
              },
              "start": {
                "column": 46,
                "line": 146
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 146
              },
              "start": {
                "column": 50,
                "line": 146
              }
            },
            "range": [
              3981,
              3984
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  3983,
                  3984
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 146
                  },
                  "start": {
                    "column": 52,
                    "line": 146
                  }
                }
              },
              "range": [
                3983,
                3984
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 146
                },
                "start": {
                  "column": 52,
                  "line": 146
                }
              }
            }
          },
          "range": [
            3974,
            3984
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 146
            },
            "start": {
              "column": 43,
              "line": 146
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 146
          },
          "start": {
            "column": 54,
            "line": 146
          }
        },
        "range": [
          3985,
          3988
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              3987,
              3988
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 146
              },
              "start": {
                "column": 56,
                "line": 146
              }
            }
          },
          "range": [
            3987,
            3988
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 146
            },
            "start": {
              "column": 56,
              "line": 146
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 146
          },
          "start": {
            "column": 19,
            "line": 146
          }
        },
        "range": [
          3950,
          3973
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  3967,
                  3970
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 146
                  },
                  "start": {
                    "column": 36,
                    "line": 146
                  }
                }
              },
              "range": [
                3967,
                3972
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 146
                },
                "start": {
                  "column": 36,
                  "line": 146
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
                3957,
                3958
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 146
                },
                "start": {
                  "column": 26,
                  "line": 146
                }
              }
            },
            "out": false,
            "range": [
              3951,
              3972
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 146
              },
              "start": {
                "column": 20,
                "line": 146
              }
            }
          }
        ]
      },
      "range": [
        3931,
        3989
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 146
        },
        "start": {
          "column": 0,
          "line": 146
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
              3997,
              3998
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 148
              },
              "start": {
                "column": 6,
                "line": 148
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  4004,
                  4007
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 148
                  },
                  "start": {
                    "column": 13,
                    "line": 148
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  4009,
                  4014
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 148
                  },
                  "start": {
                    "column": 18,
                    "line": 148
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
                4001,
                4003
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 148
                },
                "start": {
                  "column": 10,
                  "line": 148
                }
              }
            },
            "optional": false,
            "range": [
              4001,
              4015
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 148
              },
              "start": {
                "column": 10,
                "line": 148
              }
            }
          },
          "range": [
            3997,
            4015
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 148
            },
            "start": {
              "column": 6,
              "line": 148
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3991,
        4016
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
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
        "name": "fa1",
        "optional": false,
        "range": [
          4081,
          4084
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 152
          },
          "start": {
            "column": 17,
            "line": 152
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 55,
                "line": 152
              },
              "start": {
                "column": 52,
                "line": 152
              }
            },
            "range": [
              4116,
              4119
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4118,
                  4119
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 152
                  },
                  "start": {
                    "column": 54,
                    "line": 152
                  }
                }
              },
              "range": [
                4118,
                4119
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 152
                },
                "start": {
                  "column": 54,
                  "line": 152
                }
              }
            }
          },
          "range": [
            4112,
            4119
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 152
            },
            "start": {
              "column": 48,
              "line": 152
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 59,
            "line": 152
          },
          "start": {
            "column": 56,
            "line": 152
          }
        },
        "range": [
          4120,
          4123
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4122,
              4123
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 152
              },
              "start": {
                "column": 58,
                "line": 152
              }
            }
          },
          "range": [
            4122,
            4123
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 152
            },
            "start": {
              "column": 58,
              "line": 152
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 152
          },
          "start": {
            "column": 20,
            "line": 152
          }
        },
        "range": [
          4084,
          4111
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  4101,
                  4108
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 152
                  },
                  "start": {
                    "column": 37,
                    "line": 152
                  }
                }
              },
              "range": [
                4101,
                4110
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 152
                },
                "start": {
                  "column": 37,
                  "line": 152
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
                4091,
                4092
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
            "out": false,
            "range": [
              4085,
              4110
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 152
              },
              "start": {
                "column": 21,
                "line": 152
              }
            }
          }
        ]
      },
      "range": [
        4064,
        4124
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 152
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
        "name": "fa2",
        "optional": false,
        "range": [
          4142,
          4145
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 153
          },
          "start": {
            "column": 17,
            "line": 153
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 64,
                "line": 153
              },
              "start": {
                "column": 61,
                "line": 153
              }
            },
            "range": [
              4186,
              4189
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4188,
                  4189
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 153
                  },
                  "start": {
                    "column": 63,
                    "line": 153
                  }
                }
              },
              "range": [
                4188,
                4189
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 153
                },
                "start": {
                  "column": 63,
                  "line": 153
                }
              }
            }
          },
          "range": [
            4182,
            4189
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 153
            },
            "start": {
              "column": 57,
              "line": 153
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 68,
            "line": 153
          },
          "start": {
            "column": 65,
            "line": 153
          }
        },
        "range": [
          4190,
          4193
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4192,
              4193
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 153
              },
              "start": {
                "column": 67,
                "line": 153
              }
            }
          },
          "range": [
            4192,
            4193
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 153
            },
            "start": {
              "column": 67,
              "line": 153
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 153
          },
          "start": {
            "column": 20,
            "line": 153
          }
        },
        "range": [
          4145,
          4181
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    4171,
                    4178
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 153
                    },
                    "start": {
                      "column": 46,
                      "line": 153
                    }
                  }
                },
                "range": [
                  4171,
                  4180
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 153
                  },
                  "start": {
                    "column": 46,
                    "line": 153
                  }
                }
              },
              "range": [
                4162,
                4180
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 153
                },
                "start": {
                  "column": 37,
                  "line": 153
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
                4152,
                4153
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 153
                },
                "start": {
                  "column": 27,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              4146,
              4180
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 153
              },
              "start": {
                "column": 21,
                "line": 153
              }
            }
          }
        ]
      },
      "range": [
        4125,
        4194
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 153
        },
        "start": {
          "column": 0,
          "line": 153
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  4201,
                  4208
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 155
                  },
                  "start": {
                    "column": 5,
                    "line": 155
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  4210,
                  4212
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 155
                  },
                  "start": {
                    "column": 14,
                    "line": 155
                  }
                }
              }
            ],
            "range": [
              4200,
              4213
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 155
              },
              "start": {
                "column": 4,
                "line": 155
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa1",
          "optional": false,
          "range": [
            4196,
            4199
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 155
            },
            "start": {
              "column": 0,
              "line": 155
            }
          }
        },
        "optional": false,
        "range": [
          4196,
          4214
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 155
          },
          "start": {
            "column": 0,
            "line": 155
          }
        }
      },
      "range": [
        4196,
        4215
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 155
        },
        "start": {
          "column": 0,
          "line": 155
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  4221,
                  4228
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 156
                  },
                  "start": {
                    "column": 5,
                    "line": 156
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  4230,
                  4232
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 156
                  },
                  "start": {
                    "column": 14,
                    "line": 156
                  }
                }
              }
            ],
            "range": [
              4220,
              4233
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa2",
          "optional": false,
          "range": [
            4216,
            4219
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 156
            },
            "start": {
              "column": 0,
              "line": 156
            }
          }
        },
        "optional": false,
        "range": [
          4216,
          4234
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 156
          },
          "start": {
            "column": 0,
            "line": 156
          }
        }
      },
      "range": [
        4216,
        4235
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 156
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
        "name": "fb1",
        "optional": false,
        "range": [
          4254,
          4257
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 158
          },
          "start": {
            "column": 17,
            "line": 158
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              4288,
              4292
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 158
              },
              "start": {
                "column": 51,
                "line": 158
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 58,
                "line": 158
              },
              "start": {
                "column": 55,
                "line": 158
              }
            },
            "range": [
              4292,
              4295
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4294,
                  4295
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 158
                  },
                  "start": {
                    "column": 57,
                    "line": 158
                  }
                }
              },
              "range": [
                4294,
                4295
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 158
                },
                "start": {
                  "column": 57,
                  "line": 158
                }
              }
            }
          },
          "range": [
            4285,
            4295
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 158
            },
            "start": {
              "column": 48,
              "line": 158
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 158
          },
          "start": {
            "column": 59,
            "line": 158
          }
        },
        "range": [
          4296,
          4299
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4298,
              4299
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 158
              },
              "start": {
                "column": 61,
                "line": 158
              }
            }
          },
          "range": [
            4298,
            4299
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 158
            },
            "start": {
              "column": 61,
              "line": 158
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 158
          },
          "start": {
            "column": 20,
            "line": 158
          }
        },
        "range": [
          4257,
          4284
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  4274,
                  4281
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 158
                  },
                  "start": {
                    "column": 37,
                    "line": 158
                  }
                }
              },
              "range": [
                4274,
                4283
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 158
                },
                "start": {
                  "column": 37,
                  "line": 158
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
                4264,
                4265
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 158
                },
                "start": {
                  "column": 27,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              4258,
              4283
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 158
              },
              "start": {
                "column": 21,
                "line": 158
              }
            }
          }
        ]
      },
      "range": [
        4237,
        4300
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 158
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
        "name": "fb2",
        "optional": false,
        "range": [
          4318,
          4321
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 159
          },
          "start": {
            "column": 17,
            "line": 159
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              4361,
              4365
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 159
              },
              "start": {
                "column": 60,
                "line": 159
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 159
              },
              "start": {
                "column": 64,
                "line": 159
              }
            },
            "range": [
              4365,
              4368
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4367,
                  4368
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 159
                  },
                  "start": {
                    "column": 66,
                    "line": 159
                  }
                }
              },
              "range": [
                4367,
                4368
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 159
                },
                "start": {
                  "column": 66,
                  "line": 159
                }
              }
            }
          },
          "range": [
            4358,
            4368
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 159
            },
            "start": {
              "column": 57,
              "line": 159
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 71,
            "line": 159
          },
          "start": {
            "column": 68,
            "line": 159
          }
        },
        "range": [
          4369,
          4372
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4371,
              4372
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 159
              },
              "start": {
                "column": 70,
                "line": 159
              }
            }
          },
          "range": [
            4371,
            4372
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 159
            },
            "start": {
              "column": 70,
              "line": 159
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 159
          },
          "start": {
            "column": 20,
            "line": 159
          }
        },
        "range": [
          4321,
          4357
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    4347,
                    4354
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 159
                    },
                    "start": {
                      "column": 46,
                      "line": 159
                    }
                  }
                },
                "range": [
                  4347,
                  4356
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 159
                  },
                  "start": {
                    "column": 46,
                    "line": 159
                  }
                }
              },
              "range": [
                4338,
                4356
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 159
                },
                "start": {
                  "column": 37,
                  "line": 159
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
                4328,
                4329
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 159
                },
                "start": {
                  "column": 27,
                  "line": 159
                }
              }
            },
            "out": false,
            "range": [
              4322,
              4356
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 159
              },
              "start": {
                "column": 21,
                "line": 159
              }
            }
          }
        ]
      },
      "range": [
        4301,
        4373
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 159
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              4379,
              4386
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              4388,
              4390
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 161
              },
              "start": {
                "column": 13,
                "line": 161
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb1",
          "optional": false,
          "range": [
            4375,
            4378
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 161
            },
            "start": {
              "column": 0,
              "line": 161
            }
          }
        },
        "optional": false,
        "range": [
          4375,
          4391
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 161
          },
          "start": {
            "column": 0,
            "line": 161
          }
        }
      },
      "range": [
        4375,
        4392
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 161
        },
        "start": {
          "column": 0,
          "line": 161
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
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              4397,
              4404
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              4406,
              4408
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 162
              },
              "start": {
                "column": 13,
                "line": 162
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fb2",
          "optional": false,
          "range": [
            4393,
            4396
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 162
            },
            "start": {
              "column": 0,
              "line": 162
            }
          }
        },
        "optional": false,
        "range": [
          4393,
          4409
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 162
          },
          "start": {
            "column": 0,
            "line": 162
          }
        }
      },
      "range": [
        4393,
        4410
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 162
        },
        "start": {
          "column": 0,
          "line": 162
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
        "name": "fc1",
        "optional": false,
        "range": [
          4429,
          4432
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 164
          },
          "start": {
            "column": 17,
            "line": 164
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 164
              },
              "start": {
                "column": 49,
                "line": 164
              }
            },
            "range": [
              4461,
              4483
            ],
            "typeAnnotation": {
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
                      4467,
                      4471
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 164
                      },
                      "start": {
                        "column": 55,
                        "line": 164
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 164
                      },
                      "start": {
                        "column": 59,
                        "line": 164
                      }
                    },
                    "range": [
                      4471,
                      4474
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4473,
                          4474
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 164
                          },
                          "start": {
                            "column": 61,
                            "line": 164
                          }
                        }
                      },
                      "range": [
                        4473,
                        4474
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 164
                        },
                        "start": {
                          "column": 61,
                          "line": 164
                        }
                      }
                    }
                  },
                  "range": [
                    4464,
                    4474
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 164
                    },
                    "start": {
                      "column": 52,
                      "line": 164
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 164
                  },
                  "start": {
                    "column": 64,
                    "line": 164
                  }
                },
                "range": [
                  4476,
                  4483
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    4479,
                    4483
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 164
                    },
                    "start": {
                      "column": 67,
                      "line": 164
                    }
                  }
                }
              },
              "range": [
                4463,
                4483
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 164
                },
                "start": {
                  "column": 51,
                  "line": 164
                }
              }
            }
          },
          "range": [
            4460,
            4483
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 164
            },
            "start": {
              "column": 48,
              "line": 164
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              4488,
              4492
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 164
              },
              "start": {
                "column": 76,
                "line": 164
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 164
              },
              "start": {
                "column": 80,
                "line": 164
              }
            },
            "range": [
              4492,
              4495
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4494,
                  4495
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 164
                  },
                  "start": {
                    "column": 82,
                    "line": 164
                  }
                }
              },
              "range": [
                4494,
                4495
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 164
                },
                "start": {
                  "column": 82,
                  "line": 164
                }
              }
            }
          },
          "range": [
            4485,
            4495
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 164
            },
            "start": {
              "column": 73,
              "line": 164
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 87,
            "line": 164
          },
          "start": {
            "column": 84,
            "line": 164
          }
        },
        "range": [
          4496,
          4499
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4498,
              4499
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 164
              },
              "start": {
                "column": 86,
                "line": 164
              }
            }
          },
          "range": [
            4498,
            4499
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 164
            },
            "start": {
              "column": 86,
              "line": 164
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 47,
            "line": 164
          },
          "start": {
            "column": 20,
            "line": 164
          }
        },
        "range": [
          4432,
          4459
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  4449,
                  4456
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 164
                  },
                  "start": {
                    "column": 37,
                    "line": 164
                  }
                }
              },
              "range": [
                4449,
                4458
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 164
                },
                "start": {
                  "column": 37,
                  "line": 164
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
                4439,
                4440
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
            "out": false,
            "range": [
              4433,
              4458
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 164
              },
              "start": {
                "column": 21,
                "line": 164
              }
            }
          }
        ]
      },
      "range": [
        4412,
        4500
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 164
        },
        "start": {
          "column": 0,
          "line": 164
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
        "name": "fc2",
        "optional": false,
        "range": [
          4518,
          4521
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 165
          },
          "start": {
            "column": 17,
            "line": 165
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 165
              },
              "start": {
                "column": 58,
                "line": 165
              }
            },
            "range": [
              4559,
              4581
            ],
            "typeAnnotation": {
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
                      4565,
                      4569
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 165
                      },
                      "start": {
                        "column": 64,
                        "line": 165
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
                        "line": 165
                      },
                      "start": {
                        "column": 68,
                        "line": 165
                      }
                    },
                    "range": [
                      4569,
                      4572
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4571,
                          4572
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 165
                          },
                          "start": {
                            "column": 70,
                            "line": 165
                          }
                        }
                      },
                      "range": [
                        4571,
                        4572
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 165
                        },
                        "start": {
                          "column": 70,
                          "line": 165
                        }
                      }
                    }
                  },
                  "range": [
                    4562,
                    4572
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 165
                    },
                    "start": {
                      "column": 61,
                      "line": 165
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 165
                  },
                  "start": {
                    "column": 73,
                    "line": 165
                  }
                },
                "range": [
                  4574,
                  4581
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    4577,
                    4581
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 165
                    },
                    "start": {
                      "column": 76,
                      "line": 165
                    }
                  }
                }
              },
              "range": [
                4561,
                4581
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 165
                },
                "start": {
                  "column": 60,
                  "line": 165
                }
              }
            }
          },
          "range": [
            4558,
            4581
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 165
            },
            "start": {
              "column": 57,
              "line": 165
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              4586,
              4590
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 165
              },
              "start": {
                "column": 85,
                "line": 165
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 92,
                "line": 165
              },
              "start": {
                "column": 89,
                "line": 165
              }
            },
            "range": [
              4590,
              4593
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4592,
                  4593
                ],
                "loc": {
                  "end": {
                    "column": 92,
                    "line": 165
                  },
                  "start": {
                    "column": 91,
                    "line": 165
                  }
                }
              },
              "range": [
                4592,
                4593
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 165
                },
                "start": {
                  "column": 91,
                  "line": 165
                }
              }
            }
          },
          "range": [
            4583,
            4593
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 165
            },
            "start": {
              "column": 82,
              "line": 165
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 96,
            "line": 165
          },
          "start": {
            "column": 93,
            "line": 165
          }
        },
        "range": [
          4594,
          4597
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4596,
              4597
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 165
              },
              "start": {
                "column": 95,
                "line": 165
              }
            }
          },
          "range": [
            4596,
            4597
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 165
            },
            "start": {
              "column": 95,
              "line": 165
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 165
          },
          "start": {
            "column": 20,
            "line": 165
          }
        },
        "range": [
          4521,
          4557
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    4547,
                    4554
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 165
                    },
                    "start": {
                      "column": 46,
                      "line": 165
                    }
                  }
                },
                "range": [
                  4547,
                  4556
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 165
                  },
                  "start": {
                    "column": 46,
                    "line": 165
                  }
                }
              },
              "range": [
                4538,
                4556
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 165
                },
                "start": {
                  "column": 37,
                  "line": 165
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
                4528,
                4529
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 165
                },
                "start": {
                  "column": 27,
                  "line": 165
                }
              }
            },
            "out": false,
            "range": [
              4522,
              4556
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 165
              },
              "start": {
                "column": 21,
                "line": 165
              }
            }
          }
        ]
      },
      "range": [
        4501,
        4598
      ],
      "loc": {
        "end": {
          "column": 97,
          "line": 165
        },
        "start": {
          "column": 0,
          "line": 165
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
                4630,
                4632
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 167
                },
                "start": {
                  "column": 30,
                  "line": 167
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 167
                    },
                    "start": {
                      "column": 6,
                      "line": 167
                    }
                  },
                  "range": [
                    4606,
                    4614
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      4608,
                      4614
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 167
                      },
                      "start": {
                        "column": 8,
                        "line": 167
                      }
                    }
                  }
                },
                "range": [
                  4605,
                  4614
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 167
                  },
                  "start": {
                    "column": 5,
                    "line": 167
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 167
                    },
                    "start": {
                      "column": 17,
                      "line": 167
                    }
                  },
                  "range": [
                    4617,
                    4625
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      4619,
                      4625
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 167
                      },
                      "start": {
                        "column": 19,
                        "line": 167
                      }
                    }
                  }
                },
                "range": [
                  4616,
                  4625
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 167
                  },
                  "start": {
                    "column": 16,
                    "line": 167
                  }
                }
              }
            ],
            "range": [
              4604,
              4632
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              4634,
              4641
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 167
              },
              "start": {
                "column": 34,
                "line": 167
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              4643,
              4645
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 167
              },
              "start": {
                "column": 43,
                "line": 167
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc1",
          "optional": false,
          "range": [
            4600,
            4603
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 167
            },
            "start": {
              "column": 0,
              "line": 167
            }
          }
        },
        "optional": false,
        "range": [
          4600,
          4646
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 167
          },
          "start": {
            "column": 0,
            "line": 167
          }
        }
      },
      "range": [
        4600,
        4647
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 167
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
                4678,
                4680
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 168
                },
                "start": {
                  "column": 30,
                  "line": 168
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 168
                    },
                    "start": {
                      "column": 6,
                      "line": 168
                    }
                  },
                  "range": [
                    4654,
                    4662
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      4656,
                      4662
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 168
                      },
                      "start": {
                        "column": 8,
                        "line": 168
                      }
                    }
                  }
                },
                "range": [
                  4653,
                  4662
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 168
                  },
                  "start": {
                    "column": 5,
                    "line": 168
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 168
                    },
                    "start": {
                      "column": 17,
                      "line": 168
                    }
                  },
                  "range": [
                    4665,
                    4673
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      4667,
                      4673
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 168
                      },
                      "start": {
                        "column": 19,
                        "line": 168
                      }
                    }
                  }
                },
                "range": [
                  4664,
                  4673
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 168
                  },
                  "start": {
                    "column": 16,
                    "line": 168
                  }
                }
              }
            ],
            "range": [
              4652,
              4680
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"hello\"",
            "value": "hello",
            "range": [
              4682,
              4689
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 168
              },
              "start": {
                "column": 34,
                "line": 168
              }
            }
          },
          {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              4691,
              4693
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 168
              },
              "start": {
                "column": 43,
                "line": 168
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fc2",
          "optional": false,
          "range": [
            4648,
            4651
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 168
            },
            "start": {
              "column": 0,
              "line": 168
            }
          }
        },
        "optional": false,
        "range": [
          4648,
          4694
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 168
          },
          "start": {
            "column": 0,
            "line": 168
          }
        }
      },
      "range": [
        4648,
        4695
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 168
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
        "name": "fd1",
        "optional": false,
        "range": [
          4714,
          4717
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 170
          },
          "start": {
            "column": 17,
            "line": 170
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 170
              },
              "start": {
                "column": 62,
                "line": 170
              }
            },
            "range": [
              4759,
              4762
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4761,
                  4762
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 170
                  },
                  "start": {
                    "column": 64,
                    "line": 170
                  }
                }
              },
              "range": [
                4761,
                4762
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 170
                },
                "start": {
                  "column": 64,
                  "line": 170
                }
              }
            }
          },
          "range": [
            4755,
            4762
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 170
            },
            "start": {
              "column": 58,
              "line": 170
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 69,
            "line": 170
          },
          "start": {
            "column": 66,
            "line": 170
          }
        },
        "range": [
          4763,
          4766
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4765,
              4766
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 170
              },
              "start": {
                "column": 68,
                "line": 170
              }
            }
          },
          "range": [
            4765,
            4766
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 170
            },
            "start": {
              "column": 68,
              "line": 170
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 170
          },
          "start": {
            "column": 20,
            "line": 170
          }
        },
        "range": [
          4717,
          4754
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      4734,
                      4740
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 170
                      },
                      "start": {
                        "column": 37,
                        "line": 170
                      }
                    }
                  },
                  "range": [
                    4734,
                    4742
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 170
                    },
                    "start": {
                      "column": 37,
                      "line": 170
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      4745,
                      4751
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 170
                      },
                      "start": {
                        "column": 48,
                        "line": 170
                      }
                    }
                  },
                  "range": [
                    4745,
                    4753
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 170
                    },
                    "start": {
                      "column": 48,
                      "line": 170
                    }
                  }
                }
              ],
              "range": [
                4734,
                4753
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 170
                },
                "start": {
                  "column": 37,
                  "line": 170
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
                4724,
                4725
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 170
                },
                "start": {
                  "column": 27,
                  "line": 170
                }
              }
            },
            "out": false,
            "range": [
              4718,
              4753
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 170
              },
              "start": {
                "column": 21,
                "line": 170
              }
            }
          }
        ]
      },
      "range": [
        4697,
        4767
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 170
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
        "name": "fd2",
        "optional": false,
        "range": [
          4785,
          4788
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 171
          },
          "start": {
            "column": 17,
            "line": 171
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 171
              },
              "start": {
                "column": 71,
                "line": 171
              }
            },
            "range": [
              4839,
              4842
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4841,
                  4842
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 171
                  },
                  "start": {
                    "column": 73,
                    "line": 171
                  }
                }
              },
              "range": [
                4841,
                4842
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 171
                },
                "start": {
                  "column": 73,
                  "line": 171
                }
              }
            }
          },
          "range": [
            4835,
            4842
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 171
            },
            "start": {
              "column": 67,
              "line": 171
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 171
          },
          "start": {
            "column": 75,
            "line": 171
          }
        },
        "range": [
          4843,
          4846
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4845,
              4846
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 171
              },
              "start": {
                "column": 77,
                "line": 171
              }
            }
          },
          "range": [
            4845,
            4846
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 171
            },
            "start": {
              "column": 77,
              "line": 171
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 66,
            "line": 171
          },
          "start": {
            "column": 20,
            "line": 171
          }
        },
        "range": [
          4788,
          4834
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      4805,
                      4811
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 171
                      },
                      "start": {
                        "column": 37,
                        "line": 171
                      }
                    }
                  },
                  "range": [
                    4805,
                    4813
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 171
                    },
                    "start": {
                      "column": 37,
                      "line": 171
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        4825,
                        4831
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 171
                        },
                        "start": {
                          "column": 57,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      4825,
                      4833
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 171
                      },
                      "start": {
                        "column": 57,
                        "line": 171
                      }
                    }
                  },
                  "range": [
                    4816,
                    4833
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 171
                    },
                    "start": {
                      "column": 48,
                      "line": 171
                    }
                  }
                }
              ],
              "range": [
                4805,
                4833
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 171
                },
                "start": {
                  "column": 37,
                  "line": 171
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
                4795,
                4796
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 171
                },
                "start": {
                  "column": 27,
                  "line": 171
                }
              }
            },
            "out": false,
            "range": [
              4789,
              4833
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 171
              },
              "start": {
                "column": 21,
                "line": 171
              }
            }
          }
        ]
      },
      "range": [
        4768,
        4847
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 171
        },
        "start": {
          "column": 0,
          "line": 171
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
        "name": "fd3",
        "optional": false,
        "range": [
          4865,
          4868
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 83,
                "line": 172
              },
              "start": {
                "column": 80,
                "line": 172
              }
            },
            "range": [
              4928,
              4931
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4930,
                  4931
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 172
                  },
                  "start": {
                    "column": 82,
                    "line": 172
                  }
                }
              },
              "range": [
                4930,
                4931
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 172
                },
                "start": {
                  "column": 82,
                  "line": 172
                }
              }
            }
          },
          "range": [
            4924,
            4931
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 172
            },
            "start": {
              "column": 76,
              "line": 172
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 87,
            "line": 172
          },
          "start": {
            "column": 84,
            "line": 172
          }
        },
        "range": [
          4932,
          4935
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4934,
              4935
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 172
              },
              "start": {
                "column": 86,
                "line": 172
              }
            }
          },
          "range": [
            4934,
            4935
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 172
            },
            "start": {
              "column": 86,
              "line": 172
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 75,
            "line": 172
          },
          "start": {
            "column": 20,
            "line": 172
          }
        },
        "range": [
          4868,
          4923
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        4894,
                        4900
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 172
                        },
                        "start": {
                          "column": 46,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      4894,
                      4902
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 172
                      },
                      "start": {
                        "column": 46,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    4885,
                    4902
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 172
                    },
                    "start": {
                      "column": 37,
                      "line": 172
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        4914,
                        4920
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 172
                        },
                        "start": {
                          "column": 66,
                          "line": 172
                        }
                      }
                    },
                    "range": [
                      4914,
                      4922
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 172
                      },
                      "start": {
                        "column": 66,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    4905,
                    4922
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 172
                    },
                    "start": {
                      "column": 57,
                      "line": 172
                    }
                  }
                }
              ],
              "range": [
                4885,
                4922
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 172
                },
                "start": {
                  "column": 37,
                  "line": 172
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
                4875,
                4876
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 172
                },
                "start": {
                  "column": 27,
                  "line": 172
                }
              }
            },
            "out": false,
            "range": [
              4869,
              4922
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 172
              },
              "start": {
                "column": 21,
                "line": 172
              }
            }
          }
        ]
      },
      "range": [
        4848,
        4936
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 172
        },
        "start": {
          "column": 0,
          "line": 172
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  4943,
                  4950
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 174
                  },
                  "start": {
                    "column": 5,
                    "line": 174
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"world\"",
                "value": "world",
                "range": [
                  4952,
                  4959
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 174
                  },
                  "start": {
                    "column": 14,
                    "line": 174
                  }
                }
              }
            ],
            "range": [
              4942,
              4960
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "range": [
            4938,
            4941
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 174
            },
            "start": {
              "column": 0,
              "line": 174
            }
          }
        },
        "optional": false,
        "range": [
          4938,
          4961
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 174
          },
          "start": {
            "column": 0,
            "line": 174
          }
        }
      },
      "range": [
        4938,
        4962
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4968,
                  4969
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 175
                  },
                  "start": {
                    "column": 5,
                    "line": 175
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  4971,
                  4972
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 175
                  },
                  "start": {
                    "column": 8,
                    "line": 175
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  4974,
                  4975
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
              }
            ],
            "range": [
              4967,
              4976
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd1",
          "optional": false,
          "range": [
            4963,
            4966
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 175
            },
            "start": {
              "column": 0,
              "line": 175
            }
          }
        },
        "optional": false,
        "range": [
          4963,
          4977
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 175
          },
          "start": {
            "column": 0,
            "line": 175
          }
        }
      },
      "range": [
        4963,
        4978
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  4984,
                  4991
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 176
                  },
                  "start": {
                    "column": 5,
                    "line": 176
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"world\"",
                "value": "world",
                "range": [
                  4993,
                  5000
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 176
                  },
                  "start": {
                    "column": 14,
                    "line": 176
                  }
                }
              }
            ],
            "range": [
              4983,
              5001
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 176
              },
              "start": {
                "column": 4,
                "line": 176
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "range": [
            4979,
            4982
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 176
            },
            "start": {
              "column": 0,
              "line": 176
            }
          }
        },
        "optional": false,
        "range": [
          4979,
          5002
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 176
          },
          "start": {
            "column": 0,
            "line": 176
          }
        }
      },
      "range": [
        4979,
        5003
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 176
        },
        "start": {
          "column": 0,
          "line": 176
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5009,
                  5010
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 177
                  },
                  "start": {
                    "column": 5,
                    "line": 177
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  5012,
                  5013
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 177
                  },
                  "start": {
                    "column": 8,
                    "line": 177
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  5015,
                  5016
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 177
                  },
                  "start": {
                    "column": 11,
                    "line": 177
                  }
                }
              }
            ],
            "range": [
              5008,
              5017
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 177
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd2",
          "optional": false,
          "range": [
            5004,
            5007
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 177
            },
            "start": {
              "column": 0,
              "line": 177
            }
          }
        },
        "optional": false,
        "range": [
          5004,
          5018
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 177
          },
          "start": {
            "column": 0,
            "line": 177
          }
        }
      },
      "range": [
        5004,
        5019
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 177
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  5025,
                  5032
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 178
                  },
                  "start": {
                    "column": 5,
                    "line": 178
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"world\"",
                "value": "world",
                "range": [
                  5034,
                  5041
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 178
                  },
                  "start": {
                    "column": 14,
                    "line": 178
                  }
                }
              }
            ],
            "range": [
              5024,
              5042
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 178
              },
              "start": {
                "column": 4,
                "line": 178
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "range": [
            5020,
            5023
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 178
            },
            "start": {
              "column": 0,
              "line": 178
            }
          }
        },
        "optional": false,
        "range": [
          5020,
          5043
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 178
          },
          "start": {
            "column": 0,
            "line": 178
          }
        }
      },
      "range": [
        5020,
        5044
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 178
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  5050,
                  5051
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 179
                  },
                  "start": {
                    "column": 5,
                    "line": 179
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  5053,
                  5054
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 179
                  },
                  "start": {
                    "column": 8,
                    "line": 179
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  5056,
                  5057
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 179
                  },
                  "start": {
                    "column": 11,
                    "line": 179
                  }
                }
              }
            ],
            "range": [
              5049,
              5058
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 179
              },
              "start": {
                "column": 4,
                "line": 179
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fd3",
          "optional": false,
          "range": [
            5045,
            5048
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 179
            },
            "start": {
              "column": 0,
              "line": 179
            }
          }
        },
        "optional": false,
        "range": [
          5045,
          5059
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 179
          },
          "start": {
            "column": 0,
            "line": 179
          }
        }
      },
      "range": [
        5045,
        5060
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 179
        },
        "start": {
          "column": 0,
          "line": 179
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
        "name": "fn1",
        "optional": false,
        "range": [
          5079,
          5082
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 181
          },
          "start": {
            "column": 17,
            "line": 181
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              5124,
              5128
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 181
              },
              "start": {
                "column": 62,
                "line": 181
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 181
              },
              "start": {
                "column": 66,
                "line": 181
              }
            },
            "range": [
              5128,
              5131
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5130,
                  5131
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 181
                  },
                  "start": {
                    "column": 68,
                    "line": 181
                  }
                }
              },
              "range": [
                5130,
                5131
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 181
                },
                "start": {
                  "column": 68,
                  "line": 181
                }
              }
            }
          },
          "range": [
            5121,
            5131
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 181
            },
            "start": {
              "column": 59,
              "line": 181
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 73,
            "line": 181
          },
          "start": {
            "column": 70,
            "line": 181
          }
        },
        "range": [
          5132,
          5135
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              5134,
              5135
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 181
              },
              "start": {
                "column": 72,
                "line": 181
              }
            }
          },
          "range": [
            5134,
            5135
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 181
            },
            "start": {
              "column": 72,
              "line": 181
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 58,
            "line": 181
          },
          "start": {
            "column": 20,
            "line": 181
          }
        },
        "range": [
          5082,
          5120
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": true,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        5101,
                        5104
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 181
                        },
                        "start": {
                          "column": 39,
                          "line": 181
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
                          "line": 181
                        },
                        "start": {
                          "column": 42,
                          "line": 181
                        }
                      },
                      "range": [
                        5104,
                        5115
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "range": [
                            5106,
                            5113
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 181
                            },
                            "start": {
                              "column": 44,
                              "line": 181
                            }
                          }
                        },
                        "range": [
                          5106,
                          5115
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 181
                          },
                          "start": {
                            "column": 44,
                            "line": 181
                          }
                        }
                      }
                    },
                    "range": [
                      5101,
                      5115
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 181
                      },
                      "start": {
                        "column": 39,
                        "line": 181
                      }
                    }
                  }
                ],
                "range": [
                  5099,
                  5117
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 181
                  },
                  "start": {
                    "column": 37,
                    "line": 181
                  }
                }
              },
              "range": [
                5099,
                5119
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 181
                },
                "start": {
                  "column": 37,
                  "line": 181
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
                5089,
                5090
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 181
                },
                "start": {
                  "column": 27,
                  "line": 181
                }
              }
            },
            "out": false,
            "range": [
              5083,
              5119
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 181
              },
              "start": {
                "column": 21,
                "line": 181
              }
            }
          }
        ]
      },
      "range": [
        5062,
        5136
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 181
        },
        "start": {
          "column": 0,
          "line": 181
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    5144,
                    5147
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 183
                    },
                    "start": {
                      "column": 6,
                      "line": 183
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        5150,
                        5157
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 183
                        },
                        "start": {
                          "column": 12,
                          "line": 183
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        5159,
                        5162
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 183
                        },
                        "start": {
                          "column": 21,
                          "line": 183
                        }
                      }
                    }
                  ],
                  "range": [
                    5149,
                    5163
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 183
                    },
                    "start": {
                      "column": 11,
                      "line": 183
                    }
                  }
                },
                "range": [
                  5144,
                  5163
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 183
                  },
                  "start": {
                    "column": 6,
                    "line": 183
                  }
                }
              }
            ],
            "range": [
              5142,
              5165
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 183
              },
              "start": {
                "column": 4,
                "line": 183
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    5169,
                    5172
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 183
                    },
                    "start": {
                      "column": 31,
                      "line": 183
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        5175,
                        5179
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 183
                        },
                        "start": {
                          "column": 37,
                          "line": 183
                        }
                      }
                    }
                  ],
                  "range": [
                    5174,
                    5180
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 183
                    },
                    "start": {
                      "column": 36,
                      "line": 183
                    }
                  }
                },
                "range": [
                  5169,
                  5180
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 183
                  },
                  "start": {
                    "column": 31,
                    "line": 183
                  }
                }
              }
            ],
            "range": [
              5167,
              5181
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 183
              },
              "start": {
                "column": 29,
                "line": 183
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "range": [
            5138,
            5141
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 183
            },
            "start": {
              "column": 0,
              "line": 183
            }
          }
        },
        "optional": false,
        "range": [
          5138,
          5182
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 183
          },
          "start": {
            "column": 0,
            "line": 183
          }
        }
      },
      "range": [
        5138,
        5183
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 183
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 184
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
