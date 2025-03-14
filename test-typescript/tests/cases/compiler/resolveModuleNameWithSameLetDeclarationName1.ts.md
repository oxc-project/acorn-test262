__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    71
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                41,
                49
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                37,
                40
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              27,
              49
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          20,
          51
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          16,
          19
        ],
        "decorators": [],
        "name": "foo",
        "optional": false,
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
      "kind": "module",
      "range": [
        1,
        51
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 1,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              },
              "range": [
                60,
                69
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
                      62,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      66,
                      69
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    62,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  62,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 9,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              57,
              69
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            57,
            69
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        53,
        70
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 18,
      "line": 8
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
