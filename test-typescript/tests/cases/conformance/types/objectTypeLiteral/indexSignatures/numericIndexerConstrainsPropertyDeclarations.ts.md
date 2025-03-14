__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    90,
    1683
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
            "name": "Number",
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
        "name": "MyNumber",
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
          697
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
                    "type": "TSNumberKeyword",
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
                257,
                258
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
                258,
                268
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
                    263,
                    268
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      266,
                      268
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
                  260,
                  268
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
              257,
              268
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
                279,
                282
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
                282,
                290
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  284,
                  290
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
              279,
              291
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
                302,
                305
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
                305,
                313
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  307,
                  313
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
              302,
              314
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
                325,
                328
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
                328,
                336
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  330,
                  336
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
              325,
              337
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
                348,
                351
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
                351,
                359
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  353,
                  359
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
              348,
              360
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
                374,
                379
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
                379,
                387
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  381,
                  387
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
              374,
              388
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
                399,
                404
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
                404,
                412
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  406,
                  412
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
              399,
              413
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
              "type": "Literal",
              "raw": "3.0",
              "value": 3,
              "range": [
                427,
                430
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              },
              "range": [
                430,
                440
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false,
                  "range": [
                    432,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 9,
                      "line": 21
                    }
                  }
                },
                "range": [
                  432,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              427,
              440
            ],
            "loc": {
              "end": {
                "column": 17,
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
                459,
                460
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
                460,
                495
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
                        486,
                        488
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
                      479,
                      489
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
                  463,
                  495
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
              455,
              495
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
                504,
                505
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
                505,
                512
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  509,
                  512
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
                    506,
                    507
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
              500,
              512
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
                524,
                527
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
                527,
                557
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
                        548,
                        550
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
                      541,
                      551
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
                  530,
                  557
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
              524,
              557
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
                570,
                572
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
                572,
                580
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  574,
                  580
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
              563,
              581
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
                599,
                601
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
                601,
                609
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  603,
                  609
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
              592,
              610
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
                629,
                632
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
                632,
                638
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  635,
                  638
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
              622,
              638
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
                660,
                661
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
                661,
                695
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
                        687,
                        688
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
                      680,
                      689
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
                  664,
                  695
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
              649,
              695
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
        697
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
          711,
          1047
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
                    719,
                    727
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      721,
                      727
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
                  718,
                  727
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
                728,
                736
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  730,
                  736
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
              717,
              737
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
                743,
                744
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
              743,
              753
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
                764,
                765
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
                765,
                773
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  767,
                  773
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
              764,
              774
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
                785,
                786
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
                786,
                796
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
                    791,
                    796
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      794,
                      796
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
                  788,
                  796
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
              785,
              796
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
                807,
                810
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
                810,
                818
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  812,
                  818
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
              807,
              819
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
                830,
                833
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
                833,
                841
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  835,
                  841
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
              830,
              842
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
                853,
                856
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
                856,
                864
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  858,
                  864
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
              853,
              865
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
                876,
                879
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
                879,
                887
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  881,
                  887
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
              876,
              888
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
                904,
                912
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  906,
                  912
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
              902,
              913
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
                  925,
                  926
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
                927,
                935
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  929,
                  935
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
              924,
              935
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
                946,
                949
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
                951,
                959
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  953,
                  959
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
              946,
              960
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
                971,
                976
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
              971,
              985
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
                996,
                1001
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
                1001,
                1009
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1003,
                  1009
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
              996,
              1010
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
                1024,
                1025
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
                1025,
                1035
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyNumber",
                  "optional": false,
                  "range": [
                    1027,
                    1035
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
                  1027,
                  1035
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
              1024,
              1036
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
          709,
          710
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
        699,
        1047
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
                1054,
                1392
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
                            1064,
                            1072
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1066,
                              1072
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
                          1063,
                          1072
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
                        1073,
                        1081
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1075,
                          1081
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
                      1062,
                      1082
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
                        1088,
                        1089
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
                        1089,
                        1097
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1091,
                          1097
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
                      1088,
                      1098
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
                        1109,
                        1110
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
                        1110,
                        1118
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1112,
                          1118
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
                      1109,
                      1119
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
                        1130,
                        1131
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
                        1131,
                        1141
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
                            1136,
                            1141
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "range": [
                              1139,
                              1141
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
                          1133,
                          1141
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
                      1130,
                      1141
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
                        1152,
                        1155
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
                        1155,
                        1163
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1157,
                          1163
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
                      1152,
                      1164
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
                        1175,
                        1178
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
                        1178,
                        1186
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1180,
                          1186
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
                      1175,
                      1187
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
                        1198,
                        1201
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
                        1201,
                        1209
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1203,
                          1209
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
                      1198,
                      1210
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
                        1221,
                        1224
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
                        1224,
                        1232
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1226,
                          1232
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
                      1221,
                      1233
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
                        1249,
                        1257
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1251,
                          1257
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
                      1247,
                      1258
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
                          1270,
                          1271
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
                        1272,
                        1280
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1274,
                          1280
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
                      1269,
                      1280
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
                        1291,
                        1294
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
                        1296,
                        1304
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1298,
                          1304
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
                      1291,
                      1305
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
                        1316,
                        1321
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
                        1321,
                        1329
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1323,
                          1329
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
                      1316,
                      1330
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
                        1341,
                        1346
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
                        1346,
                        1354
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1348,
                          1354
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
                      1341,
                      1355
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
                        1369,
                        1370
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
                        1370,
                        1380
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyNumber",
                          "optional": false,
                          "range": [
                            1372,
                            1380
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
                          1372,
                          1380
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
                      1369,
                      1381
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
                  1056,
                  1392
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
              1053,
              1392
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
            1053,
            1392
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
        1049,
        1392
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
                1408,
                1434
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
                            1414,
                            1422
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1416,
                              1422
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
                          1413,
                          1422
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
                        1423,
                        1431
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1425,
                          1431
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
                      1412,
                      1432
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
                  1410,
                  1434
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
              1407,
              1434
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
                    1443,
                    1444
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
                    1446,
                    1448
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
                  1443,
                  1448
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
                    1454,
                    1455
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
                    1457,
                    1458
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
                  1454,
                  1458
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
                    1465,
                    1466
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
                      1474,
                      1477
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
                    1468,
                    1477
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
                  1465,
                  1477
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
                    1484,
                    1487
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
                    1489,
                    1491
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
                  1484,
                  1491
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
                    1498,
                    1501
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
                    1503,
                    1504
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
                  1498,
                  1504
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
                    1511,
                    1514
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
                    1516,
                    1518
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
                  1511,
                  1518
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
                    1524,
                    1527
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
                    1529,
                    1530
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
                  1524,
                  1530
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
                    1537,
                    1542
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
                    1544,
                    1546
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
                  1537,
                  1546
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
                    1553,
                    1558
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
                    1560,
                    1561
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
                  1553,
                  1561
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
                    1568,
                    1569
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
                      1576,
                      1580
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 88
                      },
                      "start": {
                        "column": 12,
                        "line": 88
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Myn",
                      "optional": false,
                      "range": [
                        1572,
                        1575
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1572,
                      1575
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1571,
                    1580
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 88
                    },
                    "start": {
                      "column": 7,
                      "line": 88
                    }
                  }
                },
                "range": [
                  1568,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
                    1592,
                    1593
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
                    1593,
                    1623
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
                            1614,
                            1616
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
                          1607,
                          1617
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
                      1596,
                      1623
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
                  1588,
                  1623
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
                    1633,
                    1634
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
                    1634,
                    1641
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1638,
                      1641
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
                        1635,
                        1636
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
                  1629,
                  1641
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
                    1648,
                    1651
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
                    1651,
                    1681
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
                            1672,
                            1674
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
                          1665,
                          1675
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
                      1654,
                      1681
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
                  1648,
                  1681
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
              1437,
              1683
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
            1407,
            1683
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
        1403,
        1683
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
