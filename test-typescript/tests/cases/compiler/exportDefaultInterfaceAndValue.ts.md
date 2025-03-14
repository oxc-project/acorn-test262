__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    100
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        0,
        41
      ],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            27,
            41
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                },
                "range": [
                  30,
                  38
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    32,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 32,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                29,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 1
            },
            "start": {
              "column": 27,
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
            25,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 25,
              "line": 1
            }
          }
        },
        "range": [
          15,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        42,
        81
      ],
      "declaration": {
        "type": "FunctionDeclaration",
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
                70,
                79
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 2
                },
                "start": {
                  "column": 28,
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
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "range": [
          57,
          81
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "loc": {
        "end": {
          "column": 39,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                95,
                98
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    97,
                    98
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  97,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              94,
              98
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            94,
            98
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        82,
        99
      ],
      "loc": {
        "end": {
          "column": 17,
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
