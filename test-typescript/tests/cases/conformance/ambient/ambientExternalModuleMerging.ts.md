__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    72
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "range": [
          7,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"M\"",
          "value": "M",
          "range": [
            19,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "range": [
          11,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
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
            "name": "x",
            "optional": false,
            "range": [
              50,
              51
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                54,
                55
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
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
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "range": [
              54,
              57
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
              }
            }
          },
          "range": [
            50,
            57
          ],
          "loc": {
            "end": {
              "column": 11,
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
        46,
        58
      ],
      "loc": {
        "end": {
          "column": 12,
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
            "name": "y",
            "optional": false,
            "range": [
              63,
              64
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
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 9,
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
              "name": "y",
              "optional": false,
              "range": [
                69,
                70
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              67,
              70
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            63,
            70
          ],
          "loc": {
            "end": {
              "column": 11,
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
        59,
        71
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
    107
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              25,
              46
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
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 16,
                          "line": 2
                        }
                      },
                      "range": [
                        37,
                        45
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          39,
                          45
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
                      36,
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    36,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                32,
                46
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          19,
          48
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"M\"",
        "value": "M",
        "range": [
          15,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
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
        48
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
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              84,
              105
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      },
                      "range": [
                        96,
                        104
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          98,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 18,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      95,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    95,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 15,
                      "line": 7
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                91,
                105
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          78,
          107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 19,
            "line": 6
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"M\"",
        "value": "M",
        "range": [
          74,
          77
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 6
          },
          "start": {
            "column": 15,
            "line": 6
          }
        }
      },
      "range": [
        59,
        107
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
