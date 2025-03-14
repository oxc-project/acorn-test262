__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    106
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./intermediate'",
        "value": "./intermediate",
        "range": [
          30,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 30,
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
            "name": "intermediate",
            "optional": false,
            "range": [
              12,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
            24
          ],
          "loc": {
            "end": {
              "column": 24,
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
        46
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "ghost",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                58,
                78
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "intermediate",
                    "optional": false,
                    "range": [
                      60,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ghost",
                    "optional": false,
                    "range": [
                      73,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 2
                      },
                      "start": {
                        "column": 26,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    60,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                },
                "range": [
                  60,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              53,
              78
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "intermediate",
                "optional": false,
                "range": [
                  85,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 38,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Ghost",
                "optional": false,
                "range": [
                  98,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 2
                  },
                  "start": {
                    "column": 51,
                    "line": 2
                  }
                }
              },
              "range": [
                85,
                103
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            },
            "range": [
              81,
              105
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 2
              },
              "start": {
                "column": 34,
                "line": 2
              }
            }
          },
          "range": [
            53,
            105
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        47,
        105
      ],
      "loc": {
        "end": {
          "column": 58,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    29
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "'./ghost'",
        "value": "./ghost",
        "range": [
          19,
          28
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "range": [
        0,
        28
      ],
      "loc": {
        "end": {
          "column": 28,
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
    21
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        21
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            19,
            21
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ghost",
          "optional": false,
          "range": [
            13,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
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
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
