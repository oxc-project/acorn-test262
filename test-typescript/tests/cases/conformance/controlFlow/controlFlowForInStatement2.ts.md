__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    384
  ],
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
            "name": "keywordA",
            "optional": false,
            "range": [
              6,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'a'",
            "value": "a",
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
          "range": [
            6,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
            "name": "keywordB",
            "optional": false,
            "range": [
              28,
              36
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'b'",
            "value": "b",
            "range": [
              39,
              42
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
          "range": [
            28,
            42
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        22,
        43
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          50,
          51
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keywordA",
              "optional": false,
              "range": [
                57,
                65
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 12,
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
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                66,
                74
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  68,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              56,
              74
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "range": [
          54,
          76
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        45,
        77
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          83,
          84
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "keywordB",
              "optional": false,
              "range": [
                90,
                98
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
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
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              },
              "range": [
                99,
                107
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  101,
                  107
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
              }
            },
            "range": [
              89,
              107
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          }
        ],
        "range": [
          87,
          109
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        78,
        110
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              },
              "range": [
                127,
                134
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        129,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 17,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      129,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        133,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 7
                        },
                        "start": {
                          "column": 21,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      133,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  129,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              126,
              134
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            126,
            134
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        112,
        135
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                157,
                158
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              157,
              159
            ],
            "loc": {
              "end": {
                "column": 6,
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
          151,
          180
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 9
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "in",
        "left": {
          "type": "Literal",
          "raw": "'a'",
          "value": "a",
          "range": [
            141,
            144
          ],
          "loc": {
            "end": {
              "column": 7,
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
          "name": "c",
          "optional": false,
          "range": [
            148,
            149
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          141,
          149
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        137,
        180
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                207,
                208
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
            "range": [
              207,
              209
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          201,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 19,
            "line": 13
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "in",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "keywordA",
          "optional": false,
          "range": [
            186,
            194
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            198,
            199
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 13
            },
            "start": {
              "column": 16,
              "line": 13
            }
          }
        },
        "range": [
          186,
          199
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        182,
        235
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              },
              "range": [
                248,
                256
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  250,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              241,
              256
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "'b'",
            "value": "b",
            "range": [
              259,
              262
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          },
          "range": [
            241,
            262
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        237,
        263
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 17
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
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                298,
                299
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              298,
              300
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          292,
          321
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "in",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "range": [
              270,
              277
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 19
              },
              "start": {
                "column": 5,
                "line": 19
              }
            }
          },
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'b'",
              "value": "b",
              "range": [
                281,
                284
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 16,
                  "line": 19
                }
              }
            },
            "range": [
              281,
              284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 19
              }
            }
          },
          "range": [
            270,
            284
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 19
            },
            "start": {
              "column": 5,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            289,
            290
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 19
            },
            "start": {
              "column": 24,
              "line": 19
            }
          }
        },
        "range": [
          269,
          290
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        265,
        321
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
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
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                364,
                365
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              364,
              366
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
          }
        ],
        "range": [
          358,
          384
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 35,
            "line": 23
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "in",
        "left": {
          "type": "TSAsExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "stringB",
            "optional": false,
            "range": [
              328,
              335
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            }
          },
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'a'",
                  "value": "a",
                  "range": [
                    340,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 23
                    },
                    "start": {
                      "column": 17,
                      "line": 23
                    }
                  }
                },
                "range": [
                  340,
                  343
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
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
                    346,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                },
                "range": [
                  346,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 23
                  },
                  "start": {
                    "column": 23,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              340,
              349
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 23
              },
              "start": {
                "column": 17,
                "line": 23
              }
            }
          },
          "range": [
            328,
            350
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 23
            },
            "start": {
              "column": 5,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "range": [
            355,
            356
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 32,
              "line": 23
            }
          }
        },
        "range": [
          327,
          356
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 23
          },
          "start": {
            "column": 4,
            "line": 23
          }
        }
      },
      "range": [
        323,
        384
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
