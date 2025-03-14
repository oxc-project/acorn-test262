__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    95
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
            "name": "f",
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
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                92,
                94
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 1
                },
                "start": {
                  "column": 92,
                  "line": 1
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    50,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 1
                    },
                    "start": {
                      "column": 54,
                      "line": 1
                    }
                  },
                  "range": [
                    54,
                    81
                  ],
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TFirstArgs",
                            "optional": false,
                            "range": [
                              60,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 1
                              },
                              "start": {
                                "column": 60,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            60,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 1
                            },
                            "start": {
                              "column": 60,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          57,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 1
                          },
                          "start": {
                            "column": 57,
                            "line": 1
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TLastArg",
                          "optional": false,
                          "range": [
                            72,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 1
                            },
                            "start": {
                              "column": 72,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          72,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 1
                          },
                          "start": {
                            "column": 72,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "range": [
                      56,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 1
                      },
                      "start": {
                        "column": 56,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  47,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 1
                  },
                  "start": {
                    "column": 47,
                    "line": 1
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 88,
                  "line": 1
                },
                "start": {
                  "column": 82,
                  "line": 1
                }
              },
              "range": [
                82,
                88
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  84,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 1
                  },
                  "start": {
                    "column": 84,
                    "line": 1
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              },
              "range": [
                10,
                46
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        30,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      30,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFirstArgs",
                    "optional": false,
                    "range": [
                      11,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 11,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    11,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 1
                    },
                    "start": {
                      "column": 11,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLastArg",
                    "optional": false,
                    "range": [
                      37,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 1
                      },
                      "start": {
                        "column": 37,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    37,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                }
              ]
            },
            "range": [
              10,
              94
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            94
          ],
          "loc": {
            "end": {
              "column": 94,
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
        95
      ],
      "loc": {
        "end": {
          "column": 95,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 95,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
