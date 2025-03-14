__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    47
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
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
              }
            },
            "range": [
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
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
        29,
        46
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            44,
            46
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 17,
              "line": 4
            },
            "start": {
              "column": 15,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "dec",
                "optional": false,
                "range": [
                  23,
                  26
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 3
                  },
                  "start": {
                    "column": 1,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                23,
                28
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            },
            "range": [
              22,
              28
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 3
              },
              "start": {
                "column": 0,
                "line": 3
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            42,
            43
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          36,
          46
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 17,
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
    123
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        58
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__esDecorate",
          "optional": false,
          "range": [
            24,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                40,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 40,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 44,
                  "line": 1
                }
              },
              "range": [
                44,
                51
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    46,
                    49
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 1
                    },
                    "start": {
                      "column": 46,
                      "line": 1
                    }
                  }
                },
                "range": [
                  46,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 46,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              37,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 57,
              "line": 1
            },
            "start": {
              "column": 52,
              "line": 1
            }
          },
          "range": [
            52,
            57
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              54,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 54,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          58
        ],
        "loc": {
          "end": {
            "column": 58,
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
          "column": 58,
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
        59,
        122
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__runInitializers",
          "optional": false,
          "range": [
            83,
            100
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 24,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                104,
                108
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 2
                },
                "start": {
                  "column": 49,
                  "line": 2
                }
              },
              "range": [
                108,
                115
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    110,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 2
                    },
                    "start": {
                      "column": 51,
                      "line": 2
                    }
                  }
                },
                "range": [
                  110,
                  115
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
              }
            },
            "range": [
              101,
              115
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 2
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 62,
              "line": 2
            },
            "start": {
              "column": 57,
              "line": 2
            }
          },
          "range": [
            116,
            121
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              118,
              121
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 2
              },
              "start": {
                "column": 59,
                "line": 2
              }
            }
          }
        },
        "range": [
          66,
          122
        ],
        "loc": {
          "end": {
            "column": 63,
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
          "column": 63,
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
