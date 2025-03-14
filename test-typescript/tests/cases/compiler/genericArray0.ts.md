__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    75
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                14
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    6,
                    12
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 1
                    },
                    "start": {
                      "column": 6,
                      "line": 1
                    }
                  }
                },
                "range": [
                  6,
                  14
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 1
                  },
                  "start": {
                    "column": 6,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
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
        15
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "y",
            "optional": false,
            "range": [
              22,
              23
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              26,
              27
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            22,
            27
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        18,
        28
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
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
                  "name": "ys",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    },
                    "range": [
                      61,
                      66
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            63,
                            64
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
                        "range": [
                          63,
                          64
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
                      "range": [
                        63,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    59,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    69,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 7
                    },
                    "start": {
                      "column": 18,
                      "line": 7
                    }
                  }
                },
                "range": [
                  59,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              55,
              72
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          49,
          74
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 18,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          40,
          43
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        },
        "range": [
          43,
          46
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                44,
                45
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
            },
            "out": false,
            "range": [
              44,
              45
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
        ]
      },
      "range": [
        31,
        74
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
