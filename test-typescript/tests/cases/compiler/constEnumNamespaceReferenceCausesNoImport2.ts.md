__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    108
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        107
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                38,
                105
              ],
              "attributes": [],
              "declaration": {
                "type": "TSEnumDeclaration",
                "body": {
                  "type": "TSEnumBody",
                  "range": [
                    69,
                    105
                  ],
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Some",
                        "optional": false,
                        "range": [
                          75,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 3
                          },
                          "start": {
                            "column": 4,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        75,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Values",
                        "optional": false,
                        "range": [
                          85,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        85,
                        91
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "TSEnumMember",
                      "computed": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Here",
                        "optional": false,
                        "range": [
                          97,
                          101
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 5
                          },
                          "start": {
                            "column": 4,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        97,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 5
                        },
                        "start": {
                          "column": 4,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 6
                    },
                    "start": {
                      "column": 33,
                      "line": 2
                    }
                  }
                },
                "const": true,
                "declare": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "range": [
                    56,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "range": [
                  45,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            34,
            107
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 34,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            33
          ],
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          107
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 1
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
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
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
    64
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./foo\"",
        "value": "./foo",
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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              12,
              15
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            39,
            42
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstEnumOnlyModule",
          "optional": false,
          "range": [
            43,
            62
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "range": [
          39,
          62
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        30,
        63
      ],
      "loc": {
        "end": {
          "column": 33,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    145
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          7,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
          "raw": "\"./reexport\"",
          "value": "./reexport",
          "range": [
            21,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        "range": [
          13,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "range": [
        0,
        35
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      133,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
                      }
                    }
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        104,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 9,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ConstFooEnum",
                      "optional": false,
                      "range": [
                        108,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      104,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 9,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Some",
                    "optional": false,
                    "range": [
                      121,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    104,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  99,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                90,
                91
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
              82,
              143
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          78,
          145
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 42,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "range": [
          45,
          50
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            },
            "range": [
              52,
              70
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    54,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConstFooEnum",
                  "optional": false,
                  "range": [
                    58,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                },
                "range": [
                  54,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                54,
                70
              ],
              "loc": {
                "end": {
                  "column": 34,
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
            51,
            70
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 2
          },
          "start": {
            "column": 35,
            "line": 2
          }
        },
        "range": [
          71,
          77
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            73,
            77
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 2
            },
            "start": {
              "column": 37,
              "line": 2
            }
          }
        }
      },
      "range": [
        36,
        145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
