__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    239
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              18,
              46
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  42,
                  46
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 5
                  },
                  "start": {
                    "column": 1,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFace",
                "optional": false,
                "range": [
                  35,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              "range": [
                25,
                46
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              49,
              94
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  90,
                  94
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 9
                  },
                  "start": {
                    "column": 1,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "SomeClass",
                "optional": false,
                "range": [
                  62,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFace",
                    "optional": false,
                    "range": [
                      83,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 35,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    83,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                56,
                94
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 7
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              97,
              149
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  145,
                  149
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 13
                  },
                  "start": {
                    "column": 1,
                    "line": 12
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Derived",
                "optional": false,
                "range": [
                  110,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 14,
                    "line": 11
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getClass",
                  "optional": false,
                  "range": [
                    126,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 11
                    },
                    "start": {
                      "column": 30,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    134,
                    141
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFace",
                        "optional": false,
                        "range": [
                          135,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 11
                          },
                          "start": {
                            "column": 39,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        135,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 11
                        },
                        "start": {
                          "column": 39,
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
                      "column": 38,
                      "line": 11
                    }
                  }
                },
                "range": [
                  126,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 11
                  },
                  "start": {
                    "column": 30,
                    "line": 11
                  }
                }
              },
              "range": [
                104,
                149
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 13
              },
              "start": {
                "column": 1,
                "line": 11
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              152,
              236
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
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeClass",
                        "optional": false,
                        "range": [
                          207,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 17
                          },
                          "start": {
                            "column": 9,
                            "line": 17
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 17
                            },
                            "start": {
                              "column": 29,
                              "line": 17
                            }
                          },
                          "range": [
                            227,
                            231
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                230,
                                231
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 17
                                },
                                "start": {
                                  "column": 32,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              230,
                              231
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 17
                              },
                              "start": {
                                "column": 32,
                                "line": 17
                              }
                            }
                          }
                        },
                        "range": [
                          221,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        207,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      200,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 17
                      },
                      "start": {
                        "column": 2,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  196,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 18
                  },
                  "start": {
                    "column": 1,
                    "line": 16
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "getClass",
                "optional": false,
                "range": [
                  168,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 15
                  },
                  "start": {
                    "column": 31,
                    "line": 15
                  }
                },
                "range": [
                  182,
                  194
                ],
                "typeAnnotation": {
                  "type": "TSConstructorType",
                  "abstract": false,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    },
                    "range": [
                      190,
                      194
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          193,
                          194
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 15
                          },
                          "start": {
                            "column": 42,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        193,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 42,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    184,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 15
                    },
                    "start": {
                      "column": 33,
                      "line": 15
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 25,
                    "line": 15
                  }
                },
                "range": [
                  176,
                  179
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
                        177,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 15
                        },
                        "start": {
                          "column": 26,
                          "line": 15
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      177,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    }
                  }
                ]
              },
              "range": [
                159,
                236
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 2,
                "line": 18
              },
              "start": {
                "column": 1,
                "line": 15
              }
            }
          }
        ],
        "range": [
          15,
          238
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          14
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        238
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
