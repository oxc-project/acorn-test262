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
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        20
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            17,
            20
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            13,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
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
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "column": 20,
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
    100
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        35
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            32,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 32,
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
          "name": "bar",
          "optional": false,
          "range": [
            16,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              },
              "range": [
                21,
                30
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      23,
                      26
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 23,
                        "line": 1
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "range": [
                      27,
                      30
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    23,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                "range": [
                  23,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              20,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          7,
          35
        ],
        "loc": {
          "end": {
            "column": 35,
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
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          43,
          46
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./declFileAliasUseBeforeDeclaration_foo\"",
          "value": "./declFileAliasUseBeforeDeclaration_foo",
          "range": [
            57,
            98
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "range": [
          49,
          99
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 2
          },
          "start": {
            "column": 13,
            "line": 2
          }
        }
      },
      "range": [
        36,
        100
      ],
      "loc": {
        "end": {
          "column": 64,
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
      "column": 64,
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
