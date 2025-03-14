__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    17,
    60
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
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                32,
                52
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      34,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      43,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              31,
              52
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            31,
            52
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        17,
        53
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "argument": {
          "type": "TSNonNullExpression",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              54,
              55
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
          "range": [
            54,
            56
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          54,
          58
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        54,
        59
      ],
      "loc": {
        "end": {
          "column": 5,
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
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
