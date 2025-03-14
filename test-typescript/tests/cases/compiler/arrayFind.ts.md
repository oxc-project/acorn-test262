__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    77,
    557
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    134,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  127,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"number\"",
                "value": "number",
                "range": [
                  140,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "range": [
                127,
                148
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              120,
              149
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          116,
          151
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 39,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "range": [
          86,
          94
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 9,
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
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            },
            "range": [
              96,
              101
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                98,
                101
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            }
          },
          "range": [
            95,
            101
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 18,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 2
          },
          "start": {
            "column": 25,
            "line": 2
          }
        },
        "range": [
          102,
          115
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              104,
              105
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 27,
                "line": 2
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 2
              },
              "start": {
                "column": 32,
                "line": 2
              }
            },
            "range": [
              109,
              115
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                109,
                115
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            }
          },
          "range": [
            104,
            115
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 2
            },
            "start": {
              "column": 27,
              "line": 2
            }
          }
        }
      },
      "range": [
        77,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "arrayOfStringsNumbersAndBooleans",
            "optional": false,
            "range": [
              159,
              191
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  195,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "false",
                "value": false,
                "range": [
                  205,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 6
                  },
                  "start": {
                    "column": 52,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  212,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 6
                  },
                  "start": {
                    "column": 59,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"strung\"",
                "value": "strung",
                "range": [
                  215,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 6
                  },
                  "start": {
                    "column": 62,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  225,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 6
                  },
                  "start": {
                    "column": 72,
                    "line": 6
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  228,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 6
                  },
                  "start": {
                    "column": 75,
                    "line": 6
                  }
                }
              }
            ],
            "range": [
              194,
              233
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 6
              },
              "start": {
                "column": 41,
                "line": 6
              }
            }
          },
          "range": [
            159,
            233
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        153,
        234
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "foundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                252,
                272
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      254,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      263,
                      272
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 28,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  254,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              241,
              272
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "range": [
                  313,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 7
                  },
                  "start": {
                    "column": 78,
                    "line": 7
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
                "name": "arrayOfStringsNumbersAndBooleans",
                "optional": false,
                "range": [
                  275,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 7
                  },
                  "start": {
                    "column": 40,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "range": [
                  308,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 7
                  },
                  "start": {
                    "column": 73,
                    "line": 7
                  }
                }
              },
              "range": [
                275,
                312
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 7
                },
                "start": {
                  "column": 40,
                  "line": 7
                }
              }
            },
            "optional": false,
            "range": [
              275,
              322
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 7
              },
              "start": {
                "column": 40,
                "line": 7
              }
            }
          },
          "range": [
            241,
            322
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        235,
        323
      ],
      "loc": {
        "end": {
          "column": 88,
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
            "name": "readonlyArrayOfStringsNumbersAndBooleans",
            "optional": false,
            "range": [
              331,
              371
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayOfStringsNumbersAndBooleans",
              "optional": false,
              "range": [
                374,
                406
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 9
                },
                "start": {
                  "column": 49,
                  "line": 9
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  423,
                  450
                ],
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          424,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 105,
                            "line": 9
                          },
                          "start": {
                            "column": 99,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          433,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 114,
                            "line": 9
                          },
                          "start": {
                            "column": 108,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "range": [
                          442,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 124,
                            "line": 9
                          },
                          "start": {
                            "column": 117,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      424,
                      449
                    ],
                    "loc": {
                      "end": {
                        "column": 124,
                        "line": 9
                      },
                      "start": {
                        "column": 99,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 125,
                    "line": 9
                  },
                  "start": {
                    "column": 98,
                    "line": 9
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "range": [
                  410,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 98,
                    "line": 9
                  },
                  "start": {
                    "column": 85,
                    "line": 9
                  }
                }
              },
              "range": [
                410,
                450
              ],
              "loc": {
                "end": {
                  "column": 125,
                  "line": 9
                },
                "start": {
                  "column": 85,
                  "line": 9
                }
              }
            },
            "range": [
              374,
              450
            ],
            "loc": {
              "end": {
                "column": 125,
                "line": 9
              },
              "start": {
                "column": 49,
                "line": 9
              }
            }
          },
          "range": [
            331,
            450
          ],
          "loc": {
            "end": {
              "column": 125,
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
        325,
        451
      ],
      "loc": {
        "end": {
          "column": 126,
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
            "name": "readonlyFoundNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 10
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              },
              "range": [
                477,
                497
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      479,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 27,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      488,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 36,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  479,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 10
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              458,
              497
            ],
            "loc": {
              "end": {
                "column": 45,
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
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "range": [
                  546,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 102,
                    "line": 10
                  },
                  "start": {
                    "column": 94,
                    "line": 10
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
                "name": "readonlyArrayOfStringsNumbersAndBooleans",
                "optional": false,
                "range": [
                  500,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 10
                  },
                  "start": {
                    "column": 48,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "range": [
                  541,
                  545
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 10
                  },
                  "start": {
                    "column": 89,
                    "line": 10
                  }
                }
              },
              "range": [
                500,
                545
              ],
              "loc": {
                "end": {
                  "column": 93,
                  "line": 10
                },
                "start": {
                  "column": 48,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              500,
              555
            ],
            "loc": {
              "end": {
                "column": 103,
                "line": 10
              },
              "start": {
                "column": 48,
                "line": 10
              }
            }
          },
          "range": [
            458,
            555
          ],
          "loc": {
            "end": {
              "column": 103,
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
        452,
        556
      ],
      "loc": {
        "end": {
          "column": 104,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
