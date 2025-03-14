__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    107
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                49,
                58
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              42,
              59
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          36,
          61
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 36,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          33
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
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
              12
            ],
            "loc": {
              "end": {
                "column": 12,
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
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      26,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 1
                      },
                      "start": {
                        "column": 26,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    },
                    "range": [
                      27,
                      30
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          29,
                          30
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 1
                          },
                          "start": {
                            "column": 29,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        29,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 1
                        },
                        "start": {
                          "column": 29,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    26,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                24,
                32
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                14,
                15
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              14,
              32
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            62,
            63
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            63,
            86
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                64,
                70
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      74,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    },
                    "range": [
                      75,
                      83
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        77,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    74,
                    83
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
                }
              ],
              "range": [
                72,
                85
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 1,
              "line": 4
            }
          }
        },
        "range": [
          62,
          88
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        62,
        89
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
