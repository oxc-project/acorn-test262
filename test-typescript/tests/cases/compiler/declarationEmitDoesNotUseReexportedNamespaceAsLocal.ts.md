__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        22
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            20,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 20,
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
          "name": "a",
          "optional": false,
          "range": [
            16,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
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
          "column": 22,
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
      "column": 22,
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
    109
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        38
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
              "name": "x",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ImportExpression",
                  "options": null,
                  "source": {
                    "type": "Literal",
                    "raw": "\"./sub\"",
                    "value": "./sub",
                    "range": [
                      28,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    21,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "range": [
                  17,
                  20
                ],
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
              "optional": false,
              "range": [
                17,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
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
          "column": 38,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "range": [
          51,
          52
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 12,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./sub\"",
        "value": "./sub",
        "range": [
          58,
          65
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 2
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "range": [
        39,
        66
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "add",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            },
            "range": [
              92,
              104
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  101,
                  104
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        102,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      102,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 3
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  94,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              },
              "range": [
                94,
                104
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            }
          },
          "range": [
            91,
            104
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 38,
            "line": 3
          }
        },
        "range": [
          105,
          108
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              107,
              108
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 40,
                "line": 3
              }
            }
          },
          "range": [
            107,
            108
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 3
            },
            "start": {
              "column": 40,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        },
        "range": [
          87,
          90
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        67,
        109
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 42,
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
