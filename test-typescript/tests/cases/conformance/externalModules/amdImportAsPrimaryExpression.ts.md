__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    26
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        25
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            15,
            25
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  18,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 2
                  },
                  "start": {
                    "column": 1,
                    "line": 2
                  }
                }
              },
              "range": [
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 2
                },
                "start": {
                  "column": 1,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  20,
                  21
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 2
                  },
                  "start": {
                    "column": 3,
                    "line": 2
                  }
                }
              },
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  22,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              },
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 5,
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
              "column": 15,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "E1",
          "optional": false,
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
          7,
          25
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
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
          "column": 1,
          "line": 3
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    149
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
          "raw": "\"./foo_0\"",
          "value": "./foo_0",
          "range": [
            21,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
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
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          51,
          148
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                36,
                39
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "E1",
              "optional": false,
              "range": [
                40,
                42
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              36,
              42
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              43,
              44
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
              }
            }
          },
          "range": [
            36,
            44
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 3,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            49,
            50
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "range": [
          36,
          50
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 3,
            "line": 2
          }
        }
      },
      "range": [
        33,
        148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
