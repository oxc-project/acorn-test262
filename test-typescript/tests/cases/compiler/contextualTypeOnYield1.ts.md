__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    221
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FuncOrGeneratorFunc",
        "optional": false,
        "range": [
          5,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 87,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          },
          "range": [
            30,
            87
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
                    "line": 1
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    52,
                    86
                  ],
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                                "column": 65,
                                "line": 1
                              },
                              "start": {
                                "column": 57,
                                "line": 1
                              }
                            },
                            "range": [
                              57,
                              65
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                59,
                                65
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 1
                                },
                                "start": {
                                  "column": 59,
                                  "line": 1
                                }
                              }
                            }
                          },
                          "range": [
                            54,
                            65
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 1
                            },
                            "start": {
                              "column": 54,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 1
                          },
                          "start": {
                            "column": 67,
                            "line": 1
                          }
                        },
                        "range": [
                          67,
                          74
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            70,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 1
                            },
                            "start": {
                              "column": 70,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        53,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 1
                        },
                        "start": {
                          "column": 53,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        76,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 1
                        },
                        "start": {
                          "column": 76,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        81,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 85,
                          "line": 1
                        },
                        "start": {
                          "column": 81,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 1
                    },
                    "start": {
                      "column": 52,
                      "line": 1
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "range": [
                    43,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 1
                    },
                    "start": {
                      "column": 43,
                      "line": 1
                    }
                  }
                },
                "range": [
                  43,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              34,
              86
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 1
              },
              "start": {
                "column": 34,
                "line": 1
              }
            }
          }
        },
        "range": [
          27,
          87
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 1
          },
          "start": {
            "column": 27,
            "line": 1
          }
        }
      },
      "range": [
        0,
        87
      ],
      "loc": {
        "end": {
          "column": 87,
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              },
              "range": [
                96,
                117
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncOrGeneratorFunc",
                  "optional": false,
                  "range": [
                    98,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "range": [
                  98,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 9,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              95,
              117
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "range": [
                              163,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              151,
                              158
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 17,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "range": [
                              159,
                              162
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 4
                              },
                              "start": {
                                "column": 25,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            151,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          151,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 4
                          },
                          "start": {
                            "column": 17,
                            "line": 4
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "range": [
                            143,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 9,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        142,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      136,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    136,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                132,
                221
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "range": [
              120,
              221
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 3
              }
            }
          },
          "range": [
            95,
            221
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        89,
        221
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
