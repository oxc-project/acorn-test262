__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    142
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./obj\"",
        "value": "./obj",
        "range": [
          80,
          87
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "range": [
              66,
              72
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "range": [
              66,
              72
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          },
          "range": [
            66,
            72
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 3
            },
            "start": {
              "column": 9,
              "line": 3
            }
          }
        }
      ],
      "range": [
        57,
        88
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        90,
        114
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
              "name": "_",
              "optional": false,
              "range": [
                103,
                104
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "range": [
                107,
                113
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              }
            },
            "range": [
              103,
              113
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          97,
          114
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 24,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 3,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
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
    86
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        85
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
              "name": "object",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 1
                  }
                },
                "range": [
                  27,
                  84
                ],
                "typeAnnotation": {
                  "type": "TSImportType",
                  "range": [
                    29,
                    84
                  ],
                  "argument": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"./id\"",
                      "value": "./id",
                      "range": [
                        36,
                        42
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 1
                        },
                        "start": {
                          "column": 36,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      36,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 1
                      },
                      "start": {
                        "column": 36,
                        "line": 1
                      }
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "range": [
                      44,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 1
                      },
                      "start": {
                        "column": 44,
                        "line": 1
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      46,
                      84
                    ],
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "range": [
                                53,
                                56
                              ],
                              "loc": {
                                "end": {
                                  "column": 7,
                                  "line": 2
                                },
                                "start": {
                                  "column": 4,
                                  "line": 2
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
                                  "column": 31,
                                  "line": 2
                                },
                                "start": {
                                  "column": 7,
                                  "line": 2
                                }
                              },
                              "range": [
                                56,
                                80
                              ],
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "range": [
                                  58,
                                  80
                                ],
                                "argument": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"./id\"",
                                    "value": "./id",
                                    "range": [
                                      65,
                                      71
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    65,
                                    71
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 2
                                    }
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Id",
                                  "optional": false,
                                  "range": [
                                    74,
                                    76
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 2
                                    }
                                  }
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    76,
                                    80
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [],
                                      "range": [
                                        77,
                                        79
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 2
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 2
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 2
                                    }
                                  }
                                },
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              53,
                              81
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
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
                          47,
                          83
                        ],
                        "loc": {
                          "end": {
                            "column": 1,
                            "line": 3
                          },
                          "start": {
                            "column": 47,
                            "line": 1
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 2,
                        "line": 3
                      },
                      "start": {
                        "column": 46,
                        "line": 1
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 2,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                21,
                84
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              21,
              84
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ],
        "declare": true,
        "kind": "const",
        "range": [
          7,
          85
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 3
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
          "column": 3,
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
      "line": 4
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
    23
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
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "range": [
            12,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              20,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          },
          "range": [
            20,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          },
          "range": [
            14,
            17
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
                  15,
                  16
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                15,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          ]
        },
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
      "exportKind": "type",
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
