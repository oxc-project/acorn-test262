__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    88
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./obj.ts\"",
        "value": "./obj.ts",
        "range": [
          23,
          33
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 1
          },
          "start": {
            "column": 23,
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
            "name": "object",
            "optional": false,
            "range": [
              9,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "name": "object",
            "optional": false,
            "range": [
              9,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
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
            15
          ],
          "loc": {
            "end": {
              "column": 15,
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
        34
      ],
      "loc": {
        "end": {
          "column": 34,
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
        60
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
                49,
                50
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
              "type": "Identifier",
              "decorators": [],
              "name": "object",
              "optional": false,
              "range": [
                53,
                59
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              49,
              59
            ],
            "loc": {
              "end": {
                "column": 23,
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
          43,
          60
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "column": 24,
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
      "column": 3,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    92
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        91
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
                  90
                ],
                "typeAnnotation": {
                  "type": "TSImportType",
                  "range": [
                    29,
                    90
                  ],
                  "argument": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"./id.ts\"",
                      "value": "./id.ts",
                      "range": [
                        36,
                        45
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
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
                      45
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
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
                      47,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 1
                      },
                      "start": {
                        "column": 47,
                        "line": 1
                      }
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      49,
                      90
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
                                56,
                                59
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
                                  "column": 34,
                                  "line": 2
                                },
                                "start": {
                                  "column": 7,
                                  "line": 2
                                }
                              },
                              "range": [
                                59,
                                86
                              ],
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "range": [
                                  61,
                                  86
                                ],
                                "argument": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"./id.ts\"",
                                    "value": "./id.ts",
                                    "range": [
                                      68,
                                      77
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 2
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 2
                                      }
                                    }
                                  },
                                  "range": [
                                    68,
                                    77
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
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
                                    80,
                                    82
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
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    82,
                                    86
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeLiteral",
                                      "members": [],
                                      "range": [
                                        83,
                                        85
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 2
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 2
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 2
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 2
                                    }
                                  }
                                },
                                "loc": {
                                  "end": {
                                    "column": 34,
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
                              56,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
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
                          50,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 1,
                            "line": 3
                          },
                          "start": {
                            "column": 50,
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
                        "column": 49,
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
                90
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
              90
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
          91
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
