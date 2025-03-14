__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    19,
    119
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"inner/other.js\"",
        "value": "inner/other.js",
        "range": [
          41,
          57
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 2
          },
          "start": {
            "column": 22,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "range": [
              28,
              33
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "range": [
              28,
              33
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            28,
            33
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        19,
        58
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        74,
        119
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
              "name": "a",
              "optional": false,
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "options": null,
                    "source": {
                      "type": "Literal",
                      "raw": "\"inner\"",
                      "value": "inner",
                      "range": [
                        105,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 3
                        },
                        "start": {
                          "column": 31,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      98,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 3
                      },
                      "start": {
                        "column": 24,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    92,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 3
                    },
                    "start": {
                      "column": 18,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    115,
                    116
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 41,
                      "line": 3
                    }
                  }
                },
                "range": [
                  91,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                91,
                118
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              87,
              118
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          81,
          119
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 45,
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
      "column": 45,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
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
    19,
    50
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./other.js\"",
        "value": "./other.js",
        "range": [
          37,
          49
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              28,
              29
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            28,
            29
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        19,
        50
      ],
      "loc": {
        "end": {
          "column": 31,
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
      "column": 31,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 2
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
    19,
    73
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        19,
        44
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            42,
            44
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "range": [
            36,
            41
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          26,
          44
        ],
        "loc": {
          "end": {
            "column": 25,
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
          "column": 25,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        45,
        73
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                },
                "range": [
                  59,
                  72
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    },
                    "range": [
                      64,
                      72
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "range": [
                          67,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        67,
                        72
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                58,
                72
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": null,
            "range": [
              58,
              72
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          52,
          73
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 28,
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
      "column": 28,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
