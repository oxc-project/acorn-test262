__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    54
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "everywhere",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    },
                    "range": [
                      41,
                      49
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        43,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    31,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "init": null,
                "range": [
                  31,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 24,
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
            "kind": "let",
            "range": [
              27,
              50
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          23,
          52
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"*.foo\"",
        "value": "*.foo",
        "range": [
          15,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        52
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    95
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"a.foo\"",
        "value": "a.foo",
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
            "name": "everywhere",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "name": "everywhere",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "range": [
              21,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "range": [
              21,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "range": [
            21,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 21,
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
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "onlyInA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      83,
                      91
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        85,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    76,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  76,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              72,
              92
            ],
            "loc": {
              "end": {
                "column": 22,
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
          68,
          94
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"a.foo\"",
        "value": "a.foo",
        "range": [
          60,
          67
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "range": [
        45,
        94
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    54
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"b.foo\"",
        "value": "b.foo",
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
            "name": "everywhere",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "name": "everywhere",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "range": [
              21,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "onlyInA",
            "optional": false,
            "range": [
              21,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "range": [
            21,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 21,
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
