__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    38
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        37
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "pkg",
          "optional": false,
          "range": [
            24,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          },
          "range": [
            29,
            36
          ],
          "typeAnnotation": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"pkg\"",
              "value": "pkg",
              "range": [
                31,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 31,
                  "line": 1
                }
              }
            },
            "range": [
              31,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 1
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    28
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"shared\"",
        "value": "shared",
        "range": [
          18,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
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
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
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
