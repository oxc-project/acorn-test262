__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    21
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"foo\"",
        "value": "foo",
        "range": [
          15,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
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
      "column": 21,
      "line": 1
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
    97,
    130
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          104,
          107
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"foo\"",
          "value": "foo",
          "range": [
            118,
            123
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 3
            },
            "start": {
              "column": 21,
              "line": 3
            }
          }
        },
        "range": [
          110,
          124
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "range": [
        97,
        125
      ],
      "loc": {
        "end": {
          "column": 28,
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
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          126,
          129
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        126,
        130
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 4,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
