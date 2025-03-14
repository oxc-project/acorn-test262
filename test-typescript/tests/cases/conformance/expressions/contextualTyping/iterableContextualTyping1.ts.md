__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    76
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
            "name": "iter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                24,
                57
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    34,
                    57
                  ],
                  "params": [
                    {
                      "type": "TSFunctionType",
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
                                "column": 29,
                                "line": 2
                              },
                              "start": {
                                "column": 21,
                                "line": 2
                              }
                            },
                            "range": [
                              37,
                              45
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                39,
                                45
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 2
                                },
                                "start": {
                                  "column": 23,
                                  "line": 2
                                }
                              }
                            }
                          },
                          "range": [
                            36,
                            45
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 2
                            },
                            "start": {
                              "column": 20,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 2
                          },
                          "start": {
                            "column": 31,
                            "line": 2
                          }
                        },
                        "range": [
                          47,
                          56
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            50,
                            56
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 2
                            },
                            "start": {
                              "column": 34,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        35,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "range": [
                    26,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  26,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              20,
              57
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "range": [
                      66,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 2
                      },
                      "start": {
                        "column": 50,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "range": [
                      68,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 2
                      },
                      "start": {
                        "column": 52,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    66,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 2
                    },
                    "start": {
                      "column": 50,
                      "line": 2
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
                    "name": "s",
                    "optional": false,
                    "range": [
                      61,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 45,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  61,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 2
                  },
                  "start": {
                    "column": 45,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              60,
              75
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 2
              },
              "start": {
                "column": 44,
                "line": 2
              }
            }
          },
          "range": [
            20,
            75
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        16,
        76
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 2
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
      "column": 60,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
