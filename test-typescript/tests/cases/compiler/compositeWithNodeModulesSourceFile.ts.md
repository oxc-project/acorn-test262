__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    19
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        18
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            18
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
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
        "implements": [],
        "superClass": null,
        "range": [
          7,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 18,
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
    58
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myModule",
        "optional": false,
        "range": [
          7,
          15
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"myModule\"",
          "value": "myModule",
          "range": [
            26,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 26,
              "line": 1
            }
          }
        },
        "range": [
          18,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "myModule",
            "optional": false,
            "range": [
              43,
              51
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "range": [
            43,
            53
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "range": [
          39,
          55
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        39,
        56
      ],
      "loc": {
        "end": {
          "column": 17,
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
