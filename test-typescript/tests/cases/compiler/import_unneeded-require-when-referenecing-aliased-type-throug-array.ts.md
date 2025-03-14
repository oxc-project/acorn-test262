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
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                44,
                73
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      54,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    },
                    "range": [
                      58,
                      66
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        60,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    54,
                    67
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
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                39,
                43
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              29,
              73
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "range": [
                87,
                91
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              78,
              92
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          23,
          94
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
        "raw": "\"ITest\"",
        "value": "ITest",
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
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
      "line": 7
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
    30,
    113
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "range": [
          37,
          42
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'ITest'",
          "value": "ITest",
          "range": [
            53,
            60
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        "range": [
          45,
          61
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "range": [
        30,
        62
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "testData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              },
              "range": [
                75,
                84
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ITest",
                    "optional": false,
                    "range": [
                      77,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    77,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                },
                "range": [
                  77,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              67,
              84
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
          },
          "init": null,
          "range": [
            67,
            84
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
      "kind": "var",
      "range": [
        63,
        85
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "testData",
                "optional": false,
                "range": [
                  94,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                94,
                105
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                106,
                110
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 4
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "range": [
              94,
              110
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            90,
            110
          ],
          "loc": {
            "end": {
              "column": 24,
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
      "kind": "var",
      "range": [
        86,
        111
      ],
      "loc": {
        "end": {
          "column": 25,
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
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
