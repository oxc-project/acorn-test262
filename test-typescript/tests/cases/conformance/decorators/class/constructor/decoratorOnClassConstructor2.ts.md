__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    18,
    134
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        18,
        39
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            36,
            39
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 18,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "range": [
            31,
            35
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          25,
          39
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "column": 21,
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
        40,
        133
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            130,
            133
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 4
            },
            "start": {
              "column": 90,
              "line": 4
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
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
              "column": 19,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              },
              "range": [
                66,
                74
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "range": [
                    68,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                },
                "range": [
                  68,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              60,
              74
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 20,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propertyKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 4
                },
                "start": {
                  "column": 47,
                  "line": 4
                }
              },
              "range": [
                87,
                104
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      89,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 49,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "range": [
                      98,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 4
                      },
                      "start": {
                        "column": 58,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  89,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 4
                  },
                  "start": {
                    "column": 49,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              76,
              104
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 4
              },
              "start": {
                "column": 36,
                "line": 4
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "parameterIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 88,
                  "line": 4
                },
                "start": {
                  "column": 80,
                  "line": 4
                }
              },
              "range": [
                120,
                128
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  122,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 4
                  },
                  "start": {
                    "column": 82,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              106,
              128
            ],
            "loc": {
              "end": {
                "column": 88,
                "line": 4
              },
              "start": {
                "column": 66,
                "line": 4
              }
            }
          }
        ],
        "range": [
          47,
          133
        ],
        "loc": {
          "end": {
            "column": 93,
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
          "column": 93,
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
    143
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0.ts\"",
        "value": "./0.ts",
        "range": [
          19,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 19,
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
            "name": "base",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "range": [
              8,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            12
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0.ts\"",
        "value": "./0.ts",
        "range": [
          46,
          54
        ],
        "loc": {
          "end": {
            "column": 26,
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              36,
              39
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              36,
              39
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            36,
            39
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 8,
              "line": 2
            }
          }
        }
      ],
      "range": [
        28,
        54
      ],
      "loc": {
        "end": {
          "column": 26,
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
        55,
        143
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            83,
            143
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  89,
                  100
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  100,
                  141
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Super",
                          "range": [
                            127,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          127,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        127,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    117,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            102,
                            105
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          101,
                          105
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      },
                      "range": [
                        110,
                        115
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          112,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 27,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      106,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                89,
                141
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 28,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            68,
            69
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
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "range": [
            79,
            83
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 3
            }
          }
        },
        "range": [
          62,
          143
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
          "column": 1,
          "line": 7
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
      "column": 1,
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
