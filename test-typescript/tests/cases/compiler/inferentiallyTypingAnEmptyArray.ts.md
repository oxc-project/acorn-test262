__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1025,
    1075
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
        "name": "foo",
        "optional": false,
        "range": [
          1042,
          1045
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 16
              },
              "start": {
                "column": 27,
                "line": 16
              }
            },
            "range": [
              1052,
              1057
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1054,
                    1055
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 16
                    },
                    "start": {
                      "column": 29,
                      "line": 16
                    }
                  }
                },
                "range": [
                  1054,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 16
                  },
                  "start": {
                    "column": 29,
                    "line": 16
                  }
                }
              },
              "range": [
                1054,
                1057
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 16
                },
                "start": {
                  "column": 29,
                  "line": 16
                }
              }
            }
          },
          "range": [
            1049,
            1057
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 16
            },
            "start": {
              "column": 24,
              "line": 16
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 36,
            "line": 16
          },
          "start": {
            "column": 33,
            "line": 16
          }
        },
        "range": [
          1058,
          1061
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1060,
              1061
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 16
              },
              "start": {
                "column": 35,
                "line": 16
              }
            }
          },
          "range": [
            1060,
            1061
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 16
            },
            "start": {
              "column": 35,
              "line": 16
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 16
          },
          "start": {
            "column": 20,
            "line": 16
          }
        },
        "range": [
          1045,
          1048
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
                1046,
                1047
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 21,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              1046,
              1047
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 21,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        1025,
        1062
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                1067,
                1069
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1063,
              1066
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "range": [
            1063,
            1070
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            1071,
            1074
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 17
            },
            "start": {
              "column": 8,
              "line": 17
            }
          }
        },
        "range": [
          1063,
          1074
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        1063,
        1075
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 16
    }
  },
  "hashbang": null
}
```
