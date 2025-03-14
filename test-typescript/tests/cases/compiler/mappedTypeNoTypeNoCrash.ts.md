__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    78
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  27,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                }
              },
              "range": [
                27,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "range": [
              21,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          "nameType": null,
          "range": [
            14,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                50,
                51
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            },
            "range": [
              50,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "range": [
              43,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 56,
                    "line": 1
                  }
                }
              },
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 56,
                  "line": 1
                }
              }
            },
            "objectType": {
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
                    "column": 55,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              },
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 1
                },
                "start": {
                  "column": 54,
                  "line": 1
                }
              }
            },
            "range": [
              54,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 54,
                "line": 1
              }
            }
          },
          "range": [
            41,
            59
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 1
            },
            "start": {
              "column": 41,
              "line": 1
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            72,
            77
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 1
            },
            "start": {
              "column": 72,
              "line": 1
            }
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "range": [
            63,
            69
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 1
            },
            "start": {
              "column": 63,
              "line": 1
            }
          }
        },
        "range": [
          13,
          77
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        78
      ],
      "loc": {
        "end": {
          "column": 78,
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
      "column": 78,
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
