__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    89
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        89
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            21,
            89
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "protected",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "range": [
                  37,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
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
                  45,
                  87
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          77,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        70,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    60,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 37,
                      "line": 2
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 29,
                          "line": 2
                        }
                      },
                      "range": [
                        52,
                        55
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            54,
                            55
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 2
                            },
                            "start": {
                              "column": 31,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          54,
                          55
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 2
                          },
                          "start": {
                            "column": 31,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      49,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 2
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  },
                  "range": [
                    56,
                    59
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        58,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      58,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  },
                  "range": [
                    45,
                    48
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
                          46,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 23,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        46,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 23,
                          "line": 2
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                27,
                87
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
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
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "range": [
            13,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          89
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
