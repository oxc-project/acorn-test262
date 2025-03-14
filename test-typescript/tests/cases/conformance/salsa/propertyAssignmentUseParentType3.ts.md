__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    70,
    325
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
              "type": "Literal",
              "raw": "123",
              "value": 123,
              "range": [
                107,
                110
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              100,
              111
            ],
            "loc": {
              "end": {
                "column": 15,
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
          94,
          113
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 24,
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
        "name": "foo1",
        "optional": false,
        "range": [
          79,
          83
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        },
        "range": [
          85,
          93
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            87,
            93
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        }
      },
      "range": [
        70,
        113
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "range": [
              114,
              118
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "range": [
              119,
              126
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 6
              },
              "start": {
                "column": 5,
                "line": 6
              }
            }
          },
          "range": [
            114,
            126
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            129,
            131
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 15,
              "line": 6
            }
          }
        },
        "range": [
          114,
          131
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        114,
        132
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                170,
                172
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              163,
              173
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          157,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 8
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
          143,
          147
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        },
        "range": [
          149,
          156
        ],
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSAnyKeyword",
            "range": [
              151,
              154
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          "range": [
            151,
            156
          ],
          "loc": {
            "end": {
              "column": 22,
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
        134,
        175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "range": [
              176,
              180
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "join",
            "optional": false,
            "range": [
              181,
              185
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 5,
                "line": 11
              }
            }
          },
          "range": [
            176,
            185
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            188,
            190
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
        "range": [
          176,
          190
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        176,
        191
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
              "raw": "\"\"",
              "value": "",
              "range": [
                230,
                232
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              223,
              233
            ],
            "loc": {
              "end": {
                "column": 14,
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
          217,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 24,
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
        "name": "foo3",
        "optional": false,
        "range": [
          202,
          206
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 13
          }
        },
        "range": [
          208,
          216
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            210,
            216
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 17,
              "line": 13
            }
          }
        }
      },
      "range": [
        193,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "range": [
              236,
              240
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 16
              },
              "start": {
                "column": 0,
                "line": 16
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "trim",
            "optional": false,
            "range": [
              241,
              245
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 16
              },
              "start": {
                "column": 5,
                "line": 16
              }
            }
          },
          "range": [
            236,
            245
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 16
            },
            "start": {
              "column": 0,
              "line": 16
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            248,
            250
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
        "range": [
          236,
          250
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        236,
        251
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
                      298,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
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
                      301,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    298,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                297,
                305
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              290,
              306
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          284,
          308
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 31,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          262,
          266
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 18
          },
          "start": {
            "column": 15,
            "line": 18
          }
        },
        "range": [
          268,
          283
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
                  272,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
                    "line": 18
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
                    "line": 18
                  },
                  "start": {
                    "column": 20,
                    "line": 18
                  }
                },
                "range": [
                  273,
                  281
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    275,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 22,
                      "line": 18
                    }
                  }
                }
              },
              "range": [
                272,
                281
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 19,
                  "line": 18
                }
              }
            }
          ],
          "range": [
            271,
            282
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 18
            },
            "start": {
              "column": 18,
              "line": 18
            }
          }
        }
      },
      "range": [
        253,
        308
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "range": [
              309,
              313
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 21
              },
              "start": {
                "column": 0,
                "line": 21
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              314,
              315
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 5,
                "line": 21
              }
            }
          },
          "range": [
            309,
            315
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"456\"",
          "value": "456",
          "range": [
            318,
            323
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 21
            },
            "start": {
              "column": 9,
              "line": 21
            }
          }
        },
        "range": [
          309,
          323
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        309,
        324
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
