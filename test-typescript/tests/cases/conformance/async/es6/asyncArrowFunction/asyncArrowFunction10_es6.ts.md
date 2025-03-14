__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    104
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
            "name": "foo",
            "optional": false,
            "range": [
              4,
              7
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": true,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 3
                            },
                            "start": {
                              "column": 8,
                              "line": 3
                            }
                          },
                          "range": [
                            93,
                            100
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "await",
                              "optional": false,
                              "range": [
                                95,
                                100
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 3
                                },
                                "start": {
                                  "column": 10,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              95,
                              100
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 3
                              },
                              "start": {
                                "column": 10,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          92,
                          100
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 7,
                            "line": 3
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        92,
                        100
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 3
                        },
                        "start": {
                          "column": 7,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    88,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 3,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                37,
                103
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              },
              "range": [
                18,
                33
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    27,
                    33
                  ],
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        28,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 1
                        },
                        "start": {
                          "column": 28,
                          "line": 1
                        }
                      }
                    }
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
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    20,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
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
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
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
              10,
              103
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            4,
            103
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        103
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "column": 0,
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
