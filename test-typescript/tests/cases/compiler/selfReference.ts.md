__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    83
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asFunction",
        "optional": false,
        "range": [
          17,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            },
            "range": [
              36,
              39
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  38,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 1
                  },
                  "start": {
                    "column": 38,
                    "line": 1
                  }
                }
              },
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            }
          },
          "range": [
            31,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 1
          },
          "start": {
            "column": 40,
            "line": 1
          }
        },
        "range": [
          40,
          49
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            },
            "range": [
              45,
              49
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  48,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 1
                  },
                  "start": {
                    "column": 48,
                    "line": 1
                  }
                }
              },
              "range": [
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              }
            }
          },
          "range": [
            42,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
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
                28,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 28,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        50
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 1
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
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      77,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    70,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 19,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                68,
                81
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              62,
              81
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "asFunction",
          "optional": false,
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          51,
          82
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        51,
        83
      ],
      "loc": {
        "end": {
          "column": 32,
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
      "column": 32,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
