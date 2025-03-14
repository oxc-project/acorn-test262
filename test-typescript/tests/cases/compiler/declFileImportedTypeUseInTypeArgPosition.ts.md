__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    157
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          17
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "List",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          13
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
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        17
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 1
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                56,
                63
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 3
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
                52,
                55
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              46,
              63
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          40,
          65
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 2
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "'mod1'",
        "value": "mod1",
        "range": [
          33,
          39
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "range": [
        18,
        65
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "raw": "'mod1'",
                "value": "mod1",
                "range": [
                  113,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              },
              "range": [
                105,
                120
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              94,
              121
            ],
            "loc": {
              "end": {
                "column": 31,
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
              126,
              152
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      },
                      "range": [
                        138,
                        151
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            144,
                            151
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    145,
                                    146
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 9
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "range": [
                                    147,
                                    150
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  145,
                                  150
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                145,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 9
                                },
                                "start": {
                                  "column": 23,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 22,
                              "line": 9
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "range": [
                            140,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 9
                            },
                            "start": {
                              "column": 18,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          140,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 9
                          },
                          "start": {
                            "column": 18,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      137,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 15,
                        "line": 9
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    137,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                133,
                152
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          88,
          154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 21,
            "line": 7
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "'moo'",
        "value": "moo",
        "range": [
          82,
          87
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "range": [
        67,
        154
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
