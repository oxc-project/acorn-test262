__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    71
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AX",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              },
              "range": [
                22,
                37
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    31,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                },
                "range": [
                  24,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ],
        "range": [
          10,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        40
      ],
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        41,
        71
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
              "name": "A",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                },
                "range": [
                  55,
                  59
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AX",
                    "optional": false,
                    "range": [
                      57,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    57,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                54,
                59
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  62,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  67,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              },
              "range": [
                62,
                70
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              54,
              70
            ],
            "loc": {
              "end": {
                "column": 29,
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
          48,
          71
        ],
        "loc": {
          "end": {
            "column": 30,
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
          "column": 30,
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
      "column": 30,
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
    45
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          18,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 18,
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
            "name": "A",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
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
            "name": "A",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
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
            10
          ],
          "loc": {
            "end": {
              "column": 10,
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
      "type": "ExportNamedDeclaration",
      "range": [
        25,
        45
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
              "name": "A1",
              "optional": false,
              "range": [
                38,
                40
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
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
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              38,
              44
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
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          32,
          45
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "column": 20,
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
      "column": 20,
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
