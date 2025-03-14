__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        27
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "DOMNode",
          "optional": false,
          "range": [
            12,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "range": [
              22,
              26
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          "range": [
            22,
            26
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "range": [
          7,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
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
          "column": 27,
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
      "column": 27,
      "line": 1
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
    22
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        22
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Node",
          "optional": false,
          "range": [
            12,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "range": [
            19,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "range": [
          7,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
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
          "column": 22,
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
      "column": 22,
      "line": 1
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
    223
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./custom'",
        "value": "./custom",
        "range": [
          21,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
            "name": "Node",
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
            "name": "Node",
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
        31
      ],
      "loc": {
        "end": {
          "column": 31,
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
        "raw": "'./dom'",
        "value": "./dom",
        "range": [
          56,
          63
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 2
          },
          "start": {
            "column": 24,
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
            "name": "DOMNode",
            "optional": false,
            "range": [
              41,
              48
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "DOMNode",
            "optional": false,
            "range": [
              41,
              48
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 9,
                "line": 2
              }
            }
          },
          "range": [
            41,
            48
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 2
            },
            "start": {
              "column": 9,
              "line": 2
            }
          }
        }
      ],
      "range": [
        32,
        63
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          70,
          81
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                92,
                96
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              },
              "range": [
                96,
                103
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    98,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                "range": [
                  98,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              89,
              103
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 46,
              "line": 4
            },
            "start": {
              "column": 40,
              "line": 4
            }
          },
          "range": [
            105,
            111
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              108,
              111
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 4
              },
              "start": {
                "column": 43,
                "line": 4
              }
            }
          }
        },
        "range": [
          84,
          111
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 4
          },
          "start": {
            "column": 19,
            "line": 4
          }
        }
      },
      "range": [
        65,
        111
      ],
      "loc": {
        "end": {
          "column": 46,
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
        113,
        223
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
              "name": "mixin",
              "optional": false,
              "range": [
                126,
                131
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "range": [
                          187,
                          221
                        ],
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "range": [
                                193,
                                196
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
                            "override": false,
                            "static": false,
                            "value": {
                              "type": "FunctionExpression",
                              "range": [
                                196,
                                217
                              ],
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  215,
                                  217
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
                                  "name": "domNode",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 8
                                      }
                                    },
                                    "range": [
                                      204,
                                      213
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "DOMNode",
                                        "optional": false,
                                        "range": [
                                          206,
                                          213
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        206,
                                        213
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 8
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    197,
                                    213
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 8,
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
                                  "column": 7,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              193,
                              217
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
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
                            "column": 28,
                            "line": 7
                          }
                        }
                      },
                      "declare": false,
                      "decorators": [],
                      "id": null,
                      "implements": [],
                      "superClass": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "range": [
                          182,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 23,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        168,
                        221
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
                    "range": [
                      161,
                      221
                    ],
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
                  }
                ],
                "range": [
                  157,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 44,
                    "line": 6
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    },
                    "range": [
                      139,
                      152
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Constructor",
                        "optional": false,
                        "range": [
                          141,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 6
                          },
                          "start": {
                            "column": 28,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        141,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 6
                        },
                        "start": {
                          "column": 28,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    135,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                134,
                223
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 6
                }
              }
            },
            "range": [
              126,
              223
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          120,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
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
          "line": 10
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
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
