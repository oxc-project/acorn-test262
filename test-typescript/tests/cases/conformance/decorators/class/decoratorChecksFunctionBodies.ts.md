__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    160
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          45,
          48
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "range": [
          23,
          27
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
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
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 15,
                "line": 2
              }
            },
            "range": [
              29,
              37
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                31,
                37
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            }
          },
          "range": [
            28,
            37
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        },
        "range": [
          38,
          44
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            40,
            44
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
        }
      },
      "range": [
        14,
        48
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          58,
          160
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
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
                              "range": [
                                93,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "3",
                              "value": 3,
                              "range": [
                                97,
                                98
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              93,
                              98
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          89,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                113,
                                114
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 8
                                },
                                "start": {
                                  "column": 13,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "range": [
                              108,
                              112
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            108,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          108,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            132,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 15,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          125,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      79,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 6
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        67,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 6
                        },
                        "start": {
                          "column": 7,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        70,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 6
                        },
                        "start": {
                          "column": 10,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "range": [
                        73,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 13,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    66,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "range": [
                  64,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                146,
                147
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                147,
                158
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  150,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 11
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
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              }
            },
            "range": [
              64,
              158
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 5
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
          56,
          57
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        50,
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
