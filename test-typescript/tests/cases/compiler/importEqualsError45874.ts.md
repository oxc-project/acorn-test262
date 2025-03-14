__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    107
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              22,
              43
            ],
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  34,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  40,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "range": [
                29,
                43
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              46,
              68
            ],
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      59,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      65,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 21,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    59,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                53,
                68
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          18,
          70
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          17
        ],
        "decorators": [],
        "name": "globals",
        "optional": false,
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        70
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
        "name": "Foo",
        "optional": false,
        "range": [
          78,
          81
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "globals",
            "optional": false,
            "range": [
              84,
              91
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              92,
              100
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          },
          "range": [
            84,
            100
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Blah",
          "optional": false,
          "range": [
            101,
            105
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 5
            },
            "start": {
              "column": 30,
              "line": 5
            }
          }
        },
        "range": [
          84,
          105
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        }
      },
      "range": [
        71,
        106
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 6
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
    16
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        15
      ],
      "loc": {
        "end": {
          "column": 15,
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
