__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    83
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        24,
        60
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Data",
          "optional": false,
          "range": [
            36,
            40
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                43,
                49
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            {
              "type": "TSBooleanKeyword",
              "range": [
                52,
                59
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            }
          ],
          "range": [
            43,
            59
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        },
        "range": [
          31,
          60
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                68,
                74
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "range": [
                    70,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  70,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              65,
              74
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              77,
              81
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          "range": [
            65,
            81
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        61,
        82
      ],
      "loc": {
        "end": {
          "column": 21,
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
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 3
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
    78
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0\"",
        "value": "./0",
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
            "name": "Z",
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
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
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
            "name": "v",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Literal",
              "raw": "\"str\"",
              "value": "str",
              "range": [
                51,
                56
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                60,
                64
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              51,
              64
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            47,
            64
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        43,
        65
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        }
      ],
      "range": [
        66,
        78
      ],
      "loc": {
        "end": {
          "column": 12,
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
      "column": 12,
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
