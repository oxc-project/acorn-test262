__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    41
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        40
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            37,
            40
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 40,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IEventSourcedEntity",
          "optional": false,
          "range": [
            17,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
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
          40
        ],
        "loc": {
          "end": {
            "column": 40,
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
          "column": 40,
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
    140
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./bar\"",
        "value": "./bar",
        "range": [
          36,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 36,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "range": [
              9,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "IEventSourcedEntity",
            "optional": false,
            "range": [
              9,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        44
      ],
      "loc": {
        "end": {
          "column": 44,
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
        45,
        140
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DomainEntityConstructor",
          "optional": false,
          "range": [
            57,
            80
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 2
            },
            "start": {
              "column": 12,
              "line": 2
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 2
                  },
                  "start": {
                    "column": 82,
                    "line": 2
                  }
                },
                "range": [
                  127,
                  136
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TEntity",
                    "optional": false,
                    "range": [
                      129,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 2
                      },
                      "start": {
                        "column": 84,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    129,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 2
                    },
                    "start": {
                      "column": 84,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                122,
                137
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 2
                },
                "start": {
                  "column": 77,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            120,
            139
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 2
            },
            "start": {
              "column": 75,
              "line": 2
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 72,
              "line": 2
            },
            "start": {
              "column": 35,
              "line": 2
            }
          },
          "range": [
            80,
            117
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEventSourcedEntity",
                  "optional": false,
                  "range": [
                    97,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 2
                    },
                    "start": {
                      "column": 52,
                      "line": 2
                    }
                  }
                },
                "range": [
                  97,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
                    "line": 2
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TEntity",
                "optional": false,
                "range": [
                  81,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                81,
                116
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 2
                },
                "start": {
                  "column": 36,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          52,
          140
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 95,
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
      "column": 95,
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
