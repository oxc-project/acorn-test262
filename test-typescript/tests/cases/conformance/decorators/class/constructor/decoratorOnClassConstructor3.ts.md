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
    177
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0\"",
        "value": "./0",
        "range": [
          19,
          24
        ],
        "loc": {
          "end": {
            "column": 24,
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./0\"",
        "value": "./0",
        "range": [
          43,
          48
        ],
        "loc": {
          "end": {
            "column": 23,
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
              33,
              36
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
              33,
              36
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
            33,
            36
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
        25,
        48
      ],
      "loc": {
        "end": {
          "column": 23,
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
        89,
        177
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            117,
            177
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  123,
                  134
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                  134,
                  175
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
                            161,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          161,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        161,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    151,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 32,
                      "line": 6
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
                            136,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          135,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
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
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 6
                        }
                      },
                      "range": [
                        144,
                        149
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          146,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      140,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              },
              "range": [
                123,
                175
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 5
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
            102,
            103
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
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "range": [
            113,
            117
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "range": [
          96,
          177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
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
          "column": 1,
          "line": 9
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
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
