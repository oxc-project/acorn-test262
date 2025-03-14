__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    79
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  15,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                },
                "range": [
                  20,
                  27
                ],
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "range": [
                    22,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                15,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            13,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  40,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 1
                  },
                  "start": {
                    "column": 45,
                    "line": 1
                  }
                },
                "range": [
                  45,
                  54
                ],
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        53,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 1
                        },
                        "start": {
                          "column": 53,
                          "line": 1
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      53,
                      54
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 1
                      },
                      "start": {
                        "column": 53,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    47,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 1
                    },
                    "start": {
                      "column": 47,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                40,
                54
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            38,
            56
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              63,
              68
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 1
              },
              "start": {
                "column": 63,
                "line": 1
              }
            }
          },
          "range": [
            63,
            68
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 1
            },
            "start": {
              "column": 63,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 1
              },
              "start": {
                "column": 59,
                "line": 1
              }
            }
          },
          "range": [
            59,
            60
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 1
            },
            "start": {
              "column": 59,
              "line": 1
            }
          }
        },
        "range": [
          13,
          68
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        69
      ],
      "loc": {
        "end": {
          "column": 69,
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
      "column": 0,
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
