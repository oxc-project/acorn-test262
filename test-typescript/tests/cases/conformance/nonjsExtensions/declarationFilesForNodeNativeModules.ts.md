__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    53
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        53
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "doNativeThing",
          "optional": false,
          "range": [
            16,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "flag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              },
              "range": [
                34,
                42
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  36,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              30,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 52,
              "line": 1
            },
            "start": {
              "column": 43,
              "line": 1
            }
          },
          "range": [
            43,
            52
          ],
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "range": [
              45,
              52
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          53
        ],
        "loc": {
          "end": {
            "column": 53,
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
          "column": 53,
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
      "column": 53,
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
    0,
    70
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mod",
        "optional": false,
        "range": [
          7,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "raw": "\"./dir/native.node\"",
          "value": "./dir/native.node",
          "range": [
            21,
            40
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "range": [
          13,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        42
      ],
      "loc": {
        "end": {
          "column": 42,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"good\"",
            "value": "good",
            "range": [
              61,
              67
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 2
              },
              "start": {
                "column": 18,
                "line": 2
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "range": [
              43,
              46
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doNativeThing",
            "optional": false,
            "range": [
              47,
              60
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "range": [
            43,
            60
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
        },
        "optional": false,
        "range": [
          43,
          68
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
      },
      "range": [
        43,
        69
      ],
      "loc": {
        "end": {
          "column": 26,
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
