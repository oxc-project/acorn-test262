__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    245
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          44,
          68
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "range": [
                48,
                57
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              },
              "range": [
                57,
                65
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  59,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              48,
              66
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "range": [
          32,
          43
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        68
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          107,
          139
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doIt",
              "optional": false,
              "range": [
                111,
                115
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                115,
                137
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  135,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 26,
                    "line": 8
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
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    },
                    "range": [
                      121,
                      133
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          130,
                          133
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
                                131,
                                132
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 8
                                },
                                "start": {
                                  "column": 22,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              131,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 8
                              },
                              "start": {
                                "column": 22,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 21,
                            "line": 8
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "range": [
                          123,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        123,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    116,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "range": [
              111,
              137
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
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
            "column": 37,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          76,
          83
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 36,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 7
          }
        },
        "range": [
          83,
          106
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyInterface",
                "optional": false,
                "range": [
                  94,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "range": [
                94,
                105
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
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
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              84,
              105
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        70,
        139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          187,
          189
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 48,
            "line": 11
          },
          "start": {
            "column": 46,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MySubClass",
        "optional": false,
        "range": [
          147,
          157
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "range": [
          166,
          173
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 11
          },
          "start": {
            "column": 25,
            "line": 11
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          173,
          186
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyInterface",
              "optional": false,
              "range": [
                174,
                185
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 11
                },
                "start": {
                  "column": 33,
                  "line": 11
                }
              }
            },
            "range": [
              174,
              185
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 11
          },
          "start": {
            "column": 32,
            "line": 11
          }
        }
      },
      "range": [
        141,
        189
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          224,
          226
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 13
          },
          "start": {
            "column": 33,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          200,
          202
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            },
            "range": [
              206,
              222
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyClass",
                "optional": false,
                "range": [
                  215,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 24,
                    "line": 13
                  }
                }
              },
              "range": [
                208,
                222
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            }
          },
          "range": [
            203,
            222
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        }
      ],
      "range": [
        191,
        226
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        226,
        227
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 13
        },
        "start": {
          "column": 35,
          "line": 13
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MySubClass",
            "optional": false,
            "range": [
              232,
              242
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 15
              },
              "start": {
                "column": 3,
                "line": 15
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            229,
            231
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "optional": false,
        "range": [
          229,
          243
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        229,
        244
      ],
      "loc": {
        "end": {
          "column": 15,
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
      "line": 3
    }
  },
  "hashbang": null
}
```
