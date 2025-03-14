__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    178
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          97
        ],
        "body": [
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
                25,
                28
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
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
                28,
                56
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          43,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          51,
                          54
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
                      "range": [
                        43,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 2
                        },
                        "start": {
                          "column": 26,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      36,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                },
                "range": [
                  30,
                  33
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      32,
                      33
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    32,
                    33
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              56
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                65,
                68
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
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
                68,
                95
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  88,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 3
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      70,
                      85
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              72,
                              73
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 3
                              },
                              "start": {
                                "column": 15,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            72,
                            73
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 3
                            },
                            "start": {
                              "column": 15,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            76,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 3
                            },
                            "start": {
                              "column": 19,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        72,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    69,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              61,
              95
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 3
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
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          14
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
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        97
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "s",
            "optional": false,
            "range": [
              105,
              106
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
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test1",
              "optional": false,
              "range": [
                113,
                118
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                118,
                126
              ],
              "params": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    119,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 7
                    },
                    "start": {
                      "column": 20,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "range": [
              109,
              128
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            105,
            128
          ],
          "loc": {
            "end": {
              "column": 29,
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
        99,
        129
      ],
      "loc": {
        "end": {
          "column": 30,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              130,
              131
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 0,
                "line": 8
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
              132,
              135
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          "range": [
            130,
            135
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            138,
            147
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 8,
              "line": 8
            }
          }
        },
        "range": [
          130,
          147
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        130,
        148
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 8
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
            "name": "s",
            "optional": false,
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
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
              151,
              154
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          "range": [
            149,
            154
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"hello\"",
          "value": "hello",
          "range": [
            157,
            164
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 9
            },
            "start": {
              "column": 8,
              "line": 9
            }
          }
        },
        "range": [
          149,
          164
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        149,
        165
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "s",
            "optional": false,
            "range": [
              166,
              167
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
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              168,
              171
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          "range": [
            166,
            171
          ],
          "loc": {
            "end": {
              "column": 5,
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
          "raw": "42",
          "value": 42,
          "range": [
            174,
            176
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 10
            },
            "start": {
              "column": 8,
              "line": 10
            }
          }
        },
        "range": [
          166,
          176
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        166,
        177
      ],
      "loc": {
        "end": {
          "column": 11,
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
      "line": 1
    }
  },
  "hashbang": null
}
```
