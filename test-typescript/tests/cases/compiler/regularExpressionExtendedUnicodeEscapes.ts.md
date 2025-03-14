__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    108
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
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                23
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "range": [
                      15,
                      21
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 1
                      },
                      "start": {
                        "column": 15,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    15,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 15,
                      "line": 1
                    }
                  }
                },
                "range": [
                  15,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              6,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "/\\u{10000}[\\u{10000}]/",
                "regex": {
                  "flags": "",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": null,
                "range": [
                  29,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 1,
                    "line": 2
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\u{10000}[\\u{10000}]/u",
                "regex": {
                  "flags": "u",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": null,
                "range": [
                  54,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "/\\u{10000}[\\u{10000}]/v",
                "regex": {
                  "flags": "v",
                  "pattern": "\\u{10000}[\\u{10000}]"
                },
                "value": null,
                "range": [
                  80,
                  103
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
              }
            ],
            "range": [
              26,
              106
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          "range": [
            6,
            106
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        107
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
