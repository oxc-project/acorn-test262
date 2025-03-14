__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    205
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          30
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              28
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          49,
          52
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          37,
          38
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          47,
          48
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        31,
        52
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
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
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            },
            "range": [
              67,
              73
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"hi\"",
                "value": "hi",
                "range": [
                  69,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                69,
                73
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          },
          "range": [
            66,
            73
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            },
            "range": [
              80,
              90
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  82,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 29,
                    "line": 5
                  }
                }
              },
              "range": [
                82,
                90
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            }
          },
          "range": [
            75,
            90
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 22,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 50,
            "line": 5
          },
          "start": {
            "column": 38,
            "line": 5
          }
        },
        "range": [
          91,
          103
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              100,
              103
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            }
          },
          "range": [
            93,
            103
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 5
            },
            "start": {
              "column": 40,
              "line": 5
            }
          }
        }
      },
      "range": [
        53,
        104
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
              "raw": "null",
              "value": null,
              "range": [
                171,
                175
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              164,
              176
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
        "range": [
          158,
          178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 53,
            "line": 6
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
          114,
          117
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
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
                "column": 22,
                "line": 6
              },
              "start": {
                "column": 14,
                "line": 6
              }
            },
            "range": [
              119,
              127
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                121,
                127
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            }
          },
          "range": [
            118,
            127
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 29,
                "line": 6
              }
            },
            "range": [
              134,
              144
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "range": [
                  136,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 31,
                    "line": 6
                  }
                }
              },
              "range": [
                136,
                144
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              }
            }
          },
          "range": [
            129,
            144
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 6
          },
          "start": {
            "column": 40,
            "line": 6
          }
        },
        "range": [
          145,
          157
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              154,
              157
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 6
              },
              "start": {
                "column": 49,
                "line": 6
              }
            }
          },
          "range": [
            147,
            157
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 6
            },
            "start": {
              "column": 42,
              "line": 6
            }
          }
        }
      },
      "range": [
        105,
        178
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                184,
                187
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "range": [
                    186,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  186,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              183,
              187
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hi\"",
                "value": "hi",
                "range": [
                  194,
                  198
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "range": [
                  200,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
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
                190,
                193
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              190,
              203
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          },
          "range": [
            183,
            203
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
      "declare": false,
      "kind": "var",
      "range": [
        179,
        204
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
