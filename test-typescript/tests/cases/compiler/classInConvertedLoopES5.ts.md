__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    211
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
            "name": "classesByRow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              },
              "range": [
                18,
                42
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    26,
                    42
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        27,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSObjectKeyword",
                      "range": [
                        35,
                        41
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "range": [
                    20,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                },
                "range": [
                  20,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              45,
              47
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          },
          "range": [
            6,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
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
        48
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                113,
                176
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "range": [
                      119,
                      122
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
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "range": [
                      125,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    119,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
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
                    "name": "factory",
                    "optional": false,
                    "range": [
                      141,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RowClass",
                        "optional": false,
                        "range": [
                          161,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 31,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        157,
                        171
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      151,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    134,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RowClass",
              "optional": false,
              "range": [
                104,
                112
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              98,
              176
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classesByRow",
                  "optional": false,
                  "range": [
                    180,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 8
                    },
                    "start": {
                      "column": 2,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "row",
                  "optional": false,
                  "range": [
                    193,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                },
                "range": [
                  180,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "RowClass",
                "optional": false,
                "range": [
                  200,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "range": [
                180,
                208
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              180,
              209
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "range": [
          94,
          211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 45,
            "line": 2
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "row",
              "optional": false,
              "range": [
                60,
                63
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              60,
              63
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          54,
          63
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "'1'",
            "value": "1",
            "range": [
              68,
              71
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'2'",
            "value": "2",
            "range": [
              73,
              76
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 24,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'3'",
            "value": "3",
            "range": [
              78,
              81
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'4'",
            "value": "4",
            "range": [
              83,
              86
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 2
              },
              "start": {
                "column": 34,
                "line": 2
              }
            }
          },
          {
            "type": "Literal",
            "raw": "'5'",
            "value": "5",
            "range": [
              88,
              91
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 39,
                "line": 2
              }
            }
          }
        ],
        "range": [
          67,
          92
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "range": [
        49,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
