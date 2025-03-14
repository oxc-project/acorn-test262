__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1621
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
        "name": "fx1",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
                "column": 72,
                "line": 1
              },
              "start": {
                "column": 69,
                "line": 1
              }
            },
            "range": [
              69,
              72
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 1
                  },
                  "start": {
                    "column": 71,
                    "line": 1
                  }
                }
              },
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 1
                },
                "start": {
                  "column": 71,
                  "line": 1
                }
              }
            }
          },
          "range": [
            68,
            72
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 1
            },
            "start": {
              "column": 68,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 1
          },
          "start": {
            "column": 73,
            "line": 1
          }
        },
        "range": [
          73,
          76
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 1
              },
              "start": {
                "column": 75,
                "line": 1
              }
            }
          },
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 1
            },
            "start": {
              "column": 75,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 67,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          67
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    32,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    40,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 1
                    },
                    "start": {
                      "column": 40,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    48,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 1
                    },
                    "start": {
                      "column": 48,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          56,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
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
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 1
                        },
                        "start": {
                          "column": 56,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          62,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 1
                          },
                          "start": {
                            "column": 62,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        62,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 1
                        },
                        "start": {
                          "column": 62,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    56,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 1
                    },
                    "start": {
                      "column": 56,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                31,
                66
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
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
            "out": false,
            "range": [
              21,
              66
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        77
      ],
      "loc": {
        "end": {
          "column": 77,
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
        "name": "fx2",
        "optional": false,
        "range": [
          95,
          98
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
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
                "column": 61,
                "line": 2
              },
              "start": {
                "column": 58,
                "line": 2
              }
            },
            "range": [
              136,
              139
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  138,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 2
                  },
                  "start": {
                    "column": 60,
                    "line": 2
                  }
                }
              },
              "range": [
                138,
                139
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 2
                },
                "start": {
                  "column": 60,
                  "line": 2
                }
              }
            }
          },
          "range": [
            135,
            139
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 2
            },
            "start": {
              "column": 57,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 65,
            "line": 2
          },
          "start": {
            "column": 62,
            "line": 2
          }
        },
        "range": [
          140,
          143
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              142,
              143
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 2
              },
              "start": {
                "column": 64,
                "line": 2
              }
            }
          },
          "range": [
            142,
            143
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 2
            },
            "start": {
              "column": 64,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 2
          },
          "start": {
            "column": 20,
            "line": 2
          }
        },
        "range": [
          98,
          134
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        113,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      113,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    110,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 32,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'a'",
                        "value": "a",
                        "range": [
                          123,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 2
                          },
                          "start": {
                            "column": 45,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        123,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 2
                        },
                        "start": {
                          "column": 45,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'b'",
                        "value": "b",
                        "range": [
                          129,
                          132
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 2
                          },
                          "start": {
                            "column": 51,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        129,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 2
                        },
                        "start": {
                          "column": 51,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    123,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 2
                    },
                    "start": {
                      "column": 45,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                109,
                133
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 31,
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
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              99,
              133
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 21,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        78,
        144
      ],
      "loc": {
        "end": {
          "column": 66,
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
            "name": "t3",
            "optional": false,
            "range": [
              152,
              154
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    158,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'y'",
                  "value": "y",
                  "range": [
                    163,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "'z'",
                  "value": "z",
                  "range": [
                    168,
                    171
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
                }
              ],
              "range": [
                157,
                172
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
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
                  176,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 30,
                    "line": 4
                  }
                }
              },
              "range": [
                176,
                181
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            },
            "range": [
              157,
              181
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          "range": [
            152,
            181
          ],
          "loc": {
            "end": {
              "column": 35,
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
        146,
        182
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
                "raw": "'x'",
                "value": "x",
                "range": [
                  189,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  194,
                  197
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
              {
                "type": "Literal",
                "raw": "'z'",
                "value": "z",
                "range": [
                  199,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  204,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              188,
              208
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "range": [
            184,
            187
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
          184,
          209
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        184,
        210
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "range": [
                    219,
                    221
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
                },
                "range": [
                  216,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  223,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              215,
              227
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "range": [
            211,
            214
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
          211,
          228
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
        211,
        229
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'x'",
                "value": "x",
                "range": [
                  236,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  241,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'z'",
                "value": "z",
                "range": [
                  246,
                  249
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
              },
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              235,
              255
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "range": [
            231,
            234
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          231,
          256
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        231,
        257
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "range": [
                    266,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "range": [
                  263,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  270,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              262,
              274
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "range": [
            258,
            261
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          258,
          275
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        258,
        276
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                286,
                306
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          292,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        292,
                        300
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      289,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'!'",
                      "value": "!",
                      "range": [
                        302,
                        305
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 12
                        },
                        "start": {
                          "column": 24,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      302,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  288,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              284,
              306
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'!'",
                "value": "!",
                "range": [
                  310,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 32,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              309,
              314
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 31,
                "line": 12
              }
            }
          },
          "range": [
            284,
            314
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        278,
        315
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              },
              "range": [
                324,
                344
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          330,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        330,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      327,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'!'",
                      "value": "!",
                      "range": [
                        340,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 13
                        },
                        "start": {
                          "column": 24,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      340,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 24,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  344
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
            },
            "range": [
              322,
              344
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "'a'",
                "value": "a",
                "range": [
                  348,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 13
                  },
                  "start": {
                    "column": 32,
                    "line": 13
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'!'",
                "value": "!",
                "range": [
                  353,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 13
                  },
                  "start": {
                    "column": 37,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              347,
              357
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 13
              },
              "start": {
                "column": 31,
                "line": 13
              }
            }
          },
          "range": [
            322,
            357
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        316,
        358
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                367,
                387
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          373,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        373,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      370,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 11,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'!'",
                      "value": "!",
                      "range": [
                        383,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      383,
                      386
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  369,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              365,
              387
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "range": [
                    394,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 35,
                      "line": 14
                    }
                  }
                },
                "range": [
                  391,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 32,
                    "line": 14
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "'!'",
                "value": "!",
                "range": [
                  398,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 39,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              390,
              402
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 31,
                "line": 14
              }
            }
          },
          "range": [
            365,
            402
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        359,
        403
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "staticPath1Level",
            "optional": false,
            "range": [
              433,
              449
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"home\"",
                  "value": "home",
                  "range": [
                    453,
                    459
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                452,
                460
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
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
                  464,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 18
                  }
                }
              },
              "range": [
                464,
                469
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 18
                },
                "start": {
                  "column": 37,
                  "line": 18
                }
              }
            },
            "range": [
              452,
              469
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 25,
                "line": 18
              }
            }
          },
          "range": [
            433,
            469
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        427,
        470
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "staticPath2Level",
            "optional": false,
            "range": [
              477,
              493
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"home\"",
                  "value": "home",
                  "range": [
                    497,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 26,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"user\"",
                  "value": "user",
                  "range": [
                    505,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 19
                    },
                    "start": {
                      "column": 34,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                496,
                512
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
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
                  516,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 19
                  },
                  "start": {
                    "column": 45,
                    "line": 19
                  }
                }
              },
              "range": [
                516,
                521
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 45,
                  "line": 19
                }
              }
            },
            "range": [
              496,
              521
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 19
              },
              "start": {
                "column": 25,
                "line": 19
              }
            }
          },
          "range": [
            477,
            521
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        471,
        522
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 19
        },
        "start": {
          "column": 0,
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
            "name": "staticPath3Level",
            "optional": false,
            "range": [
              529,
              545
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"home\"",
                  "value": "home",
                  "range": [
                    549,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"user\"",
                  "value": "user",
                  "range": [
                    557,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"downloads\"",
                  "value": "downloads",
                  "range": [
                    565,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 20
                    },
                    "start": {
                      "column": 42,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                548,
                577
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 20
                },
                "start": {
                  "column": 25,
                  "line": 20
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
                  581,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 20
                  },
                  "start": {
                    "column": 58,
                    "line": 20
                  }
                }
              },
              "range": [
                581,
                586
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 20
                },
                "start": {
                  "column": 58,
                  "line": 20
                }
              }
            },
            "range": [
              548,
              586
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 20
              },
              "start": {
                "column": 25,
                "line": 20
              }
            }
          },
          "range": [
            529,
            586
          ],
          "loc": {
            "end": {
              "column": 63,
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
        523,
        587
      ],
      "loc": {
        "end": {
          "column": 64,
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
            "name": "randomID",
            "optional": false,
            "range": [
              595,
              603
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "'id'",
              "value": "id",
              "range": [
                606,
                610
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                614,
                620
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 22
                },
                "start": {
                  "column": 25,
                  "line": 22
                }
              }
            },
            "range": [
              606,
              620
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 22
              }
            }
          },
          "range": [
            595,
            620
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        589,
        621
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
        "name": "foo",
        "optional": false,
        "range": [
          640,
          643
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 24
          },
          "start": {
            "column": 17,
            "line": 24
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 24
              },
              "start": {
                "column": 34,
                "line": 24
              }
            },
            "range": [
              657,
              660
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  659,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 24
                  },
                  "start": {
                    "column": 36,
                    "line": 24
                  }
                }
              },
              "range": [
                659,
                660
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 24
                },
                "start": {
                  "column": 36,
                  "line": 24
                }
              }
            }
          },
          "range": [
            653,
            660
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 24
            },
            "start": {
              "column": 30,
              "line": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 24
          },
          "start": {
            "column": 38,
            "line": 24
          }
        },
        "range": [
          661,
          664
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              663,
              664
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 24
              },
              "start": {
                "column": 40,
                "line": 24
              }
            }
          },
          "range": [
            663,
            664
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 24
            },
            "start": {
              "column": 40,
              "line": 24
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 24
          },
          "start": {
            "column": 20,
            "line": 24
          }
        },
        "range": [
          643,
          652
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
                650,
                651
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 24
                },
                "start": {
                  "column": 27,
                  "line": 24
                }
              }
            },
            "out": false,
            "range": [
              644,
              651
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 24
              },
              "start": {
                "column": 21,
                "line": 24
              }
            }
          }
        ]
      },
      "range": [
        623,
        665
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "a1",
            "optional": false,
            "range": [
              673,
              675
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "range": [
                        686,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 26
                        },
                        "start": {
                          "column": 19,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      683,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      704,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 26
                      },
                      "start": {
                        "column": 37,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      714,
                      723
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 26
                      },
                      "start": {
                        "column": 47,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  682,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              "name": "foo",
              "optional": false,
              "range": [
                678,
                681
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "optional": false,
            "range": [
              678,
              725
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          },
          "range": [
            673,
            725
          ],
          "loc": {
            "end": {
              "column": 58,
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
        667,
        726
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "a2",
            "optional": false,
            "range": [
              733,
              735
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "range": [
                        746,
                        762
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 27
                        },
                        "start": {
                          "column": 19,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      743,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      764,
                      772
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 27
                      },
                      "start": {
                        "column": 37,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      774,
                      783
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 27
                      },
                      "start": {
                        "column": 47,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  742,
                  784
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 27
                  },
                  "start": {
                    "column": 15,
                    "line": 27
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
                738,
                741
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "optional": false,
            "range": [
              738,
              785
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 27
              },
              "start": {
                "column": 11,
                "line": 27
              }
            }
          },
          "range": [
            733,
            785
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        727,
        786
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "a3",
            "optional": false,
            "range": [
              793,
              795
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "range": [
                        806,
                        822
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 28
                        },
                        "start": {
                          "column": 19,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      803,
                      822
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 28
                      },
                      "start": {
                        "column": 16,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      824,
                      832
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 28
                      },
                      "start": {
                        "column": 37,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      834,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 28
                      },
                      "start": {
                        "column": 47,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  802,
                  844
                ],
                "loc": {
                  "end": {
                    "column": 57,
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
              "name": "foo",
              "optional": false,
              "range": [
                798,
                801
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 11,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              798,
              845
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          },
          "range": [
            793,
            845
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        787,
        846
      ],
      "loc": {
        "end": {
          "column": 59,
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
            "name": "b1",
            "optional": false,
            "range": [
              854,
              856
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "range": [
                        867,
                        883
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      864,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 30
                      },
                      "start": {
                        "column": 16,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      885,
                      893
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 30
                      },
                      "start": {
                        "column": 37,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      895,
                      903
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 30
                      },
                      "start": {
                        "column": 47,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      905,
                      914
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 30
                      },
                      "start": {
                        "column": 57,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  863,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 67,
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
              "name": "foo",
              "optional": false,
              "range": [
                859,
                862
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "optional": false,
            "range": [
              859,
              916
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 30
              },
              "start": {
                "column": 11,
                "line": 30
              }
            }
          },
          "range": [
            854,
            916
          ],
          "loc": {
            "end": {
              "column": 68,
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
        848,
        917
      ],
      "loc": {
        "end": {
          "column": 69,
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
            "name": "b2",
            "optional": false,
            "range": [
              924,
              926
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "range": [
                        937,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      934,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 31
                      },
                      "start": {
                        "column": 16,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      955,
                      963
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 31
                      },
                      "start": {
                        "column": 37,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      965,
                      973
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 31
                      },
                      "start": {
                        "column": 47,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      975,
                      984
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 31
                      },
                      "start": {
                        "column": 57,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  933,
                  985
                ],
                "loc": {
                  "end": {
                    "column": 67,
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
              "name": "foo",
              "optional": false,
              "range": [
                929,
                932
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              929,
              986
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          },
          "range": [
            924,
            986
          ],
          "loc": {
            "end": {
              "column": 68,
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
        918,
        987
      ],
      "loc": {
        "end": {
          "column": 69,
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
            "name": "b3",
            "optional": false,
            "range": [
              994,
              996
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "range": [
                        1007,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 32
                        },
                        "start": {
                          "column": 19,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      1004,
                      1023
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 16,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1025,
                      1033
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 32
                      },
                      "start": {
                        "column": 37,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1035,
                      1043
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 32
                      },
                      "start": {
                        "column": 47,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1045,
                      1054
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 32
                      },
                      "start": {
                        "column": 57,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  1003,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
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
                999,
                1002
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "optional": false,
            "range": [
              999,
              1056
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 32
              },
              "start": {
                "column": 11,
                "line": 32
              }
            }
          },
          "range": [
            994,
            1056
          ],
          "loc": {
            "end": {
              "column": 68,
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
        988,
        1057
      ],
      "loc": {
        "end": {
          "column": 69,
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
            "name": "c1",
            "optional": false,
            "range": [
              1065,
              1067
            ],
            "loc": {
              "end": {
                "column": 8,
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
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "range": [
                        1078,
                        1094
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 34
                        },
                        "start": {
                          "column": 19,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      1075,
                      1094
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 16,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1096,
                      1104
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 34
                      },
                      "start": {
                        "column": 37,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1106,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 34
                      },
                      "start": {
                        "column": 47,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1116,
                      1127
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 34
                      },
                      "start": {
                        "column": 57,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1129,
                      1138
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 34
                      },
                      "start": {
                        "column": 70,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  1074,
                  1139
                ],
                "loc": {
                  "end": {
                    "column": 80,
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
              "name": "foo",
              "optional": false,
              "range": [
                1070,
                1073
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 11,
                  "line": 34
                }
              }
            },
            "optional": false,
            "range": [
              1070,
              1140
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 34
              },
              "start": {
                "column": 11,
                "line": 34
              }
            }
          },
          "range": [
            1065,
            1140
          ],
          "loc": {
            "end": {
              "column": 81,
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
        1059,
        1141
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "c2",
            "optional": false,
            "range": [
              1148,
              1150
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "range": [
                        1161,
                        1177
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      1158,
                      1177
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 35
                      },
                      "start": {
                        "column": 16,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1179,
                      1187
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 35
                      },
                      "start": {
                        "column": 37,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1189,
                      1197
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 35
                      },
                      "start": {
                        "column": 47,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1199,
                      1210
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 35
                      },
                      "start": {
                        "column": 57,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1212,
                      1221
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 35
                      },
                      "start": {
                        "column": 70,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  1157,
                  1222
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 35
                  },
                  "start": {
                    "column": 15,
                    "line": 35
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
                1153,
                1156
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              1153,
              1223
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            }
          },
          "range": [
            1148,
            1223
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1142,
        1224
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "c3",
            "optional": false,
            "range": [
              1231,
              1233
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "range": [
                        1244,
                        1260
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 36
                        },
                        "start": {
                          "column": 19,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1241,
                      1260
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 36
                      },
                      "start": {
                        "column": 16,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1262,
                      1270
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 36
                      },
                      "start": {
                        "column": 37,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1272,
                      1280
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 36
                      },
                      "start": {
                        "column": 47,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1282,
                      1293
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 36
                      },
                      "start": {
                        "column": 57,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1295,
                      1304
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 36
                      },
                      "start": {
                        "column": 70,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  1240,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
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
                1236,
                1239
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 36
                },
                "start": {
                  "column": 11,
                  "line": 36
                }
              }
            },
            "optional": false,
            "range": [
              1236,
              1306
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 36
              },
              "start": {
                "column": 11,
                "line": 36
              }
            }
          },
          "range": [
            1231,
            1306
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1225,
        1307
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 36
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
            "name": "d1",
            "optional": false,
            "range": [
              1315,
              1317
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "range": [
                        1328,
                        1344
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 38
                        },
                        "start": {
                          "column": 19,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1325,
                      1344
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 38
                      },
                      "start": {
                        "column": 16,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1346,
                      1354
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 38
                      },
                      "start": {
                        "column": 37,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1356,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 38
                      },
                      "start": {
                        "column": 47,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1366,
                      1377
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 38
                      },
                      "start": {
                        "column": 57,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'another-subfolder'",
                    "value": "another-subfolder",
                    "range": [
                      1379,
                      1398
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 38
                      },
                      "start": {
                        "column": 70,
                        "line": 38
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1400,
                      1409
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 38
                      },
                      "start": {
                        "column": 91,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  1324,
                  1410
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 38
                  },
                  "start": {
                    "column": 15,
                    "line": 38
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
                1320,
                1323
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "optional": false,
            "range": [
              1320,
              1411
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 38
              },
              "start": {
                "column": 11,
                "line": 38
              }
            }
          },
          "range": [
            1315,
            1411
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 38
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1309,
        1412
      ],
      "loc": {
        "end": {
          "column": 103,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "d2",
            "optional": false,
            "range": [
              1419,
              1421
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "range": [
                        1432,
                        1448
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 39
                        },
                        "start": {
                          "column": 19,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1429,
                      1448
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 16,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1450,
                      1458
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 39
                      },
                      "start": {
                        "column": 37,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1460,
                      1468
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 39
                      },
                      "start": {
                        "column": 47,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1470,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 39
                      },
                      "start": {
                        "column": 57,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'another-subfolder'",
                    "value": "another-subfolder",
                    "range": [
                      1483,
                      1502
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 39
                      },
                      "start": {
                        "column": 70,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1504,
                      1513
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 39
                      },
                      "start": {
                        "column": 91,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  1428,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 39
                  },
                  "start": {
                    "column": 15,
                    "line": 39
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
                1424,
                1427
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              1424,
              1515
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 39
              },
              "start": {
                "column": 11,
                "line": 39
              }
            }
          },
          "range": [
            1419,
            1515
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1413,
        1516
      ],
      "loc": {
        "end": {
          "column": 103,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "d3",
            "optional": false,
            "range": [
              1523,
              1525
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
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
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "range": [
                        1536,
                        1552
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 40
                        },
                        "start": {
                          "column": 19,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1533,
                      1552
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 40
                      },
                      "start": {
                        "column": 16,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "range": [
                      1554,
                      1562
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 40
                      },
                      "start": {
                        "column": 37,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'folder'",
                    "value": "folder",
                    "range": [
                      1564,
                      1572
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 40
                      },
                      "start": {
                        "column": 47,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'subfolder'",
                    "value": "subfolder",
                    "range": [
                      1574,
                      1585
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 40
                      },
                      "start": {
                        "column": 57,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'another-subfolder'",
                    "value": "another-subfolder",
                    "range": [
                      1587,
                      1606
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 40
                      },
                      "start": {
                        "column": 70,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "'doc.pdf'",
                    "value": "doc.pdf",
                    "range": [
                      1608,
                      1617
                    ],
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 40
                      },
                      "start": {
                        "column": 91,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  1532,
                  1618
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 40
                  },
                  "start": {
                    "column": 15,
                    "line": 40
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
                1528,
                1531
              ],
              "loc": {
                "end": {
                  "column": 14,
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
              1528,
              1619
            ],
            "loc": {
              "end": {
                "column": 102,
                "line": 40
              },
              "start": {
                "column": 11,
                "line": 40
              }
            }
          },
          "range": [
            1523,
            1619
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1517,
        1620
      ],
      "loc": {
        "end": {
          "column": 103,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
