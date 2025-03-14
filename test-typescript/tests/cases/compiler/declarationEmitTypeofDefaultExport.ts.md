__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "range": [
        0,
        25
      ],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            23,
            25
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
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
        "implements": [],
        "superClass": null,
        "range": [
          15,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
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
          "column": 25,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "EmptyStatement",
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
    52
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          19,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
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
        25
      ],
      "loc": {
        "end": {
          "column": 25,
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
      "declaration": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            41,
            42
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "range": [
            43,
            50
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          41,
          50
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "range": [
        26,
        51
      ],
      "loc": {
        "end": {
          "column": 25,
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
