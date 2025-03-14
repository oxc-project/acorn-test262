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
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        27
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            24,
            27
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThingB",
          "optional": false,
          "range": [
            17,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "range": [
          7,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 27,
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
      "column": 27,
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
    25
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./thingB\"",
        "value": "./thingB",
        "range": [
          14,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
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
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 25,
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
    90
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./things\"",
        "value": "./things",
        "range": [
          24,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 24,
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
            "name": "things",
            "optional": false,
            "range": [
              12,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
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
            18
          ],
          "loc": {
            "end": {
              "column": 18,
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
        35
      ],
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
      "type": "ExportNamedDeclaration",
      "range": [
        36,
        89
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
              "name": "thing2",
              "optional": false,
              "range": [
                49,
                55
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  84,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 2
                  },
                  "start": {
                    "column": 48,
                    "line": 2
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 2
                      },
                      "start": {
                        "column": 28,
                        "line": 2
                      }
                    },
                    "range": [
                      64,
                      79
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "things",
                          "optional": false,
                          "range": [
                            66,
                            72
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 2
                            },
                            "start": {
                              "column": 30,
                              "line": 2
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThingB",
                          "optional": false,
                          "range": [
                            73,
                            79
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 2
                            },
                            "start": {
                              "column": 37,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          66,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        66,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    59,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                58,
                88
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "range": [
              49,
              88
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          43,
          89
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
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
