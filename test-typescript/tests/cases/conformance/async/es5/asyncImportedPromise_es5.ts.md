__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    44
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        43
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            40,
            43
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 43,
              "line": 1
            },
            "start": {
              "column": 40,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Task",
          "optional": false,
          "range": [
            13,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "range": [
            29,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            36,
            39
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 37,
                    "line": 1
                  }
                }
              },
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 37,
                  "line": 1
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          },
          "range": [
            17,
            20
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
                  18,
                  19
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          43
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 1
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
          "column": 43,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    89
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./task\"",
        "value": "./task",
        "range": [
          21,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
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
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Task",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
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
            "name": "Task",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
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
            13
          ],
          "loc": {
            "end": {
              "column": 13,
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
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          42,
          89
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "example",
              "optional": false,
              "range": [
                54,
                61
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                61,
                87
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "range": [
                      78,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  76,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                },
                "range": [
                  66,
                  75
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      72,
                      75
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            73,
                            74
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 3
                            },
                            "start": {
                              "column": 29,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          73,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Task",
                    "optional": false,
                    "range": [
                      68,
                      72
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
                    68,
                    75
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 24,
                      "line": 3
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                },
                "range": [
                  61,
                  64
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
                        62,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      62,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 43,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              48,
              87
            ],
            "loc": {
              "end": {
                "column": 43,
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
            "column": 11,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          37,
          41
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        31,
        89
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
