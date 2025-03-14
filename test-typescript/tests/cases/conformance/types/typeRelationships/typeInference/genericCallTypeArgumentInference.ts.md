__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    64,
    1625
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
              "name": "t",
              "optional": false,
              "range": [
                99,
                100
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              92,
              101
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          86,
          103
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
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
          73,
          76
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
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              81,
              84
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  83,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                83,
                84
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            80,
            84
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          76,
          79
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
                77,
                78
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
              77,
              78
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
          }
        ]
      },
      "range": [
        64,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "r",
            "optional": false,
            "range": [
              109,
              110
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  117,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
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
                113,
                116
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              113,
              120
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          },
          "range": [
            109,
            120
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        105,
        121
      ],
      "loc": {
        "end": {
          "column": 16,
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
              "name": "u",
              "optional": false,
              "range": [
                178,
                179
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              171,
              180
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          165,
          182
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 32,
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
          142,
          146
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
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            },
            "range": [
              154,
              157
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  156,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 9
                  }
                }
              },
              "range": [
                156,
                157
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 23,
                  "line": 9
                }
              }
            }
          },
          "range": [
            153,
            157
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 27,
                "line": 9
              }
            },
            "range": [
              160,
              163
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  162,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              "range": [
                162,
                163
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 29,
                  "line": 9
                }
              }
            }
          },
          "range": [
            159,
            163
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 13,
            "line": 9
          }
        },
        "range": [
          146,
          152
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
                147,
                148
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
              147,
              148
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
                150,
                151
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
            "out": false,
            "range": [
              150,
              151
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
          }
        ]
      },
      "range": [
        133,
        182
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      222,
                      225
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          224,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 14
                          },
                          "start": {
                            "column": 11,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        224,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    221,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": null,
                "range": [
                  221,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              217,
              226
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                238,
                239
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              231,
              240
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          211,
          242
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 27,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2b",
        "optional": false,
        "range": [
          193,
          198
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
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
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            },
            "range": [
              206,
              209
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 24,
                    "line": 13
                  }
                }
              },
              "range": [
                208,
                209
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            }
          },
          "range": [
            205,
            209
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          198,
          204
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
                199,
                200
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              199,
              200
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
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
                202,
                203
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              202,
              203
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 18,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        184,
        242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "name": "r2",
            "optional": false,
            "range": [
              248,
              250
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  258,
                  260
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
                    "line": 18
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  262,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
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
                253,
                257
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "optional": false,
            "range": [
              253,
              264
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          "range": [
            248,
            264
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        244,
        265
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "r3",
            "optional": false,
            "range": [
              280,
              282
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  291,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2b",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "optional": false,
            "range": [
              285,
              293
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 19
              },
              "start": {
                "column": 9,
                "line": 19
              }
            }
          },
          "range": [
            280,
            293
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        276,
        294
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          316,
          809
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                322,
                333
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                333,
                367
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  360,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 42,
                    "line": 22
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 22
                        },
                        "start": {
                          "column": 24,
                          "line": 22
                        }
                      },
                      "range": [
                        342,
                        345
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            344,
                            345
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 22
                            },
                            "start": {
                              "column": 26,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          344,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 22
                          },
                          "start": {
                            "column": 26,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      341,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    334,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 22
                        },
                        "start": {
                          "column": 37,
                          "line": 22
                        }
                      },
                      "range": [
                        355,
                        358
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            357,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 22
                            },
                            "start": {
                              "column": 39,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          357,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 22
                          },
                          "start": {
                            "column": 39,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      354,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 36,
                        "line": 22
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    347,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 22
                    },
                    "start": {
                      "column": 29,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            },
            "range": [
              322,
              367
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 22
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
                373,
                376
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                376,
                414
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        406,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 26
                        },
                        "start": {
                          "column": 15,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      399,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  389,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 20,
                    "line": 25
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      378,
                      381
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          380,
                          381
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 25
                          },
                          "start": {
                            "column": 11,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        380,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    377,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    },
                    "range": [
                      384,
                      387
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          386,
                          387
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
                      "range": [
                        386,
                        387
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
                    }
                  },
                  "range": [
                    383,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 25
                    },
                    "start": {
                      "column": 14,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 7,
                  "line": 25
                }
              }
            },
            "range": [
              373,
              414
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 25
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
              "name": "foo2",
              "optional": false,
              "range": [
                420,
                424
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
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
                424,
                462
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
                      "name": "u",
                      "optional": false,
                      "range": [
                        454,
                        455
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
                    "range": [
                      447,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  437,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 21,
                    "line": 29
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 29
                      },
                      "start": {
                        "column": 10,
                        "line": 29
                      }
                    },
                    "range": [
                      426,
                      429
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          428,
                          429
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
                      },
                      "range": [
                        428,
                        429
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
                  },
                  "range": [
                    425,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 29
                    },
                    "start": {
                      "column": 9,
                      "line": 29
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 16,
                        "line": 29
                      }
                    },
                    "range": [
                      432,
                      435
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          434,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 18,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        434,
                        435
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 18,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    431,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 15,
                      "line": 29
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "range": [
              420,
              462
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
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
              "name": "foo3",
              "optional": false,
              "range": [
                468,
                472
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                472,
                513
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      498,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  488,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 24,
                    "line": 33
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 13,
                        "line": 33
                      }
                    },
                    "range": [
                      477,
                      480
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          479,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 33
                          },
                          "start": {
                            "column": 15,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        479,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 33
                        },
                        "start": {
                          "column": 15,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    476,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    },
                    "range": [
                      483,
                      486
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          485,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        485,
                        486
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 21,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    482,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 18,
                      "line": 33
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                },
                "range": [
                  472,
                  475
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
                        473,
                        474
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
                    "out": false,
                    "range": [
                      473,
                      474
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
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              468,
              513
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 33
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
              "name": "foo4",
              "optional": false,
              "range": [
                519,
                523
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                523,
                564
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        556,
                        557
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 38
                        },
                        "start": {
                          "column": 15,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      549,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  539,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 24,
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 37
                      },
                      "start": {
                        "column": 13,
                        "line": 37
                      }
                    },
                    "range": [
                      528,
                      531
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          530,
                          531
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 37
                          },
                          "start": {
                            "column": 15,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        530,
                        531
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 37
                        },
                        "start": {
                          "column": 15,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    527,
                    531
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 37
                      },
                      "start": {
                        "column": 19,
                        "line": 37
                      }
                    },
                    "range": [
                      534,
                      537
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          536,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 37
                          },
                          "start": {
                            "column": 21,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        536,
                        537
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 37
                        },
                        "start": {
                          "column": 21,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    533,
                    537
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 37
                    },
                    "start": {
                      "column": 18,
                      "line": 37
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                },
                "range": [
                  523,
                  526
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
                        524,
                        525
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
                    "out": false,
                    "range": [
                      524,
                      525
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
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "range": [
              519,
              564
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
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
              "name": "foo5",
              "optional": false,
              "range": [
                570,
                574
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
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
                574,
                617
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        609,
                        610
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 42
                        },
                        "start": {
                          "column": 15,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      602,
                      611
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  592,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 26,
                    "line": 41
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 41
                      },
                      "start": {
                        "column": 15,
                        "line": 41
                      }
                    },
                    "range": [
                      581,
                      584
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          583,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 41
                          },
                          "start": {
                            "column": 17,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        583,
                        584
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 41
                        },
                        "start": {
                          "column": 17,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    580,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 41
                      },
                      "start": {
                        "column": 21,
                        "line": 41
                      }
                    },
                    "range": [
                      587,
                      590
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          589,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 41
                          },
                          "start": {
                            "column": 23,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        589,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 41
                        },
                        "start": {
                          "column": 23,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    586,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 41
                    },
                    "start": {
                      "column": 20,
                      "line": 41
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                },
                "range": [
                  574,
                  579
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
                        575,
                        576
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
                    "out": false,
                    "range": [
                      575,
                      576
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
                        577,
                        578
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      577,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 41
                      },
                      "start": {
                        "column": 11,
                        "line": 41
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 8,
                  "line": 41
                }
              }
            },
            "range": [
              570,
              617
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 41
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
              "name": "foo6",
              "optional": false,
              "range": [
                623,
                627
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
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
                627,
                679
              ],
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 46
                              },
                              "start": {
                                "column": 13,
                                "line": 46
                              }
                            },
                            "range": [
                              651,
                              654
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  653,
                                  654
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                653,
                                654
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 46
                                },
                                "start": {
                                  "column": 15,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "range": [
                            650,
                            654
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 46
                            },
                            "start": {
                              "column": 12,
                              "line": 46
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          650,
                          654
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      646,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 46
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
                        671,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 47
                        },
                        "start": {
                          "column": 15,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      664,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  636,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
                    "line": 45
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                },
                "range": [
                  627,
                  633
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
                        628,
                        629
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
                    "out": false,
                    "range": [
                      628,
                      629
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
                        631,
                        632
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      631,
                      632
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 45
                      },
                      "start": {
                        "column": 12,
                        "line": 45
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 8,
                  "line": 45
                }
              }
            },
            "range": [
              623,
              679
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 45
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
              "name": "foo7",
              "optional": false,
              "range": [
                685,
                689
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
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
                689,
                745
              ],
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 51
                              },
                              "start": {
                                "column": 13,
                                "line": 51
                              }
                            },
                            "range": [
                              717,
                              720
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  719,
                                  720
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 51
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 51
                                  }
                                }
                              },
                              "range": [
                                719,
                                720
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 51
                                },
                                "start": {
                                  "column": 15,
                                  "line": 51
                                }
                              }
                            }
                          },
                          "range": [
                            716,
                            720
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 51
                            },
                            "start": {
                              "column": 12,
                              "line": 51
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          716,
                          720
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      712,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                        737,
                        738
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 52
                        },
                        "start": {
                          "column": 15,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      730,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  }
                ],
                "range": [
                  702,
                  745
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 21,
                    "line": 50
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
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 50
                      },
                      "start": {
                        "column": 16,
                        "line": 50
                      }
                    },
                    "range": [
                      697,
                      700
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          699,
                          700
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 50
                          },
                          "start": {
                            "column": 18,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        699,
                        700
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 50
                        },
                        "start": {
                          "column": 18,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    696,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                },
                "range": [
                  689,
                  695
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
                        690,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 50
                        },
                        "start": {
                          "column": 9,
                          "line": 50
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      690,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 50
                      },
                      "start": {
                        "column": 9,
                        "line": 50
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
                        693,
                        694
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 50
                        },
                        "start": {
                          "column": 12,
                          "line": 50
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      693,
                      694
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 50
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              685,
              745
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 50
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
              "name": "foo8",
              "optional": false,
              "range": [
                751,
                755
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
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
                755,
                807
              ],
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 56
                              },
                              "start": {
                                "column": 13,
                                "line": 56
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
                                "name": "T",
                                "optional": false,
                                "range": [
                                  781,
                                  782
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                781,
                                782
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 56
                                },
                                "start": {
                                  "column": 15,
                                  "line": 56
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
                              "column": 16,
                              "line": 56
                            },
                            "start": {
                              "column": 12,
                              "line": 56
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          778,
                          782
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      774,
                      783
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
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
                        799,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 57
                        },
                        "start": {
                          "column": 15,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      792,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  764,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 58
                  },
                  "start": {
                    "column": 17,
                    "line": 55
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                },
                "range": [
                  755,
                  761
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
                        756,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 55
                        },
                        "start": {
                          "column": 9,
                          "line": 55
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      756,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 55
                      },
                      "start": {
                        "column": 9,
                        "line": 55
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
                        759,
                        760
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
                    "out": false,
                    "range": [
                      759,
                      760
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
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 8,
                  "line": 55
                }
              }
            },
            "range": [
              751,
              807
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 14,
            "line": 21
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
          308,
          309
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
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        },
        "range": [
          309,
          315
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
                310,
                311
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
              310,
              311
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
                313,
                314
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              313,
              314
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        302,
        809
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
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
            "name": "c",
            "optional": false,
            "range": [
              815,
              816
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
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  825,
                  827
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 61
                  },
                  "start": {
                    "column": 14,
                    "line": 61
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  829,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 61
                  },
                  "start": {
                    "column": 18,
                    "line": 61
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                823,
                824
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 61
                },
                "start": {
                  "column": 12,
                  "line": 61
                }
              }
            },
            "range": [
              819,
              831
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 61
              },
              "start": {
                "column": 8,
                "line": 61
              }
            }
          },
          "range": [
            815,
            831
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 61
            },
            "start": {
              "column": 4,
              "line": 61
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        811,
        832
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "r4",
            "optional": false,
            "range": [
              837,
              839
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  848,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 62
                  },
                  "start": {
                    "column": 15,
                    "line": 62
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  852,
                  853
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 62
                  },
                  "start": {
                    "column": 19,
                    "line": 62
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
                "name": "c",
                "optional": false,
                "range": [
                  842,
                  843
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 62
                  },
                  "start": {
                    "column": 9,
                    "line": 62
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
                  844,
                  847
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                }
              },
              "range": [
                842,
                847
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 62
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "optional": false,
            "range": [
              842,
              854
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 62
              },
              "start": {
                "column": 9,
                "line": 62
              }
            }
          },
          "range": [
            837,
            854
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 62
            },
            "start": {
              "column": 4,
              "line": 62
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        833,
        855
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 62
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
            "name": "r5",
            "optional": false,
            "range": [
              870,
              872
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  882,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 63
                  },
                  "start": {
                    "column": 16,
                    "line": 63
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  886,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 63
                  },
                  "start": {
                    "column": 20,
                    "line": 63
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
                "name": "c",
                "optional": false,
                "range": [
                  875,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 63
                  },
                  "start": {
                    "column": 9,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "range": [
                  877,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 11,
                    "line": 63
                  }
                }
              },
              "range": [
                875,
                881
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 63
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              }
            },
            "optional": false,
            "range": [
              875,
              888
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 63
              },
              "start": {
                "column": 9,
                "line": 63
              }
            }
          },
          "range": [
            870,
            888
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 63
            },
            "start": {
              "column": 4,
              "line": 63
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        866,
        889
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 63
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
              904,
              906
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
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
                  916,
                  920
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 64
                  },
                  "start": {
                    "column": 16,
                    "line": 64
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  922,
                  923
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 64
                  },
                  "start": {
                    "column": 22,
                    "line": 64
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
                "name": "c",
                "optional": false,
                "range": [
                  909,
                  910
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 64
                  },
                  "start": {
                    "column": 9,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "range": [
                  911,
                  915
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 64
                  },
                  "start": {
                    "column": 11,
                    "line": 64
                  }
                }
              },
              "range": [
                909,
                915
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 64
                },
                "start": {
                  "column": 9,
                  "line": 64
                }
              }
            },
            "optional": false,
            "range": [
              909,
              924
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 64
              },
              "start": {
                "column": 9,
                "line": 64
              }
            }
          },
          "range": [
            904,
            924
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 64
            },
            "start": {
              "column": 4,
              "line": 64
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        900,
        925
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
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
              941,
              943
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  953,
                  955
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 65
                  },
                  "start": {
                    "column": 16,
                    "line": 65
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  957,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 65
                  },
                  "start": {
                    "column": 20,
                    "line": 65
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
                "name": "c",
                "optional": false,
                "range": [
                  946,
                  947
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 65
                  },
                  "start": {
                    "column": 9,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "range": [
                  948,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "range": [
                946,
                952
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "optional": false,
            "range": [
              946,
              962
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 65
              },
              "start": {
                "column": 9,
                "line": 65
              }
            }
          },
          "range": [
            941,
            962
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 65
            },
            "start": {
              "column": 4,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        937,
        963
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 65
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
              978,
              980
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
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
                  990,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 66
                  },
                  "start": {
                    "column": 16,
                    "line": 66
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  996,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 66
                  },
                  "start": {
                    "column": 22,
                    "line": 66
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
                "name": "c",
                "optional": false,
                "range": [
                  983,
                  984
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 66
                  },
                  "start": {
                    "column": 9,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "range": [
                  985,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 66
                  },
                  "start": {
                    "column": 11,
                    "line": 66
                  }
                }
              },
              "range": [
                983,
                989
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 9,
                  "line": 66
                }
              }
            },
            "optional": false,
            "range": [
              983,
              998
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 66
              },
              "start": {
                "column": 9,
                "line": 66
              }
            }
          },
          "range": [
            978,
            998
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 66
            },
            "start": {
              "column": 4,
              "line": 66
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        974,
        999
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "r9",
            "optional": false,
            "range": [
              1015,
              1017
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1020,
                  1021
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 67
                  },
                  "start": {
                    "column": 9,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "range": [
                  1022,
                  1026
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 67
                  },
                  "start": {
                    "column": 11,
                    "line": 67
                  }
                }
              },
              "range": [
                1020,
                1026
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 67
                },
                "start": {
                  "column": 9,
                  "line": 67
                }
              }
            },
            "optional": false,
            "range": [
              1020,
              1028
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 67
              },
              "start": {
                "column": 9,
                "line": 67
              }
            }
          },
          "range": [
            1015,
            1028
          ],
          "loc": {
            "end": {
              "column": 17,
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
      "kind": "var",
      "range": [
        1011,
        1029
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "r10",
            "optional": false,
            "range": [
              1040,
              1043
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1053,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 68
                  },
                  "start": {
                    "column": 17,
                    "line": 68
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
                "name": "c",
                "optional": false,
                "range": [
                  1046,
                  1047
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "range": [
                  1048,
                  1052
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 68
                  },
                  "start": {
                    "column": 12,
                    "line": 68
                  }
                }
              },
              "range": [
                1046,
                1052
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 68
                },
                "start": {
                  "column": 10,
                  "line": 68
                }
              }
            },
            "optional": false,
            "range": [
              1046,
              1056
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 68
              },
              "start": {
                "column": 10,
                "line": 68
              }
            }
          },
          "range": [
            1040,
            1056
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 68
            },
            "start": {
              "column": 4,
              "line": 68
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1036,
        1057
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
              1068,
              1071
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "range": [
                  1074,
                  1075
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 69
                  },
                  "start": {
                    "column": 10,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "range": [
                  1076,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 69
                  },
                  "start": {
                    "column": 12,
                    "line": 69
                  }
                }
              },
              "range": [
                1074,
                1080
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 69
                },
                "start": {
                  "column": 10,
                  "line": 69
                }
              }
            },
            "optional": false,
            "range": [
              1074,
              1082
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 69
              },
              "start": {
                "column": 10,
                "line": 69
              }
            }
          },
          "range": [
            1068,
            1082
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1064,
        1083
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1109,
          1341
        ],
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "column": 13,
                      "line": 72
                    },
                    "start": {
                      "column": 10,
                      "line": 72
                    }
                  },
                  "range": [
                    1121,
                    1124
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1123,
                        1124
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 72
                        },
                        "start": {
                          "column": 12,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1123,
                      1124
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 12,
                        "line": 72
                      }
                    }
                  }
                },
                "range": [
                  1120,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 72
                  },
                  "start": {
                    "column": 9,
                    "line": 72
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
                    }
                  },
                  "range": [
                    1127,
                    1130
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1129,
                        1130
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 72
                        },
                        "start": {
                          "column": 18,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1129,
                      1130
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 72
                      },
                      "start": {
                        "column": 18,
                        "line": 72
                      }
                    }
                  }
                },
                "range": [
                  1126,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 72
                  },
                  "start": {
                    "column": 15,
                    "line": 72
                  }
                }
              }
            ],
            "range": [
              1115,
              1132
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1137,
                1140
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 12,
                      "line": 73
                    },
                    "start": {
                      "column": 9,
                      "line": 73
                    }
                  },
                  "range": [
                    1142,
                    1145
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1144,
                        1145
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1144,
                      1145
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 73
                      },
                      "start": {
                        "column": 11,
                        "line": 73
                      }
                    }
                  }
                },
                "range": [
                  1141,
                  1145
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 73
                    },
                    "start": {
                      "column": 15,
                      "line": 73
                    }
                  },
                  "range": [
                    1148,
                    1151
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1150,
                        1151
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 73
                        },
                        "start": {
                          "column": 17,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1150,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  1147,
                  1151
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 73
                  },
                  "start": {
                    "column": 14,
                    "line": 73
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 73
                },
                "start": {
                  "column": 19,
                  "line": 73
                }
              },
              "range": [
                1152,
                1155
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1154,
                    1155
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 73
                    },
                    "start": {
                      "column": 21,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1154,
                  1155
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 73
                  },
                  "start": {
                    "column": 21,
                    "line": 73
                  }
                }
              }
            },
            "static": false,
            "range": [
              1137,
              1156
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                1161,
                1165
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 13,
                      "line": 74
                    },
                    "start": {
                      "column": 10,
                      "line": 74
                    }
                  },
                  "range": [
                    1167,
                    1170
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1169,
                        1170
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 74
                        },
                        "start": {
                          "column": 12,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1169,
                      1170
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 74
                      },
                      "start": {
                        "column": 12,
                        "line": 74
                      }
                    }
                  }
                },
                "range": [
                  1166,
                  1170
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 74
                  },
                  "start": {
                    "column": 9,
                    "line": 74
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 74
                    },
                    "start": {
                      "column": 16,
                      "line": 74
                    }
                  },
                  "range": [
                    1173,
                    1176
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1175,
                        1176
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 74
                        },
                        "start": {
                          "column": 18,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1175,
                      1176
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 74
                      },
                      "start": {
                        "column": 18,
                        "line": 74
                      }
                    }
                  }
                },
                "range": [
                  1172,
                  1176
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 74
                  },
                  "start": {
                    "column": 15,
                    "line": 74
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
                  "line": 74
                },
                "start": {
                  "column": 20,
                  "line": 74
                }
              },
              "range": [
                1177,
                1180
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    1179,
                    1180
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 74
                    },
                    "start": {
                      "column": 22,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1179,
                  1180
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 74
                  },
                  "start": {
                    "column": 22,
                    "line": 74
                  }
                }
              }
            },
            "static": false,
            "range": [
              1161,
              1181
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "range": [
                1186,
                1190
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 16,
                      "line": 75
                    },
                    "start": {
                      "column": 13,
                      "line": 75
                    }
                  },
                  "range": [
                    1195,
                    1198
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1197,
                        1198
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 75
                        },
                        "start": {
                          "column": 15,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1197,
                      1198
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 75
                      },
                      "start": {
                        "column": 15,
                        "line": 75
                      }
                    }
                  }
                },
                "range": [
                  1194,
                  1198
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 75
                  },
                  "start": {
                    "column": 12,
                    "line": 75
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 75
                    },
                    "start": {
                      "column": 19,
                      "line": 75
                    }
                  },
                  "range": [
                    1201,
                    1204
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1203,
                        1204
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 75
                        },
                        "start": {
                          "column": 21,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1203,
                      1204
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 75
                      },
                      "start": {
                        "column": 21,
                        "line": 75
                      }
                    }
                  }
                },
                "range": [
                  1200,
                  1204
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 75
                  },
                  "start": {
                    "column": 18,
                    "line": 75
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 75
                },
                "start": {
                  "column": 23,
                  "line": 75
                }
              },
              "range": [
                1205,
                1208
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1207,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 75
                    },
                    "start": {
                      "column": 25,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1207,
                  1208
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 75
                  },
                  "start": {
                    "column": 25,
                    "line": 75
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 75
                },
                "start": {
                  "column": 8,
                  "line": 75
                }
              },
              "range": [
                1190,
                1193
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
                      1191,
                      1192
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 75
                      },
                      "start": {
                        "column": 9,
                        "line": 75
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1191,
                    1192
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 75
                    },
                    "start": {
                      "column": 9,
                      "line": 75
                    }
                  }
                }
              ]
            },
            "range": [
              1186,
              1209
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "range": [
                1214,
                1218
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 16,
                      "line": 76
                    },
                    "start": {
                      "column": 13,
                      "line": 76
                    }
                  },
                  "range": [
                    1223,
                    1226
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1225,
                        1226
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 76
                        },
                        "start": {
                          "column": 15,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1225,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 76
                      },
                      "start": {
                        "column": 15,
                        "line": 76
                      }
                    }
                  }
                },
                "range": [
                  1222,
                  1226
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 76
                  },
                  "start": {
                    "column": 12,
                    "line": 76
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 76
                    },
                    "start": {
                      "column": 19,
                      "line": 76
                    }
                  },
                  "range": [
                    1229,
                    1232
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1231,
                        1232
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 76
                        },
                        "start": {
                          "column": 21,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1231,
                      1232
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 76
                      },
                      "start": {
                        "column": 21,
                        "line": 76
                      }
                    }
                  }
                },
                "range": [
                  1228,
                  1232
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 76
                  },
                  "start": {
                    "column": 18,
                    "line": 76
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 76
                },
                "start": {
                  "column": 23,
                  "line": 76
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
                      "line": 76
                    },
                    "start": {
                      "column": 25,
                      "line": 76
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
                    "line": 76
                  },
                  "start": {
                    "column": 25,
                    "line": 76
                  }
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 76
                },
                "start": {
                  "column": 8,
                  "line": 76
                }
              },
              "range": [
                1218,
                1221
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
                      1219,
                      1220
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 76
                      },
                      "start": {
                        "column": 9,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1219,
                    1220
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 76
                    },
                    "start": {
                      "column": 9,
                      "line": 76
                    }
                  }
                }
              ]
            },
            "range": [
              1214,
              1237
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "range": [
                1242,
                1246
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 19,
                      "line": 77
                    },
                    "start": {
                      "column": 16,
                      "line": 77
                    }
                  },
                  "range": [
                    1254,
                    1257
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1256,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 77
                        },
                        "start": {
                          "column": 18,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1256,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 77
                      },
                      "start": {
                        "column": 18,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  1253,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 77
                  },
                  "start": {
                    "column": 15,
                    "line": 77
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 77
                    },
                    "start": {
                      "column": 22,
                      "line": 77
                    }
                  },
                  "range": [
                    1260,
                    1263
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1262,
                        1263
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 77
                        },
                        "start": {
                          "column": 24,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1262,
                      1263
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 77
                      },
                      "start": {
                        "column": 24,
                        "line": 77
                      }
                    }
                  }
                },
                "range": [
                  1259,
                  1263
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 77
                  },
                  "start": {
                    "column": 21,
                    "line": 77
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 77
                },
                "start": {
                  "column": 26,
                  "line": 77
                }
              },
              "range": [
                1264,
                1267
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1266,
                    1267
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 77
                    },
                    "start": {
                      "column": 28,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1266,
                  1267
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 77
                  },
                  "start": {
                    "column": 28,
                    "line": 77
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
                  "line": 77
                },
                "start": {
                  "column": 8,
                  "line": 77
                }
              },
              "range": [
                1246,
                1252
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
                      1247,
                      1248
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 77
                      },
                      "start": {
                        "column": 9,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1247,
                    1248
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 77
                    },
                    "start": {
                      "column": 9,
                      "line": 77
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
                      1250,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 77
                      },
                      "start": {
                        "column": 12,
                        "line": 77
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1250,
                    1251
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 77
                    },
                    "start": {
                      "column": 12,
                      "line": 77
                    }
                  }
                }
              ]
            },
            "range": [
              1242,
              1268
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "range": [
                1273,
                1277
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 78
                },
                "start": {
                  "column": 16,
                  "line": 78
                }
              },
              "range": [
                1285,
                1288
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1287,
                    1288
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 78
                    },
                    "start": {
                      "column": 18,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1287,
                  1288
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 78
                  },
                  "start": {
                    "column": 18,
                    "line": 78
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
                  "line": 78
                },
                "start": {
                  "column": 8,
                  "line": 78
                }
              },
              "range": [
                1277,
                1283
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
                      1278,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 78
                      },
                      "start": {
                        "column": 9,
                        "line": 78
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1278,
                    1279
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 78
                    },
                    "start": {
                      "column": 9,
                      "line": 78
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
                      1281,
                      1282
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 78
                      },
                      "start": {
                        "column": 12,
                        "line": 78
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1281,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 78
                    },
                    "start": {
                      "column": 12,
                      "line": 78
                    }
                  }
                }
              ]
            },
            "range": [
              1273,
              1289
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "range": [
                1294,
                1298
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 19,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
                    }
                  },
                  "range": [
                    1306,
                    1309
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        1308,
                        1309
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 79
                        },
                        "start": {
                          "column": 18,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1308,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 79
                      },
                      "start": {
                        "column": 18,
                        "line": 79
                      }
                    }
                  }
                },
                "range": [
                  1305,
                  1309
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 79
                  },
                  "start": {
                    "column": 15,
                    "line": 79
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
                  "line": 79
                },
                "start": {
                  "column": 20,
                  "line": 79
                }
              },
              "range": [
                1310,
                1313
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1312,
                    1313
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
                "range": [
                  1312,
                  1313
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
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              },
              "range": [
                1298,
                1304
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
                      1299,
                      1300
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 79
                      },
                      "start": {
                        "column": 9,
                        "line": 79
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1299,
                    1300
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 79
                    },
                    "start": {
                      "column": 9,
                      "line": 79
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
                      1302,
                      1303
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 79
                      },
                      "start": {
                        "column": 12,
                        "line": 79
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1302,
                    1303
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 79
                    },
                    "start": {
                      "column": 12,
                      "line": 79
                    }
                  }
                }
              ]
            },
            "range": [
              1294,
              1314
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo8",
              "optional": false,
              "range": [
                1319,
                1323
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 80
                },
                "start": {
                  "column": 16,
                  "line": 80
                }
              },
              "range": [
                1331,
                1334
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1333,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 80
                    },
                    "start": {
                      "column": 18,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1333,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 80
                  },
                  "start": {
                    "column": 18,
                    "line": 80
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
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              },
              "range": [
                1323,
                1329
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
                      1324,
                      1325
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 80
                      },
                      "start": {
                        "column": 9,
                        "line": 80
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1324,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 80
                    },
                    "start": {
                      "column": 9,
                      "line": 80
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
                      1327,
                      1328
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 80
                      },
                      "start": {
                        "column": 12,
                        "line": 80
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1327,
                    1328
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 80
                    },
                    "start": {
                      "column": 12,
                      "line": 80
                    }
                  }
                }
              ]
            },
            "range": [
              1319,
              1335
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 81
          },
          "start": {
            "column": 18,
            "line": 71
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          1101,
          1102
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 71
          },
          "start": {
            "column": 10,
            "line": 71
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 71
          },
          "start": {
            "column": 11,
            "line": 71
          }
        },
        "range": [
          1102,
          1108
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
                1103,
                1104
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1103,
              1104
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 71
              },
              "start": {
                "column": 12,
                "line": 71
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
                1106,
                1107
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 71
                },
                "start": {
                  "column": 15,
                  "line": 71
                }
              }
            },
            "out": false,
            "range": [
              1106,
              1107
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 71
              },
              "start": {
                "column": 15,
                "line": 71
              }
            }
          }
        ]
      },
      "range": [
        1091,
        1341
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 81
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 83
                },
                "start": {
                  "column": 5,
                  "line": 83
                }
              },
              "range": [
                1348,
                1367
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1351,
                    1367
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        1352,
                        1358
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 83
                        },
                        "start": {
                          "column": 9,
                          "line": 83
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        1360,
                        1366
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 83
                        },
                        "start": {
                          "column": 17,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    1350,
                    1351
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 83
                    },
                    "start": {
                      "column": 7,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1350,
                  1367
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 83
                  },
                  "start": {
                    "column": 7,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              1347,
              1367
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          "init": null,
          "range": [
            1347,
            1367
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 83
            },
            "start": {
              "column": 4,
              "line": 83
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1343,
        1368
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "r4",
            "optional": false,
            "range": [
              1373,
              1375
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1384,
                  1386
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 84
                  },
                  "start": {
                    "column": 15,
                    "line": 84
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1388,
                  1389
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 84
                  },
                  "start": {
                    "column": 19,
                    "line": 84
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
                "name": "i",
                "optional": false,
                "range": [
                  1378,
                  1379
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 84
                  },
                  "start": {
                    "column": 9,
                    "line": 84
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
                  1380,
                  1383
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 84
                  },
                  "start": {
                    "column": 11,
                    "line": 84
                  }
                }
              },
              "range": [
                1378,
                1383
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "optional": false,
            "range": [
              1378,
              1390
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 84
              },
              "start": {
                "column": 9,
                "line": 84
              }
            }
          },
          "range": [
            1373,
            1390
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 84
            },
            "start": {
              "column": 4,
              "line": 84
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1369,
        1391
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "name": "r5",
            "optional": false,
            "range": [
              1406,
              1408
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1418,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 85
                  },
                  "start": {
                    "column": 16,
                    "line": 85
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1422,
                  1423
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 85
                  },
                  "start": {
                    "column": 20,
                    "line": 85
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
                "name": "i",
                "optional": false,
                "range": [
                  1411,
                  1412
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 85
                  },
                  "start": {
                    "column": 9,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "range": [
                  1413,
                  1417
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 85
                  },
                  "start": {
                    "column": 11,
                    "line": 85
                  }
                }
              },
              "range": [
                1411,
                1417
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 85
                },
                "start": {
                  "column": 9,
                  "line": 85
                }
              }
            },
            "optional": false,
            "range": [
              1411,
              1424
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 85
              },
              "start": {
                "column": 9,
                "line": 85
              }
            }
          },
          "range": [
            1406,
            1424
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 85
            },
            "start": {
              "column": 4,
              "line": 85
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1402,
        1425
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "r6",
            "optional": false,
            "range": [
              1440,
              1442
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
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
                  1452,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 86
                  },
                  "start": {
                    "column": 16,
                    "line": 86
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1458,
                  1459
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  1445,
                  1446
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 86
                  },
                  "start": {
                    "column": 9,
                    "line": 86
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "range": [
                  1447,
                  1451
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 86
                  },
                  "start": {
                    "column": 11,
                    "line": 86
                  }
                }
              },
              "range": [
                1445,
                1451
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 86
                }
              }
            },
            "optional": false,
            "range": [
              1445,
              1460
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 86
              },
              "start": {
                "column": 9,
                "line": 86
              }
            }
          },
          "range": [
            1440,
            1460
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 86
            },
            "start": {
              "column": 4,
              "line": 86
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1436,
        1461
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
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
              1477,
              1479
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1489,
                  1491
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 87
                  },
                  "start": {
                    "column": 16,
                    "line": 87
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  1493,
                  1497
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 87
                  },
                  "start": {
                    "column": 20,
                    "line": 87
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
                "name": "i",
                "optional": false,
                "range": [
                  1482,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 87
                  },
                  "start": {
                    "column": 9,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "range": [
                  1484,
                  1488
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 87
                  },
                  "start": {
                    "column": 11,
                    "line": 87
                  }
                }
              },
              "range": [
                1482,
                1488
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 87
                },
                "start": {
                  "column": 9,
                  "line": 87
                }
              }
            },
            "optional": false,
            "range": [
              1482,
              1498
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 87
              },
              "start": {
                "column": 9,
                "line": 87
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
              "line": 87
            },
            "start": {
              "column": 4,
              "line": 87
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1473,
        1499
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 87
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
              1514,
              1516
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
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
                  1526,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 88
                  },
                  "start": {
                    "column": 16,
                    "line": 88
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1532,
                  1533
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 88
                  },
                  "start": {
                    "column": 22,
                    "line": 88
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
                "name": "i",
                "optional": false,
                "range": [
                  1519,
                  1520
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 88
                  },
                  "start": {
                    "column": 9,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo5",
                "optional": false,
                "range": [
                  1521,
                  1525
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 88
                  },
                  "start": {
                    "column": 11,
                    "line": 88
                  }
                }
              },
              "range": [
                1519,
                1525
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 88
                },
                "start": {
                  "column": 9,
                  "line": 88
                }
              }
            },
            "optional": false,
            "range": [
              1519,
              1534
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 88
              },
              "start": {
                "column": 9,
                "line": 88
              }
            }
          },
          "range": [
            1514,
            1534
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 88
            },
            "start": {
              "column": 4,
              "line": 88
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1510,
        1535
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
            "name": "r9",
            "optional": false,
            "range": [
              1551,
              1553
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  1556,
                  1557
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 89
                  },
                  "start": {
                    "column": 9,
                    "line": 89
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo6",
                "optional": false,
                "range": [
                  1558,
                  1562
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 89
                  },
                  "start": {
                    "column": 11,
                    "line": 89
                  }
                }
              },
              "range": [
                1556,
                1562
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 89
                },
                "start": {
                  "column": 9,
                  "line": 89
                }
              }
            },
            "optional": false,
            "range": [
              1556,
              1564
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 89
              },
              "start": {
                "column": 9,
                "line": 89
              }
            }
          },
          "range": [
            1551,
            1564
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 89
            },
            "start": {
              "column": 4,
              "line": 89
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1547,
        1565
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
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
            "name": "r10",
            "optional": false,
            "range": [
              1576,
              1579
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  1589,
                  1591
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 90
                  },
                  "start": {
                    "column": 17,
                    "line": 90
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
                "name": "i",
                "optional": false,
                "range": [
                  1582,
                  1583
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 90
                  },
                  "start": {
                    "column": 10,
                    "line": 90
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo7",
                "optional": false,
                "range": [
                  1584,
                  1588
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 90
                  },
                  "start": {
                    "column": 12,
                    "line": 90
                  }
                }
              },
              "range": [
                1582,
                1588
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 90
                },
                "start": {
                  "column": 10,
                  "line": 90
                }
              }
            },
            "optional": false,
            "range": [
              1582,
              1592
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 90
              },
              "start": {
                "column": 10,
                "line": 90
              }
            }
          },
          "range": [
            1576,
            1592
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 90
            },
            "start": {
              "column": 4,
              "line": 90
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1572,
        1593
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "r11",
            "optional": false,
            "range": [
              1604,
              1607
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  1610,
                  1611
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 91
                  },
                  "start": {
                    "column": 10,
                    "line": 91
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo8",
                "optional": false,
                "range": [
                  1612,
                  1616
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 91
                  },
                  "start": {
                    "column": 12,
                    "line": 91
                  }
                }
              },
              "range": [
                1610,
                1616
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 91
                },
                "start": {
                  "column": 10,
                  "line": 91
                }
              }
            },
            "optional": false,
            "range": [
              1610,
              1618
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 91
              },
              "start": {
                "column": 10,
                "line": 91
              }
            }
          },
          "range": [
            1604,
            1618
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 91
            },
            "start": {
              "column": 4,
              "line": 91
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1600,
        1619
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 25,
      "line": 91
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
