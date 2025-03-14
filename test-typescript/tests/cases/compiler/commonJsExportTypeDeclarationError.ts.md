__ESTREE_TEST__:FAIL:
```json
'=' expected.
```
__ESTREE_TEST__:FAIL:
```json
Type expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    52
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./test\"",
        "value": "./test",
        "range": [
          17,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            11
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              7,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
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
              "column": 11,
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
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        27,
        51
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            39,
            43
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              46,
              50
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          },
          "range": [
            46,
            50
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        },
        "range": [
          34,
          51
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 2
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
