__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    50,
    184
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        50,
        183
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "range": [
                63,
                66
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  179,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 4
                  },
                  "start": {
                    "column": 49,
                    "line": 4
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
                  "name": "subFun",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 3
                      }
                    },
                    "range": [
                      81,
                      174
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        },
                        "range": [
                          138,
                          174
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                150,
                                172
                              ],
                              "params": [
                                {
                                  "type": "TSIndexedAccessType",
                                  "indexType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Field",
                                      "optional": false,
                                      "range": [
                                        162,
                                        167
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      162,
                                      167
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "objectType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Collection",
                                      "optional": false,
                                      "range": [
                                        151,
                                        161
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 4
                                        }
                                      }
                                    },
                                    "range": [
                                      151,
                                      161
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    151,
                                    168
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 4
                                    }
                                  }
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      170,
                                      171
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    170,
                                    171
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 4
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 4
                                },
                                "start": {
                                  "column": 20,
                                  "line": 4
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "FlatArray",
                              "optional": false,
                              "range": [
                                141,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 4
                                },
                                "start": {
                                  "column": 11,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              141,
                              172
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 4
                              },
                              "start": {
                                "column": 11,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            141,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 4
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        }
                      },
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        },
                        "range": [
                          83,
                          127
                        ],
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Collection",
                              "optional": false,
                              "range": [
                                84,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 3
                                },
                                "start": {
                                  "column": 13,
                                  "line": 3
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              84,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 3
                              },
                              "start": {
                                "column": 13,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSTypeParameter",
                            "const": false,
                            "constraint": {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Collection",
                                  "optional": false,
                                  "range": [
                                    116,
                                    126
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  116,
                                  126
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                110,
                                126
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 3
                                },
                                "start": {
                                  "column": 39,
                                  "line": 3
                                }
                              }
                            },
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Field",
                              "optional": false,
                              "range": [
                                96,
                                101
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 3
                                },
                                "start": {
                                  "column": 25,
                                  "line": 3
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              96,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 3
                              },
                              "start": {
                                "column": 25,
                                "line": 3
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        83,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    75,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                69,
                182
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "range": [
              63,
              182
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          57,
          183
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
          "line": 4
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
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
