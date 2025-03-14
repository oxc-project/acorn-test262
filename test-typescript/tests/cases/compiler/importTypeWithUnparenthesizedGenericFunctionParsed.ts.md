__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    100
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        70
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
              "name": "fail1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 1
                  },
                  "start": {
                    "column": 26,
                    "line": 1
                  }
                },
                "range": [
                  26,
                  69
                ],
                "typeAnnotation": {
                  "type": "TSImportType",
                  "range": [
                    28,
                    69
                  ],
                  "argument": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"module\"",
                      "value": "module",
                      "range": [
                        35,
                        43
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 1
                        },
                        "start": {
                          "column": 35,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      35,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
                      }
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "range": [
                      45,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 1
                      },
                      "start": {
                        "column": 45,
                        "line": 1
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      53,
                      69
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
                                  "column": 62,
                                  "line": 1
                                },
                                "start": {
                                  "column": 59,
                                  "line": 1
                                }
                              },
                              "range": [
                                59,
                                62
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    61,
                                    62
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 1
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 1
                                    }
                                  }
                                },
                                "range": [
                                  61,
                                  62
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 1
                                  }
                                }
                              }
                            },
                            "range": [
                              58,
                              62
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 1
                              },
                              "start": {
                                "column": 58,
                                "line": 1
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 1
                            },
                            "start": {
                              "column": 64,
                              "line": 1
                            }
                          },
                          "range": [
                            64,
                            68
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                67,
                                68
                              ],
                              "loc": {
                                "end": {
                                  "column": 68,
                                  "line": 1
                                },
                                "start": {
                                  "column": 67,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              67,
                              68
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 1
                              },
                              "start": {
                                "column": 67,
                                "line": 1
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 1
                            },
                            "start": {
                              "column": 54,
                              "line": 1
                            }
                          },
                          "range": [
                            54,
                            57
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
                                  55,
                                  56
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 1
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                55,
                                56
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 1
                                },
                                "start": {
                                  "column": 55,
                                  "line": 1
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          54,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 1
                          },
                          "start": {
                            "column": 54,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                21,
                69
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              21,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          7,
          70
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 70,
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
      "column": 100,
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
