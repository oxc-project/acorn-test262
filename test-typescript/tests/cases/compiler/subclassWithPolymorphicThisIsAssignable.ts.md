__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    373
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          54,
          80
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "increment",
              "optional": false,
              "range": [
                60,
                69
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                71,
                77
              ],
              "typeAnnotation": {
                "type": "TSThisType",
                "range": [
                  73,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              60,
              78
            ],
            "loc": {
              "end": {
                "column": 22,
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
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "range": [
          45,
          53
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        35,
        80
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          177,
          180
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 45,
            "line": 7
          },
          "start": {
            "column": 42,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Document",
            "optional": false,
            "range": [
              168,
              176
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            }
          },
          "range": [
            168,
            176
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 7
            },
            "start": {
              "column": 33,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomDocument",
        "optional": false,
        "range": [
          145,
          159
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        135,
        180
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        182,
        372
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            229,
            372
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  235,
                  246
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                  246,
                  327
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
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              306,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 12
                              },
                              "start": {
                                "column": 8,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              311,
                              315
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            306,
                            315
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            315,
                            318
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "range": [
                                  316,
                                  317
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                316,
                                317
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 12
                                },
                                "start": {
                                  "column": 18,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          306,
                          320
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        306,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    249,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 10
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
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                235,
                327
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  340,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
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
                  344,
                  370
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    367,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 15
                    },
                    "start": {
                      "column": 38,
                      "line": 15
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  },
                  "range": [
                    344,
                    364
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
                          "name": "Document",
                          "optional": false,
                          "range": [
                            355,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 15
                            },
                            "start": {
                              "column": 26,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          355,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 15
                          },
                          "start": {
                            "column": 26,
                            "line": 15
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "range": [
                          345,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        345,
                        363
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "range": [
                333,
                370
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 47,
              "line": 9
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "range": [
            195,
            202
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 46,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          },
          "range": [
            202,
            228
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
                  "name": "CustomDocument",
                  "optional": false,
                  "range": [
                    213,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 9
                    },
                    "start": {
                      "column": 31,
                      "line": 9
                    }
                  }
                },
                "range": [
                  213,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 9
                  },
                  "start": {
                    "column": 31,
                    "line": 9
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "range": [
                  203,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 21,
                    "line": 9
                  }
                }
              },
              "out": false,
              "range": [
                203,
                227
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 9
                },
                "start": {
                  "column": 21,
                  "line": 9
                }
              }
            }
          ]
        },
        "range": [
          189,
          372
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
