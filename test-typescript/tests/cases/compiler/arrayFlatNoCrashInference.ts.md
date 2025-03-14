__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    72
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "depth",
                  "optional": false,
                  "range": [
                    63,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "range": [
                    54,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flat",
                  "optional": false,
                  "range": [
                    58,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                },
                "range": [
                  54,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                54,
                69
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              47,
              70
            ],
            "loc": {
              "end": {
                "column": 27,
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
          41,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 41,
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
        "name": "foo",
        "optional": false,
        "range": [
          9,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            },
            "range": [
              19,
              24
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
                    21,
                    22
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                },
                "range": [
                  21,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              },
              "range": [
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            }
          },
          "range": [
            16,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "depth",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            },
            "range": [
              31,
              39
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          },
          "range": [
            26,
            39
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        },
        "range": [
          12,
          15
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
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              13,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        72
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
