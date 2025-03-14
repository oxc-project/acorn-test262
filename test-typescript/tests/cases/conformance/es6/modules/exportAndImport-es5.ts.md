__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    33
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        0,
        32
      ],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            29,
            32
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 2
            },
            "start": {
              "column": 29,
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
          "name": "f1",
          "optional": false,
          "range": [
            24,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          15,
          32
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
          "column": 1,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    66
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./m1\"",
        "value": "./m1",
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            9
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f1",
            "optional": false,
            "range": [
              7,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 9,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        22
      ],
      "loc": {
        "end": {
          "column": 22,
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
        23,
        65
      ],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "range": [
                    58,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  58,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "range": [
                58,
                63
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            52,
            65
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 29,
              "line": 2
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            47,
            49
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [],
        "range": [
          38,
          65
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
