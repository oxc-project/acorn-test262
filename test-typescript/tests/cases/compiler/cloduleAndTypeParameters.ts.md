__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    142
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          29,
          54
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                33,
                44
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 2,
                  "line": 2
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
                44,
                52
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  47,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              33,
              52
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 2
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
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          28
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    20,
                    23
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "range": [
                    24,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 24,
                      "line": 1
                    }
                  }
                },
                "range": [
                  20,
                  27
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        54
      ],
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
            "type": "ExportNamedDeclaration",
            "range": [
              71,
              114
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  92,
                  114
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        98,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 8
                        },
                        "start": {
                          "column": 4,
                          "line": 8
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      },
                      "range": [
                        103,
                        109
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          105,
                          109
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      98,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "range": [
                  88,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                78,
                114
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              118,
              140
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  135,
                  140
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Baz",
                "optional": false,
                "range": [
                  131,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                125,
                140
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "range": [
          67,
          142
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 11,
            "line": 6
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          63,
          66
        ],
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "loc": {
          "end": {
            "column": 10,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "kind": "module",
      "range": [
        56,
        142
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
