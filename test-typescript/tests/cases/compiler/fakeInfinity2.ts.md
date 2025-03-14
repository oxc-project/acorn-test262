__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    195
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        50
      ],
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "body": {
          "type": "TSEnumBody",
          "range": [
            16,
            50
          ],
          "members": [
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  22,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "initializer": {
                "type": "Literal",
                "raw": "1e999",
                "value": 1e+400,
                "range": [
                  26,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              },
              "range": [
                22,
                31
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "TSEnumMember",
              "computed": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  37,
                  38
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
              "initializer": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Literal",
                  "raw": "1e999",
                  "value": 1e+400,
                  "range": [
                    42,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 3
                    },
                    "start": {
                      "column": 9,
                      "line": 3
                    }
                  }
                },
                "operator": "-",
                "prefix": true,
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              },
              "range": [
                37,
                47
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "const": false,
        "declare": false,
        "id": {
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
          50
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                75,
                76
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "1e999",
                "value": 1e+400,
                "range": [
                  79,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "range": [
                79,
                84
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "range": [
              70,
              85
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                95,
                96
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "2e999",
                "value": 1e+400,
                "range": [
                  99,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              },
              "range": [
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              90,
              105
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              111,
              167
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "range": [
                          154,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        150,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 14,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      144,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  134,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  127,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                },
                "range": [
                  130,
                  133
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      132,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 25,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    132,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                118,
                167
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          64,
          169
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          62,
          63
        ],
        "decorators": [],
        "name": "X",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "kind": "namespace",
      "range": [
        52,
        169
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        171,
        194
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
              "name": "m",
              "optional": false,
              "range": [
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    188,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    190,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 15
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                },
                "range": [
                  188,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                188,
                193
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              }
            },
            "range": [
              184,
              193
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 13,
                "line": 15
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          178,
          194
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
