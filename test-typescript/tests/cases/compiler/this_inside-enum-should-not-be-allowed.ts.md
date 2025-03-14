__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    220
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          18,
          86
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisWasAllowedButShouldNotBe",
              "optional": false,
              "range": [
                24,
                52
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "initializer": {
              "type": "ThisExpression",
              "range": [
                55,
                59
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            },
            "range": [
              24,
              59
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TopLevelEnum",
        "optional": false,
        "range": [
          5,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        86
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "body": {
              "type": "TSEnumBody",
              "range": [
                130,
                218
              ],
              "members": [
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WasADifferentError",
                    "optional": false,
                    "range": [
                      140,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "initializer": {
                    "type": "ThisExpression",
                    "range": [
                      161,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 29,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    140,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInModule",
              "optional": false,
              "range": [
                117,
                129
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "range": [
              112,
              218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          106,
          220
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          95,
          105
        ],
        "decorators": [],
        "name": "ModuleEnum",
        "optional": false,
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        88,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
