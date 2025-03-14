__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    111
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          111
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "range": [
                21,
                23
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                23,
                109
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 4
                                      }
                                    },
                                    "range": [
                                      74,
                                      77
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "range": [
                                          76,
                                          77
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "range": [
                                        76,
                                        77
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 4
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    73,
                                    77
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 4
                                    }
                                  }
                                },
                                "init": null,
                                "range": [
                                  73,
                                  77
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 4
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              69,
                              78
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                91,
                                92
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              91,
                              93
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          55,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        },
                        "range": [
                          43,
                          49
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
                                44,
                                45
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 3
                                },
                                "start": {
                                  "column": 16,
                                  "line": 3
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              44,
                              45
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 3
                              },
                              "start": {
                                "column": 16,
                                "line": 3
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
                              "name": "X",
                              "optional": false,
                              "range": [
                                47,
                                48
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 3
                                },
                                "start": {
                                  "column": 19,
                                  "line": 3
                                }
                              }
                            },
                            "out": false,
                            "range": [
                              47,
                              48
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 3
                              },
                              "start": {
                                "column": 19,
                                "line": 3
                              }
                            }
                          }
                        ]
                      },
                      "range": [
                        43,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      36,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  26,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              109
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
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
            "line": 8
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
        "name": "A",
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
        111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
