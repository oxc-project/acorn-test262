__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    90,
    1728
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          124,
          144
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
                130,
                133
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                133,
                141
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  135,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              130,
              142
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 34,
            "line": 3
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
            "name": "String",
            "optional": false,
            "range": [
              117,
              123
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            }
          },
          "range": [
            117,
            123
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyString",
        "optional": false,
        "range": [
          100,
          108
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        90,
        144
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          154,
          713
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 6,
                      "line": 8
                    }
                  },
                  "range": [
                    162,
                    170
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      164,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  161,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 5,
                    "line": 8
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              },
              "range": [
                171,
                179
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  173,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              160,
              180
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                186,
                197
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                197,
                203
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  200,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
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
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              186,
              203
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                215,
                216
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                216,
                224
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  218,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "value": null,
            "range": [
              215,
              225
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                236,
                237
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                237,
                245
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  239,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "value": null,
            "range": [
              236,
              246
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                260,
                261
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                261,
                271
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  },
                  "range": [
                    266,
                    271
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      269,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  263,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              260,
              271
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"d\"",
              "value": "d",
              "range": [
                285,
                288
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              },
              "range": [
                288,
                296
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  290,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              }
            },
            "value": null,
            "range": [
              285,
              297
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"e\"",
              "value": "e",
              "range": [
                308,
                311
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              },
              "range": [
                311,
                319
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  313,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 16
                  }
                }
              }
            },
            "value": null,
            "range": [
              308,
              320
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "1.0",
              "value": 1,
              "range": [
                334,
                337
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              },
              "range": [
                337,
                345
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  339,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              }
            },
            "value": null,
            "range": [
              334,
              346
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "2.0",
              "value": 2,
              "range": [
                357,
                360
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
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 18
                }
              },
              "range": [
                360,
                368
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  362,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              357,
              369
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"3.0\"",
              "value": "3.0",
              "range": [
                383,
                388
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                  "line": 19
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              },
              "range": [
                388,
                396
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  390,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              }
            },
            "value": null,
            "range": [
              383,
              397
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"4.0\"",
              "value": "4.0",
              "range": [
                408,
                413
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              },
              "range": [
                413,
                421
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  415,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
                  }
                }
              }
            },
            "value": null,
            "range": [
              408,
              422
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                436,
                437
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                437,
                447
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "range": [
                    439,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                },
                "range": [
                  439,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              436,
              448
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "X",
              "optional": false,
              "range": [
                467,
                468
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                468,
                503
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        494,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      487,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  471,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 23
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
                  "column": 9,
                  "line": 23
                }
              }
            },
            "range": [
              463,
              503
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
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
              "name": "X",
              "optional": false,
              "range": [
                512,
                513
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                513,
                520
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  517,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    514,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                }
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
              508,
              520
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
                532,
                535
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                535,
                573
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "''",
                      "value": "",
                      "range": [
                        564,
                        566
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
                    },
                    "range": [
                      557,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  538,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 28
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
                  "line": 30
                },
                "start": {
                  "column": 7,
                  "line": 28
                }
              }
            },
            "range": [
              532,
              573
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sa",
              "optional": false,
              "range": [
                586,
                588
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              },
              "range": [
                588,
                596
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  590,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
                  }
                }
              }
            },
            "value": null,
            "range": [
              579,
              597
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sb",
              "optional": false,
              "range": [
                615,
                617
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 33
                },
                "start": {
                  "column": 13,
                  "line": 33
                }
              },
              "range": [
                617,
                625
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  619,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 15,
                    "line": 33
                  }
                }
              }
            },
            "value": null,
            "range": [
              608,
              626
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 33
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
              "name": "foo",
              "optional": false,
              "range": [
                645,
                648
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                648,
                654
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  651,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 35
                  },
                  "start": {
                    "column": 17,
                    "line": 35
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
                  "column": 20,
                  "line": 35
                },
                "start": {
                  "column": 14,
                  "line": 35
                }
              }
            },
            "range": [
              638,
              654
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
              "name": "X",
              "optional": false,
              "range": [
                676,
                677
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                677,
                711
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        703,
                        704
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
                      696,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  680,
                  711
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 36
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
                  "line": 38
                },
                "start": {
                  "column": 16,
                  "line": 36
                }
              }
            },
            "range": [
              665,
              711
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 36
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
            "column": 8,
            "line": 7
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
          152,
          153
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        146,
        713
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          727,
          1075
        ],
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 42
                    },
                    "start": {
                      "column": 6,
                      "line": 42
                    }
                  },
                  "range": [
                    735,
                    743
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      737,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
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
                    "column": 14,
                    "line": 42
                  },
                  "start": {
                    "column": 5,
                    "line": 42
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 42
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              },
              "range": [
                744,
                752
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  746,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 42
                  },
                  "start": {
                    "column": 17,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              733,
              753
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 4,
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
              "name": "a",
              "optional": false,
              "range": [
                759,
                760
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 5,
                  "line": 44
                }
              },
              "range": [
                760,
                768
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  762,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 44
                  },
                  "start": {
                    "column": 7,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              759,
              769
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                780,
                781
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
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
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 5,
                  "line": 45
                }
              },
              "range": [
                781,
                789
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  783,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 45
                  },
                  "start": {
                    "column": 7,
                    "line": 45
                  }
                }
              }
            },
            "range": [
              780,
              790
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                804,
                805
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
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
                  "line": 46
                },
                "start": {
                  "column": 5,
                  "line": 46
                }
              },
              "range": [
                805,
                815
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  },
                  "range": [
                    810,
                    815
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      813,
                      815
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 46
                      },
                      "start": {
                        "column": 13,
                        "line": 46
                      }
                    }
                  }
                },
                "range": [
                  807,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 46
                  },
                  "start": {
                    "column": 7,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              804,
              815
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"d\"",
              "value": "d",
              "range": [
                829,
                832
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
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
                  "line": 47
                },
                "start": {
                  "column": 7,
                  "line": 47
                }
              },
              "range": [
                832,
                840
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  834,
                  840
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 9,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              829,
              841
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"e\"",
              "value": "e",
              "range": [
                852,
                855
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
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
                  "line": 48
                },
                "start": {
                  "column": 7,
                  "line": 48
                }
              },
              "range": [
                855,
                863
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  857,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 48
                  },
                  "start": {
                    "column": 9,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              852,
              864
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "1.0",
              "value": 1,
              "range": [
                878,
                881
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 49
                },
                "start": {
                  "column": 4,
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
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 7,
                  "line": 49
                }
              },
              "range": [
                881,
                889
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  883,
                  889
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 49
                  },
                  "start": {
                    "column": 9,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              878,
              890
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "2.0",
              "value": 2,
              "range": [
                901,
                904
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
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
                  "line": 50
                },
                "start": {
                  "column": 7,
                  "line": 50
                }
              },
              "range": [
                904,
                912
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  906,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              901,
              913
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 51
                },
                "start": {
                  "column": 6,
                  "line": 51
                }
              },
              "range": [
                929,
                937
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  931,
                  937
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              }
            },
            "range": [
              927,
              938
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  950,
                  951
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 52
                  },
                  "start": {
                    "column": 5,
                    "line": 52
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 52
                },
                "start": {
                  "column": 7,
                  "line": 52
                }
              },
              "range": [
                952,
                960
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  954,
                  960
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 52
                  },
                  "start": {
                    "column": 9,
                    "line": 52
                  }
                }
              }
            },
            "range": [
              949,
              960
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
                971,
                974
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
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
                  "column": 17,
                  "line": 53
                },
                "start": {
                  "column": 9,
                  "line": 53
                }
              },
              "range": [
                976,
                984
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  978,
                  984
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              }
            },
            "static": false,
            "range": [
              971,
              985
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"3.0\"",
              "value": "3.0",
              "range": [
                999,
                1004
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
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
                  "line": 54
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              },
              "range": [
                1004,
                1012
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1006,
                  1012
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 54
                  },
                  "start": {
                    "column": 11,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              999,
              1013
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Literal",
              "raw": "\"4.0\"",
              "value": "4.0",
              "range": [
                1024,
                1029
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
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
                  "line": 55
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              },
              "range": [
                1029,
                1037
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1031,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 55
                  }
                }
              }
            },
            "range": [
              1024,
              1038
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                1052,
                1053
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
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
                  "line": 56
                },
                "start": {
                  "column": 5,
                  "line": 56
                }
              },
              "range": [
                1053,
                1063
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyString",
                  "optional": false,
                  "range": [
                    1055,
                    1063
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 56
                    },
                    "start": {
                      "column": 7,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1055,
                  1063
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 56
                  },
                  "start": {
                    "column": 7,
                    "line": 56
                  }
                }
              }
            },
            "range": [
              1052,
              1064
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 12,
            "line": 41
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
          725,
          726
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 41
          },
          "start": {
            "column": 10,
            "line": 41
          }
        }
      },
      "range": [
        715,
        1075
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 75
                },
                "start": {
                  "column": 5,
                  "line": 59
                }
              },
              "range": [
                1082,
                1432
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 60
                            },
                            "start": {
                              "column": 6,
                              "line": 60
                            }
                          },
                          "range": [
                            1092,
                            1100
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1094,
                              1100
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 60
                              },
                              "start": {
                                "column": 8,
                                "line": 60
                              }
                            }
                          }
                        },
                        "range": [
                          1091,
                          1100
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 60
                          },
                          "start": {
                            "column": 5,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 60
                        },
                        "start": {
                          "column": 15,
                          "line": 60
                        }
                      },
                      "range": [
                        1101,
                        1109
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1103,
                          1109
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 60
                          },
                          "start": {
                            "column": 17,
                            "line": 60
                          }
                        }
                      }
                    },
                    "range": [
                      1090,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 60
                      },
                      "start": {
                        "column": 4,
                        "line": 60
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        1116,
                        1117
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 62
                        },
                        "start": {
                          "column": 4,
                          "line": 62
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
                          "column": 13,
                          "line": 62
                        },
                        "start": {
                          "column": 5,
                          "line": 62
                        }
                      },
                      "range": [
                        1117,
                        1125
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1119,
                          1125
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 62
                          },
                          "start": {
                            "column": 7,
                            "line": 62
                          }
                        }
                      }
                    },
                    "range": [
                      1116,
                      1126
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 62
                      },
                      "start": {
                        "column": 4,
                        "line": 62
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        1137,
                        1138
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 63
                        },
                        "start": {
                          "column": 4,
                          "line": 63
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
                          "column": 13,
                          "line": 63
                        },
                        "start": {
                          "column": 5,
                          "line": 63
                        }
                      },
                      "range": [
                        1138,
                        1146
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1140,
                          1146
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 63
                          },
                          "start": {
                            "column": 7,
                            "line": 63
                          }
                        }
                      }
                    },
                    "range": [
                      1137,
                      1147
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 63
                      },
                      "start": {
                        "column": 4,
                        "line": 63
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        1161,
                        1162
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 64
                        },
                        "start": {
                          "column": 4,
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
                          "column": 15,
                          "line": 64
                        },
                        "start": {
                          "column": 5,
                          "line": 64
                        }
                      },
                      "range": [
                        1162,
                        1172
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 64
                            },
                            "start": {
                              "column": 10,
                              "line": 64
                            }
                          },
                          "range": [
                            1167,
                            1172
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              1170,
                              1172
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 64
                              },
                              "start": {
                                "column": 13,
                                "line": 64
                              }
                            }
                          }
                        },
                        "range": [
                          1164,
                          1172
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 64
                          },
                          "start": {
                            "column": 7,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1161,
                      1172
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 64
                      },
                      "start": {
                        "column": 4,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"d\"",
                      "value": "d",
                      "range": [
                        1186,
                        1189
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 65
                        },
                        "start": {
                          "column": 4,
                          "line": 65
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
                          "line": 65
                        },
                        "start": {
                          "column": 7,
                          "line": 65
                        }
                      },
                      "range": [
                        1189,
                        1197
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1191,
                          1197
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
                      }
                    },
                    "range": [
                      1186,
                      1198
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 65
                      },
                      "start": {
                        "column": 4,
                        "line": 65
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"e\"",
                      "value": "e",
                      "range": [
                        1209,
                        1212
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 66
                        },
                        "start": {
                          "column": 4,
                          "line": 66
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
                          "line": 66
                        },
                        "start": {
                          "column": 7,
                          "line": 66
                        }
                      },
                      "range": [
                        1212,
                        1220
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1214,
                          1220
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
                      }
                    },
                    "range": [
                      1209,
                      1221
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 66
                      },
                      "start": {
                        "column": 4,
                        "line": 66
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "1.0",
                      "value": 1,
                      "range": [
                        1235,
                        1238
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 67
                        },
                        "start": {
                          "column": 4,
                          "line": 67
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
                          "line": 67
                        },
                        "start": {
                          "column": 7,
                          "line": 67
                        }
                      },
                      "range": [
                        1238,
                        1246
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1240,
                          1246
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
                      }
                    },
                    "range": [
                      1235,
                      1247
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 67
                      },
                      "start": {
                        "column": 4,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "2.0",
                      "value": 2,
                      "range": [
                        1258,
                        1261
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
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 68
                        },
                        "start": {
                          "column": 7,
                          "line": 68
                        }
                      },
                      "range": [
                        1261,
                        1269
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1263,
                          1269
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 68
                          },
                          "start": {
                            "column": 9,
                            "line": 68
                          }
                        }
                      }
                    },
                    "range": [
                      1258,
                      1270
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 68
                      },
                      "start": {
                        "column": 4,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 69
                        },
                        "start": {
                          "column": 6,
                          "line": 69
                        }
                      },
                      "range": [
                        1286,
                        1294
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1288,
                          1294
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 69
                          },
                          "start": {
                            "column": 8,
                            "line": 69
                          }
                        }
                      }
                    },
                    "range": [
                      1284,
                      1295
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 69
                      },
                      "start": {
                        "column": 4,
                        "line": 69
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1307,
                          1308
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 70
                          },
                          "start": {
                            "column": 5,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 70
                        },
                        "start": {
                          "column": 7,
                          "line": 70
                        }
                      },
                      "range": [
                        1309,
                        1317
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1311,
                          1317
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 70
                          },
                          "start": {
                            "column": 9,
                            "line": 70
                          }
                        }
                      }
                    },
                    "range": [
                      1306,
                      1317
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 70
                      },
                      "start": {
                        "column": 4,
                        "line": 70
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
                        1328,
                        1331
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 71
                        },
                        "start": {
                          "column": 4,
                          "line": 71
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
                          "column": 17,
                          "line": 71
                        },
                        "start": {
                          "column": 9,
                          "line": 71
                        }
                      },
                      "range": [
                        1333,
                        1341
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1335,
                          1341
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 71
                          },
                          "start": {
                            "column": 11,
                            "line": 71
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      1328,
                      1342
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 71
                      },
                      "start": {
                        "column": 4,
                        "line": 71
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"3.0\"",
                      "value": "3.0",
                      "range": [
                        1356,
                        1361
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 72
                        },
                        "start": {
                          "column": 4,
                          "line": 72
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
                          "line": 72
                        },
                        "start": {
                          "column": 9,
                          "line": 72
                        }
                      },
                      "range": [
                        1361,
                        1369
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1363,
                          1369
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 72
                          },
                          "start": {
                            "column": 11,
                            "line": 72
                          }
                        }
                      }
                    },
                    "range": [
                      1356,
                      1370
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 72
                      },
                      "start": {
                        "column": 4,
                        "line": 72
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "raw": "\"4.0\"",
                      "value": "4.0",
                      "range": [
                        1381,
                        1386
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 73
                        },
                        "start": {
                          "column": 4,
                          "line": 73
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
                          "line": 73
                        },
                        "start": {
                          "column": 9,
                          "line": 73
                        }
                      },
                      "range": [
                        1386,
                        1394
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1388,
                          1394
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
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
                      1381,
                      1395
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 73
                      },
                      "start": {
                        "column": 4,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        1409,
                        1410
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 74
                        },
                        "start": {
                          "column": 4,
                          "line": 74
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
                          "line": 74
                        },
                        "start": {
                          "column": 5,
                          "line": 74
                        }
                      },
                      "range": [
                        1410,
                        1420
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyString",
                          "optional": false,
                          "range": [
                            1412,
                            1420
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 74
                            },
                            "start": {
                              "column": 7,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          1412,
                          1420
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 74
                          },
                          "start": {
                            "column": 7,
                            "line": 74
                          }
                        }
                      }
                    },
                    "range": [
                      1409,
                      1421
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 74
                      },
                      "start": {
                        "column": 4,
                        "line": 74
                      }
                    }
                  }
                ],
                "range": [
                  1084,
                  1432
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 75
                  },
                  "start": {
                    "column": 7,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1081,
              1432
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          "init": null,
          "range": [
            1081,
            1432
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 75
            },
            "start": {
              "column": 4,
              "line": 59
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1077,
        1432
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 59
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
                  "column": 31,
                  "line": 78
                },
                "start": {
                  "column": 5,
                  "line": 78
                }
              },
              "range": [
                1448,
                1474
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
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
                              "line": 78
                            },
                            "start": {
                              "column": 11,
                              "line": 78
                            }
                          },
                          "range": [
                            1454,
                            1462
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1456,
                              1462
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 78
                              },
                              "start": {
                                "column": 13,
                                "line": 78
                              }
                            }
                          }
                        },
                        "range": [
                          1453,
                          1462
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 10,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 78
                        },
                        "start": {
                          "column": 20,
                          "line": 78
                        }
                      },
                      "range": [
                        1463,
                        1471
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1465,
                          1471
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 78
                          },
                          "start": {
                            "column": 22,
                            "line": 78
                          }
                        }
                      }
                    },
                    "range": [
                      1452,
                      1472
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 78
                      },
                      "start": {
                        "column": 9,
                        "line": 78
                      }
                    }
                  }
                ],
                "range": [
                  1450,
                  1474
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 78
                  },
                  "start": {
                    "column": 7,
                    "line": 78
                  }
                }
              }
            },
            "range": [
              1447,
              1474
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1483,
                    1484
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 79
                    },
                    "start": {
                      "column": 4,
                      "line": 79
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
                    1486,
                    1488
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 79
                    },
                    "start": {
                      "column": 7,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1483,
                  1488
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
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
                    1494,
                    1495
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
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
                    1497,
                    1498
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 80
                    },
                    "start": {
                      "column": 7,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1494,
                  1498
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
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    1505,
                    1506
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 81
                    },
                    "start": {
                      "column": 4,
                      "line": 81
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1514,
                      1517
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 81
                      },
                      "start": {
                        "column": 13,
                        "line": 81
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1508,
                    1517
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 7,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1505,
                  1517
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"d\"",
                  "value": "d",
                  "range": [
                    1524,
                    1527
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
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
                    1529,
                    1531
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 82
                    },
                    "start": {
                      "column": 9,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1524,
                  1531
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"e\"",
                  "value": "e",
                  "range": [
                    1538,
                    1541
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 83
                    },
                    "start": {
                      "column": 4,
                      "line": 83
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
                    1543,
                    1544
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 83
                    },
                    "start": {
                      "column": 9,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1538,
                  1544
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 83
                  },
                  "start": {
                    "column": 4,
                    "line": 83
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "1.0",
                  "value": 1,
                  "range": [
                    1551,
                    1554
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 84
                    },
                    "start": {
                      "column": 4,
                      "line": 84
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
                    1556,
                    1558
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 84
                    },
                    "start": {
                      "column": 9,
                      "line": 84
                    }
                  }
                },
                "range": [
                  1551,
                  1558
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "2.0",
                  "value": 2,
                  "range": [
                    1564,
                    1567
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
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
                    1569,
                    1570
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
                "range": [
                  1564,
                  1570
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"3.0\"",
                  "value": "3.0",
                  "range": [
                    1577,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
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
                    1584,
                    1586
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 86
                    },
                    "start": {
                      "column": 11,
                      "line": 86
                    }
                  }
                },
                "range": [
                  1577,
                  1586
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 86
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"4.0\"",
                  "value": "4.0",
                  "range": [
                    1593,
                    1598
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
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
                    1600,
                    1601
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 87
                    },
                    "start": {
                      "column": 11,
                      "line": 87
                    }
                  }
                },
                "range": [
                  1593,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1608,
                    1609
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 88
                    },
                    "start": {
                      "column": 4,
                      "line": 88
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "expression": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      1621,
                      1625
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 88
                      },
                      "start": {
                        "column": 17,
                        "line": 88
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyString",
                      "optional": false,
                      "range": [
                        1612,
                        1620
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1612,
                      1620
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1611,
                    1625
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 88
                    },
                    "start": {
                      "column": 7,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1608,
                  1625
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    1637,
                    1638
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1638,
                    1668
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            1659,
                            1661
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 91
                            },
                            "start": {
                              "column": 15,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          1652,
                          1662
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 91
                          },
                          "start": {
                            "column": 8,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "range": [
                      1641,
                      1668
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 92
                      },
                      "start": {
                        "column": 12,
                        "line": 90
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
                      "line": 92
                    },
                    "start": {
                      "column": 9,
                      "line": 90
                    }
                  }
                },
                "range": [
                  1633,
                  1668
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 92
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    1678,
                    1679
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1679,
                    1686
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1683,
                      1686
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 93
                      },
                      "start": {
                        "column": 13,
                        "line": 93
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
                      "name": "v",
                      "optional": false,
                      "range": [
                        1680,
                        1681
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 93
                        },
                        "start": {
                          "column": 10,
                          "line": 93
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 93
                    },
                    "start": {
                      "column": 9,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1674,
                  1686
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 93
                  },
                  "start": {
                    "column": 4,
                    "line": 93
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    1693,
                    1696
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 94
                    },
                    "start": {
                      "column": 4,
                      "line": 94
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
                    1696,
                    1726
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            1717,
                            1719
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 95
                            },
                            "start": {
                              "column": 15,
                              "line": 95
                            }
                          }
                        },
                        "range": [
                          1710,
                          1720
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 95
                          },
                          "start": {
                            "column": 8,
                            "line": 95
                          }
                        }
                      }
                    ],
                    "range": [
                      1699,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 96
                      },
                      "start": {
                        "column": 10,
                        "line": 94
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
                      "line": 96
                    },
                    "start": {
                      "column": 7,
                      "line": 94
                    }
                  }
                },
                "range": [
                  1693,
                  1726
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 96
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              }
            ],
            "range": [
              1477,
              1728
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 97
              },
              "start": {
                "column": 34,
                "line": 78
              }
            }
          },
          "range": [
            1447,
            1728
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 97
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1443,
        1728
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 97
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
