__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    93
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          27,
          30
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
          },
          "start": {
            "column": 27,
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
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              14,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              25
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  20,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 20,
                    "line": 1
                  }
                }
              },
              "range": [
                20,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          },
          "range": [
            11,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
        "type": "TaggedTemplateExpression",
        "quasi": {
          "type": "TemplateLiteral",
          "expressions": [
            {
              "type": "Literal",
              "raw": "\" should be converted to \"",
              "value": " should be converted to ",
              "range": [
                49,
                75
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            }
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "tail": false,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\u{1f4a9}'"
              },
              "range": [
                34,
                48
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
                }
              }
            },
            {
              "type": "TemplateElement",
              "tail": true,
              "value": {
                "cooked": "'💩'",
                "raw": "'\\uD83D\\uDCA9'"
              },
              "range": [
                76,
                92
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 4
                },
                "start": {
                  "column": 44,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            34,
            92
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 4
            },
            "start": {
              "column": 2,
              "line": 4
            }
          }
        },
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            32,
            33
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
          32,
          92
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        32,
        93
      ],
      "loc": {
        "end": {
          "column": 61,
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
      "column": 61,
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
