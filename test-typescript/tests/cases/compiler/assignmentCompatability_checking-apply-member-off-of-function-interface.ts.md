__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    36,
    331
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          57,
          108
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "range": [
                63,
                68
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  },
                  "range": [
                    73,
                    78
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      75,
                      78
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
                  }
                },
                "range": [
                  69,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              63,
              80
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Applicable",
        "optional": false,
        "range": [
          46,
          56
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        36,
        108
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                115,
                127
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Applicable",
                  "optional": false,
                  "range": [
                    117,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  117,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              114,
              127
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            114,
            127
          ],
          "loc": {
            "end": {
              "column": 17,
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
        110,
        128
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            145,
            146
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "''",
          "value": "",
          "range": [
            149,
            151
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
        },
        "range": [
          145,
          151
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        145,
        152
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            153,
            154
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "''",
              "value": "",
              "range": [
                158,
                160
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              }
            }
          ],
          "range": [
            157,
            161
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "range": [
          153,
          161
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        153,
        162
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
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            163,
            164
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            167,
            168
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
        "range": [
          163,
          168
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        163,
        169
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            170,
            171
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "range": [
            174,
            176
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "range": [
          170,
          176
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        170,
        177
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
          207,
          210
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 16
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          203,
          204
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [],
      "range": [
        194,
        210
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        210,
        211
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 16
        },
        "start": {
          "column": 16,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            212,
            213
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            216,
            217
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        },
        "range": [
          212,
          217
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        212,
        218
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
          247,
          250
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          229,
          231
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            },
            "range": [
              233,
              245
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Applicable",
                "optional": false,
                "range": [
                  235,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 19
                  },
                  "start": {
                    "column": 15,
                    "line": 19
                  }
                }
              },
              "range": [
                235,
                245
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            }
          },
          "range": [
            232,
            245
          ],
          "loc": {
            "end": {
              "column": 25,
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
        220,
        250
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "raw": "''",
            "value": "",
            "range": [
              270,
              272
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 22
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
            267,
            269
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          267,
          273
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        267,
        274
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
                "raw": "''",
                "value": "",
                "range": [
                  279,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              278,
              282
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 3,
                "line": 23
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
            275,
            277
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          275,
          283
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        275,
        284
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "raw": "4",
            "value": 4,
            "range": [
              288,
              289
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 24
              },
              "start": {
                "column": 3,
                "line": 24
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
            285,
            287
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          285,
          290
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        285,
        291
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "properties": [],
            "range": [
              295,
              297
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 3,
                "line": 25
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
            292,
            294
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          292,
          298
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        292,
        299
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
                325,
                328
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
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
                "range": [
                  320,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 29
                  },
                  "start": {
                    "column": 3,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              320,
              328
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 3,
                "line": 29
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
            317,
            319
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          317,
          329
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        317,
        330
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
