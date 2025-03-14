__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    16,
    147
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
            "name": "iterableWithOptionalIterator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              },
              "range": [
                48,
                96
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "range": [
                          57,
                          63
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 3
                          },
                          "start": {
                            "column": 5,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": false,
                        "range": [
                          64,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        57,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 5,
                          "line": 3
                        }
                      }
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      },
                      "range": [
                        76,
                        94
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            86,
                            94
                          ],
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                87,
                                93
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 3
                                },
                                "start": {
                                  "column": 35,
                                  "line": 3
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "range": [
                            78,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 3
                            },
                            "start": {
                              "column": 26,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          78,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      56,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  50,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              20,
              96
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            20,
            96
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
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
        97
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          143,
          146
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 6
          },
          "start": {
            "column": 44,
            "line": 6
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
              "name": "v",
              "optional": false,
              "range": [
                108,
                109
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "init": null,
            "range": [
              108,
              109
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          104,
          109
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "iterableWithOptionalIterator",
        "optional": false,
        "range": [
          113,
          141
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 6
          }
        }
      },
      "range": [
        99,
        146
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
