__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    203
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
              "name": "arg",
              "optional": false,
              "range": [
                96,
                99
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
              89,
              100
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
          83,
          102
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 26,
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
        "name": "fn",
        "optional": false,
        "range": [
          66,
          68
        ],
        "loc": {
          "end": {
            "column": 11,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 18,
                "line": 3
              }
            },
            "range": [
              75,
              78
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
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
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "range": [
                77,
                78
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            }
          },
          "range": [
            72,
            78
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 15,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 22,
            "line": 3
          }
        },
        "range": [
          79,
          82
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              81,
              82
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            81,
            82
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          68,
          71
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
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              69,
              70
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        57,
        102
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
            "name": "a",
            "optional": false,
            "range": [
              110,
              111
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
          "init": {
            "type": "Literal",
            "raw": "'1'",
            "value": "1",
            "range": [
              114,
              117
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            110,
            117
          ],
          "loc": {
            "end": {
              "column": 13,
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
        104,
        118
      ],
      "loc": {
        "end": {
          "column": 14,
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
            "name": "b",
            "optional": false,
            "range": [
              125,
              126
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                129,
                130
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 8
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "' 2'",
              "value": " 2",
              "range": [
                133,
                137
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              129,
              137
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 8
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            125,
            137
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        119,
        138
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  152,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  149,
                  152
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
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                },
                "range": [
                  153,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 9
                  },
                  "start": {
                    "column": 14,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              149,
              157
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            145,
            157
          ],
          "loc": {
            "end": {
              "column": 18,
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
        139,
        158
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "d",
            "optional": false,
            "range": [
              165,
              166
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TemplateLiteral",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "range": [
                    169,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": " 3",
                    "raw": " 3"
                  },
                  "range": [
                    173,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 14,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                169,
                177
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
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
                  181,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              "range": [
                181,
                186
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              169,
              186
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            165,
            186
          ],
          "loc": {
            "end": {
              "column": 27,
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
        159,
        187
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "TemplateLiteral",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  195,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 12
                  },
                  "start": {
                    "column": 6,
                    "line": 12
                  }
                }
              }
            ],
            "quasis": [
              {
                "type": "TemplateElement",
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "range": [
                  192,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 12
                  },
                  "start": {
                    "column": 3,
                    "line": 12
                  }
                }
              },
              {
                "type": "TemplateElement",
                "tail": true,
                "value": {
                  "cooked": " 3",
                  "raw": " 3"
                },
                "range": [
                  196,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              192,
              200
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
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
            189,
            191
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          189,
          201
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        189,
        202
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
