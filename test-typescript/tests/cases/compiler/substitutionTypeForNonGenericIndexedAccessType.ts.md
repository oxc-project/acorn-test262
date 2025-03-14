__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    90
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          12,
          14
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          10,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          21,
          22
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              25,
              26
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            25,
            26
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 9,
              "line": 3
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              41,
              56
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    42,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                },
                "range": [
                  42,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  49,
                  55
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 33,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              35,
              41
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          "range": [
            35,
            56
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "falseType": {
          "type": "TSStringKeyword",
          "range": [
            70,
            76
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 3
            },
            "start": {
              "column": 54,
              "line": 3
            }
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'foo'",
              "value": "foo",
              "range": [
                61,
                66
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 45,
                  "line": 3
                }
              }
            },
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 45,
                "line": 3
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 43,
                  "line": 3
                }
              }
            },
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 43,
                "line": 3
              }
            }
          },
          "range": [
            59,
            67
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 43,
              "line": 3
            }
          }
        },
        "range": [
          25,
          76
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "range": [
        16,
        77
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
