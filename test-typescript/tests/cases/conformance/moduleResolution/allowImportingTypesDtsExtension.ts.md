__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    49
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        48
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "User",
          "optional": false,
          "range": [
            20,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "range": [
                  33,
                  37
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
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
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                33,
                46
              ],
              "loc": {
                "end": {
                  "column": 17,
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
            27,
            48
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "range": [
          7,
          48
        ],
        "loc": {
          "end": {
            "column": 1,
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
    206
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./types.d.ts\"",
        "value": "./types.d.ts",
        "range": [
          26,
          40
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 26,
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
            "name": "User",
            "optional": false,
            "range": [
              14,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "range": [
              14,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "range": [
            14,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
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
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "raw": "\"./types.d.ts\"",
        "value": "./types.d.ts",
        "range": [
          68,
          82
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 2
          },
          "start": {
            "column": 26,
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
            "name": "User",
            "optional": false,
            "range": [
              56,
              60
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
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "range": [
              56,
              60
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
            56,
            60
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
        }
      ],
      "range": [
        42,
        83
      ],
      "loc": {
        "end": {
          "column": 41,
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
        85,
        128
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
              "name": "user",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                },
                "range": [
                  102,
                  108
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "User",
                    "optional": false,
                    "range": [
                      104,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    104,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                98,
                108
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "range": [
                      113,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"John\"",
                    "value": "John",
                    "range": [
                      119,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    113,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 28,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                111,
                127
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 26,
                  "line": 4
                }
              }
            },
            "range": [
              98,
              127
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          92,
          128
        ],
        "loc": {
          "end": {
            "column": 43,
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
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        130,
        205
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "user",
                "optional": false,
                "range": [
                  198,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 7
                  }
                }
              },
              "range": [
                191,
                203
              ],
              "loc": {
                "end": {
                  "column": 16,
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
            185,
            205
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 55,
              "line": 6
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getUser",
          "optional": false,
          "range": [
            146,
            153
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 6
            },
            "start": {
              "column": 16,
              "line": 6
            }
          }
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 54,
              "line": 6
            },
            "start": {
              "column": 25,
              "line": 6
            }
          },
          "range": [
            155,
            184
          ],
          "typeAnnotation": {
            "type": "TSImportType",
            "range": [
              157,
              184
            ],
            "argument": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "\"./types.d.ts\"",
                "value": "./types.d.ts",
                "range": [
                  164,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 6
                  }
                }
              },
              "range": [
                164,
                178
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 6
                }
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "decorators": [],
              "name": "User",
              "optional": false,
              "range": [
                180,
                184
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 6
                },
                "start": {
                  "column": 50,
                  "line": 6
                }
              }
            },
            "typeArguments": null,
            "loc": {
              "end": {
                "column": 54,
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
          137,
          205
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "column": 0,
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
