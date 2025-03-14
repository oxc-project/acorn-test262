__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    2774
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          62,
          69
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            51,
            56
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              51,
              56
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 7,
                "line": 2
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        44,
        70
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType1",
              "optional": false,
              "range": [
                135,
                146
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"foo\"",
                    "value": "foo",
                    "range": [
                      149,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    149,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 23,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      157,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 6
                      },
                      "start": {
                        "column": 31,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    157,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                149,
                162
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "range": [
              130,
              163
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringType2",
              "optional": false,
              "range": [
                173,
                184
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"baz\"",
                    "value": "baz",
                    "range": [
                      187,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    187,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "\"bar\"",
                    "value": "bar",
                    "range": [
                      195,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    195,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                187,
                200
              ],
              "loc": {
                "end": {
                  "column": 36,
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
              201
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                223,
                275
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getValue",
                    "optional": false,
                    "range": [
                      233,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 10
                          },
                          "start": {
                            "column": 21,
                            "line": 10
                          }
                        },
                        "range": [
                          246,
                          259
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType1",
                            "optional": false,
                            "range": [
                              248,
                              259
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 10
                              },
                              "start": {
                                "column": 23,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            248,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 10
                            },
                            "start": {
                              "column": 23,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        242,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    },
                    "range": [
                      260,
                      268
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        262,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 37,
                          "line": 10
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    233,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp1",
              "optional": false,
              "range": [
                217,
                222
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              207,
              275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                297,
                349
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getValue",
                    "optional": false,
                    "range": [
                      307,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 21,
                            "line": 14
                          }
                        },
                        "range": [
                          320,
                          333
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stringType2",
                            "optional": false,
                            "range": [
                              322,
                              333
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 14
                              },
                              "start": {
                                "column": 23,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            322,
                            333
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 14
                            },
                            "start": {
                              "column": 23,
                              "line": 14
                            }
                          }
                        }
                      },
                      "range": [
                        316,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 14
                        },
                        "start": {
                          "column": 17,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 35,
                        "line": 14
                      }
                    },
                    "range": [
                      334,
                      342
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        336,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 37,
                          "line": 14
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    307,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Temp2",
              "optional": false,
              "range": [
                291,
                296
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "range": [
              281,
              349
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          403,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 18
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"bar\"",
                            "value": "bar",
                            "range": [
                              418,
                              423
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 18
                              },
                              "start": {
                                "column": 29,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "range": [
                              407,
                              408
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 18,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "getValue",
                            "optional": false,
                            "range": [
                              409,
                              417
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 18
                              },
                              "start": {
                                "column": 20,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            407,
                            417
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 18
                            },
                            "start": {
                              "column": 18,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          407,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        403,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 18
                        },
                        "start": {
                          "column": 14,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    397,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                387,
                449
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 36,
                  "line": 17
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                364,
                368
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 19,
                      "line": 17
                    }
                  },
                  "range": [
                    370,
                    385
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Temp1",
                          "optional": false,
                          "range": [
                            372,
                            377
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 17
                            },
                            "start": {
                              "column": 21,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          372,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 17
                          },
                          "start": {
                            "column": 21,
                            "line": 17
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Temp2",
                          "optional": false,
                          "range": [
                            380,
                            385
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 17
                            },
                            "start": {
                              "column": 29,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          380,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 17
                          },
                          "start": {
                            "column": 29,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "range": [
                      372,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 21,
                        "line": 17
                      }
                    }
                  }
                },
                "range": [
                  369,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              }
            ],
            "range": [
              355,
              449
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          124,
          451
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          116,
          121
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "range": [
        107,
        451
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                495,
                658
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      514,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    },
                    "range": [
                      517,
                      573
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 24
                              },
                              "start": {
                                "column": 30,
                                "line": 24
                              }
                            },
                            "range": [
                              527,
                              562
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 46,
                                            "line": 24
                                          },
                                          "start": {
                                            "column": 38,
                                            "line": 24
                                          }
                                        },
                                        "range": [
                                          535,
                                          543
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "range": [
                                            537,
                                            543
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 46,
                                              "line": 24
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 24
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        532,
                                        543
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 24
                                        }
                                      }
                                    }
                                  ],
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 24
                                      }
                                    },
                                    "range": [
                                      544,
                                      549
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        546,
                                        549
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 24
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    531,
                                    550
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 24
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "range": [
                                      551,
                                      552
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 24
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
                                        "column": 63,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 24
                                      }
                                    },
                                    "range": [
                                      552,
                                      560
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        554,
                                        560
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 24
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    551,
                                    560
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 24
                                    }
                                  }
                                }
                              ],
                              "range": [
                                529,
                                562
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 24
                                },
                                "start": {
                                  "column": 32,
                                  "line": 24
                                }
                              }
                            }
                          },
                          "range": [
                            520,
                            562
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 24
                            },
                            "start": {
                              "column": 23,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 24
                          },
                          "start": {
                            "column": 67,
                            "line": 24
                          }
                        },
                        "range": [
                          564,
                          573
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            567,
                            573
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 24
                            },
                            "start": {
                              "column": 70,
                              "line": 24
                            }
                          }
                        }
                      },
                      "range": [
                        519,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 24
                        },
                        "start": {
                          "column": 22,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    505,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      592,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    }
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 25
                      },
                      "start": {
                        "column": 20,
                        "line": 25
                      }
                    },
                    "range": [
                      595,
                      651
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 25
                              },
                              "start": {
                                "column": 30,
                                "line": 25
                              }
                            },
                            "range": [
                              605,
                              640
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 46,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 38,
                                            "line": 25
                                          }
                                        },
                                        "range": [
                                          613,
                                          621
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "range": [
                                            615,
                                            621
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 46,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 40,
                                              "line": 25
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        610,
                                        621
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 46,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 25
                                        }
                                      }
                                    }
                                  ],
                                  "readonly": false,
                                  "static": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 25
                                      }
                                    },
                                    "range": [
                                      622,
                                      627
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        624,
                                        627
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 25
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    609,
                                    628
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 25
                                    }
                                  }
                                },
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "range": [
                                      629,
                                      630
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 25
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
                                        "column": 63,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 25
                                      }
                                    },
                                    "range": [
                                      630,
                                      638
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "range": [
                                        632,
                                        638
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 57,
                                          "line": 25
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    629,
                                    638
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 63,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 54,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "range": [
                                607,
                                640
                              ],
                              "loc": {
                                "end": {
                                  "column": 65,
                                  "line": 25
                                },
                                "start": {
                                  "column": 32,
                                  "line": 25
                                }
                              }
                            }
                          },
                          "range": [
                            598,
                            640
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 25
                            },
                            "start": {
                              "column": 23,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 25
                          },
                          "start": {
                            "column": 67,
                            "line": 25
                          }
                        },
                        "range": [
                          642,
                          651
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            645,
                            651
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 25
                            },
                            "start": {
                              "column": 70,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        597,
                        651
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 25
                        },
                        "start": {
                          "column": 22,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    583,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Messages",
              "optional": false,
              "range": [
                486,
                494
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 14,
                  "line": 23
                }
              }
            },
            "range": [
              476,
              658
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "messages",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    },
                    "range": [
                      678,
                      688
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Messages",
                        "optional": false,
                        "range": [
                          680,
                          688
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 28
                          },
                          "start": {
                            "column": 20,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        680,
                        688
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 28
                        },
                        "start": {
                          "column": 20,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    670,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
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
                        "name": "foo",
                        "optional": false,
                        "range": [
                          701,
                          704
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "\"Foo\"",
                          "value": "Foo",
                          "range": [
                            719,
                            724
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 29
                            },
                            "start": {
                              "column": 26,
                              "line": 29
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              707,
                              714
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 29
                              },
                              "start": {
                                "column": 14,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "range": [
                          706,
                          724
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 29
                          },
                          "start": {
                            "column": 13,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        701,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          734,
                          737
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "raw": "\"Bar\"",
                          "value": "Bar",
                          "range": [
                            752,
                            757
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 30
                            },
                            "start": {
                              "column": 26,
                              "line": 30
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              740,
                              747
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 30
                              },
                              "start": {
                                "column": 14,
                                "line": 30
                              }
                            }
                          }
                        ],
                        "range": [
                          739,
                          757
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 30
                          },
                          "start": {
                            "column": 13,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        734,
                        757
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "range": [
                    691,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 31
                    },
                    "start": {
                      "column": 31,
                      "line": 28
                    }
                  }
                },
                "range": [
                  670,
                  764
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              664,
              765
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    777,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 10,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                835,
                                836
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 34
                                },
                                "start": {
                                  "column": 25,
                                  "line": 34
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "\"A\"",
                              "value": "A",
                              "range": [
                                838,
                                841
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 34
                                },
                                "start": {
                                  "column": 28,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              835,
                              841
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 34
                              },
                              "start": {
                                "column": 25,
                                "line": 34
                              }
                            }
                          },
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                843,
                                844
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 34
                                },
                                "start": {
                                  "column": 33,
                                  "line": 34
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                846,
                                847
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 34
                                },
                                "start": {
                                  "column": 36,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              843,
                              847
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 34
                              },
                              "start": {
                                "column": 33,
                                "line": 34
                              }
                            }
                          }
                        ],
                        "range": [
                          833,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 34
                          },
                          "start": {
                            "column": 23,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "messages",
                        "optional": false,
                        "range": [
                          818,
                          826
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "range": [
                          827,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        818,
                        832
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      818,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 33
                          },
                          "start": {
                            "column": 23,
                            "line": 33
                          }
                        },
                        "range": [
                          790,
                          805
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"foo\"",
                                "value": "foo",
                                "range": [
                                  792,
                                  797
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                792,
                                797
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 33
                                },
                                "start": {
                                  "column": 25,
                                  "line": 33
                                }
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "raw": "\"bar\"",
                                "value": "bar",
                                "range": [
                                  800,
                                  805
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                800,
                                805
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 33
                                },
                                "start": {
                                  "column": 33,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "range": [
                            792,
                            805
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 33
                            },
                            "start": {
                              "column": 25,
                              "line": 33
                            }
                          }
                        }
                      },
                      "range": [
                        786,
                        805
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 33
                        },
                        "start": {
                          "column": 19,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    785,
                    850
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 34
                    },
                    "start": {
                      "column": 18,
                      "line": 33
                    }
                  }
                },
                "range": [
                  777,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              771,
              851
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          470,
          853
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 22
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          462,
          467
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
          }
        }
      },
      "params": [],
      "range": [
        453,
        853
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 22
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "range": [
                          938,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 38
                          },
                          "start": {
                            "column": 38,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "range": [
                          926,
                          933
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 38
                          },
                          "start": {
                            "column": 26,
                            "line": 38
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          934,
                          937
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 38
                          },
                          "start": {
                            "column": 34,
                            "line": 38
                          }
                        }
                      },
                      "range": [
                        926,
                        937
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 38
                        },
                        "start": {
                          "column": 26,
                          "line": 38
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      926,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 38
                      },
                      "start": {
                        "column": 26,
                        "line": 38
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "range": [
                        918,
                        922
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 38
                        },
                        "start": {
                          "column": 18,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    918,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 38
                    },
                    "start": {
                      "column": 18,
                      "line": 38
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "range": [
                    904,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEach",
                  "optional": false,
                  "range": [
                    910,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 38
                    },
                    "start": {
                      "column": 10,
                      "line": 38
                    }
                  }
                },
                "range": [
                  904,
                  917
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "range": [
                904,
                944
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              904,
              945
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          898,
          947
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 43,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          864,
          869
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 37
              },
              "start": {
                "column": 20,
                "line": 37
              }
            },
            "range": [
              875,
              896
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "range": [
                      877,
                      883
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 22,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    877,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 37
                    },
                    "start": {
                      "column": 22,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "range": [
                      888,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 37
                      },
                      "start": {
                        "column": 33,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    888,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 37
                    },
                    "start": {
                      "column": 33,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                877,
                896
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 37
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            }
          },
          "range": [
            870,
            896
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 37
            },
            "start": {
              "column": 15,
              "line": 37
            }
          }
        }
      ],
      "range": [
        855,
        947
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "range": [
                  1534,
                  1538
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1534,
                1540
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1534,
              1541
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1552,
                          1553
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 50
                          },
                          "start": {
                            "column": 10,
                            "line": 50
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1555,
                          1556
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 50
                          },
                          "start": {
                            "column": 13,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1552,
                        1556
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 50
                        },
                        "start": {
                          "column": 10,
                          "line": 50
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1558,
                          1559
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 50
                          },
                          "start": {
                            "column": 16,
                            "line": 50
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1561,
                          1562
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 50
                          },
                          "start": {
                            "column": 19,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1558,
                        1562
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 50
                        },
                        "start": {
                          "column": 16,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "range": [
                    1551,
                    1563
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 9,
                      "line": 50
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "range": [
                  1546,
                  1550
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1546,
                1564
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1546,
              1565
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1576,
                          1577
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 51
                          },
                          "start": {
                            "column": 10,
                            "line": 51
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1579,
                          1580
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 51
                          },
                          "start": {
                            "column": 13,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1576,
                        1580
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 51
                        },
                        "start": {
                          "column": 10,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1582,
                          1583
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 51
                          },
                          "start": {
                            "column": 16,
                            "line": 51
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1585,
                          1586
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 51
                          },
                          "start": {
                            "column": 19,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1582,
                        1586
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 51
                        },
                        "start": {
                          "column": 16,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1575,
                    1587
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 51
                    },
                    "start": {
                      "column": 9,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1590,
                          1591
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 51
                          },
                          "start": {
                            "column": 24,
                            "line": 51
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1593,
                          1594
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 51
                          },
                          "start": {
                            "column": 27,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1590,
                        1594
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 51
                        },
                        "start": {
                          "column": 24,
                          "line": 51
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1596,
                          1597
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 51
                          },
                          "start": {
                            "column": 30,
                            "line": 51
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1599,
                          1600
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 51
                          },
                          "start": {
                            "column": 33,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1596,
                        1600
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 51
                        },
                        "start": {
                          "column": 30,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "range": [
                    1589,
                    1601
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 51
                    },
                    "start": {
                      "column": 23,
                      "line": 51
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg1",
                "optional": false,
                "range": [
                  1570,
                  1574
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 51
                  },
                  "start": {
                    "column": 4,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                1570,
                1602
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 51
                },
                "start": {
                  "column": 4,
                  "line": 51
                }
              }
            },
            "range": [
              1570,
              1603
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1615,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 53
                          },
                          "start": {
                            "column": 10,
                            "line": 53
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1618,
                          1619
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 53
                          },
                          "start": {
                            "column": 13,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1615,
                        1619
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 53
                        },
                        "start": {
                          "column": 10,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1614,
                    1620
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 9,
                      "line": 53
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1623,
                          1624
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 53
                          },
                          "start": {
                            "column": 18,
                            "line": 53
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1626,
                          1627
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 53
                          },
                          "start": {
                            "column": 21,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        1623,
                        1627
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 53
                        },
                        "start": {
                          "column": 18,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    1622,
                    1628
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 53
                    },
                    "start": {
                      "column": 17,
                      "line": 53
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "range": [
                  1609,
                  1613
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1609,
                1629
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1609,
              1630
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1642,
                          1643
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 55
                          },
                          "start": {
                            "column": 10,
                            "line": 55
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1645,
                          1646
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 55
                          },
                          "start": {
                            "column": 13,
                            "line": 55
                          }
                        }
                      },
                      "range": [
                        1642,
                        1646
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 55
                        },
                        "start": {
                          "column": 10,
                          "line": 55
                        }
                      }
                    }
                  ],
                  "range": [
                    1641,
                    1647
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 55
                    },
                    "start": {
                      "column": 9,
                      "line": 55
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "range": [
                  1636,
                  1640
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1636,
                1648
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              1636,
              1649
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1660,
                          1661
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 56
                          },
                          "start": {
                            "column": 10,
                            "line": 56
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1663,
                          1664
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 56
                          },
                          "start": {
                            "column": 13,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1660,
                        1664
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 56
                        },
                        "start": {
                          "column": 10,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "range": [
                    1659,
                    1665
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 56
                    },
                    "start": {
                      "column": 9,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1668,
                          1669
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 56
                          },
                          "start": {
                            "column": 18,
                            "line": 56
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1671,
                          1672
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 56
                          },
                          "start": {
                            "column": 21,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1668,
                        1672
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 56
                        },
                        "start": {
                          "column": 18,
                          "line": 56
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1674,
                          1675
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 56
                          },
                          "start": {
                            "column": 24,
                            "line": 56
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1677,
                          1678
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 56
                          },
                          "start": {
                            "column": 27,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1674,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 56
                        },
                        "start": {
                          "column": 24,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "range": [
                    1667,
                    1679
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 56
                    },
                    "start": {
                      "column": 17,
                      "line": 56
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "range": [
                  1654,
                  1658
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1654,
                1680
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1654,
              1681
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1692,
                          1693
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 57
                          },
                          "start": {
                            "column": 10,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1695,
                          1696
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 57
                          },
                          "start": {
                            "column": 13,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1692,
                        1696
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 57
                        },
                        "start": {
                          "column": 10,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "range": [
                    1691,
                    1697
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 57
                    },
                    "start": {
                      "column": 9,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1700,
                          1701
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 57
                          },
                          "start": {
                            "column": 18,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1703,
                          1704
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 57
                          },
                          "start": {
                            "column": 21,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1700,
                        1704
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 57
                        },
                        "start": {
                          "column": 18,
                          "line": 57
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1706,
                          1707
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 57
                          },
                          "start": {
                            "column": 24,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1709,
                          1710
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 57
                          },
                          "start": {
                            "column": 27,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1706,
                        1710
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 57
                        },
                        "start": {
                          "column": 24,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "range": [
                    1699,
                    1711
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 57
                    },
                    "start": {
                      "column": 17,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1714,
                          1715
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 57
                          },
                          "start": {
                            "column": 32,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1717,
                          1718
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 57
                          },
                          "start": {
                            "column": 35,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1714,
                        1718
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 57
                        },
                        "start": {
                          "column": 32,
                          "line": 57
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1720,
                          1721
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 57
                          },
                          "start": {
                            "column": 38,
                            "line": 57
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1723,
                          1724
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 57
                          },
                          "start": {
                            "column": 41,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1720,
                        1724
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 57
                        },
                        "start": {
                          "column": 38,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "range": [
                    1713,
                    1725
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 57
                    },
                    "start": {
                      "column": 31,
                      "line": 57
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "range": [
                  1686,
                  1690
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "range": [
                1686,
                1726
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1686,
              1727
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "range": [
                  1733,
                  1737
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1733,
                1739
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1733,
              1740
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1751,
                          1752
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 60
                          },
                          "start": {
                            "column": 10,
                            "line": 60
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1754,
                          1755
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 60
                          },
                          "start": {
                            "column": 13,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1751,
                        1755
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 60
                        },
                        "start": {
                          "column": 10,
                          "line": 60
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1757,
                          1758
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 60
                          },
                          "start": {
                            "column": 16,
                            "line": 60
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1760,
                          1761
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 60
                          },
                          "start": {
                            "column": 19,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        1757,
                        1761
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 60
                        },
                        "start": {
                          "column": 16,
                          "line": 60
                        }
                      }
                    }
                  ],
                  "range": [
                    1750,
                    1762
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 60
                    },
                    "start": {
                      "column": 9,
                      "line": 60
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "range": [
                  1745,
                  1749
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "range": [
                1745,
                1763
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1745,
              1764
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1775,
                          1776
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 61
                          },
                          "start": {
                            "column": 10,
                            "line": 61
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1778,
                          1779
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 61
                          },
                          "start": {
                            "column": 13,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1775,
                        1779
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 61
                        },
                        "start": {
                          "column": 10,
                          "line": 61
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1781,
                          1782
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 61
                          },
                          "start": {
                            "column": 16,
                            "line": 61
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1784,
                          1785
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 61
                          },
                          "start": {
                            "column": 19,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1781,
                        1785
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 61
                        },
                        "start": {
                          "column": 16,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "range": [
                    1774,
                    1786
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 61
                    },
                    "start": {
                      "column": 9,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1789,
                          1790
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 61
                          },
                          "start": {
                            "column": 24,
                            "line": 61
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1792,
                          1793
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 61
                          },
                          "start": {
                            "column": 27,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1789,
                        1793
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 61
                        },
                        "start": {
                          "column": 24,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "range": [
                    1788,
                    1794
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 61
                    },
                    "start": {
                      "column": 23,
                      "line": 61
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "range": [
                  1769,
                  1773
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1769,
                1795
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1769,
              1796
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "range": [
                  1802,
                  1806
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "range": [
                1802,
                1808
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1802,
              1809
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1820,
                          1821
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 64
                          },
                          "start": {
                            "column": 10,
                            "line": 64
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1823,
                          1824
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 64
                          },
                          "start": {
                            "column": 13,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1820,
                        1824
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 64
                        },
                        "start": {
                          "column": 10,
                          "line": 64
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1826,
                          1827
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 64
                          },
                          "start": {
                            "column": 16,
                            "line": 64
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1829,
                          1830
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 64
                          },
                          "start": {
                            "column": 19,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1826,
                        1830
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 64
                        },
                        "start": {
                          "column": 16,
                          "line": 64
                        }
                      }
                    }
                  ],
                  "range": [
                    1819,
                    1831
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 64
                    },
                    "start": {
                      "column": 9,
                      "line": 64
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "range": [
                  1814,
                  1818
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "range": [
                1814,
                1832
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1814,
              1833
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1844,
                          1845
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 65
                          },
                          "start": {
                            "column": 10,
                            "line": 65
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1847,
                          1848
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 65
                          },
                          "start": {
                            "column": 13,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1844,
                        1848
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 65
                        },
                        "start": {
                          "column": 10,
                          "line": 65
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1850,
                          1851
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 65
                          },
                          "start": {
                            "column": 16,
                            "line": 65
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1853,
                          1854
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 65
                          },
                          "start": {
                            "column": 19,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1850,
                        1854
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 65
                        },
                        "start": {
                          "column": 16,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "range": [
                    1843,
                    1855
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 9,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1858,
                          1859
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 65
                          },
                          "start": {
                            "column": 24,
                            "line": 65
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1861,
                          1862
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 65
                          },
                          "start": {
                            "column": 27,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1858,
                        1862
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 65
                        },
                        "start": {
                          "column": 24,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "range": [
                    1857,
                    1863
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 65
                    },
                    "start": {
                      "column": 23,
                      "line": 65
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "range": [
                  1838,
                  1842
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "range": [
                1838,
                1864
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1838,
              1865
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "range": [
                  1871,
                  1875
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              "optional": false,
              "range": [
                1871,
                1877
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 67
                },
                "start": {
                  "column": 4,
                  "line": 67
                }
              }
            },
            "range": [
              1871,
              1878
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1889,
                          1890
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 68
                          },
                          "start": {
                            "column": 10,
                            "line": 68
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1892,
                          1893
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 68
                          },
                          "start": {
                            "column": 13,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1889,
                        1893
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 68
                        },
                        "start": {
                          "column": 10,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1895,
                          1896
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 68
                          },
                          "start": {
                            "column": 16,
                            "line": 68
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1898,
                          1899
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 68
                          },
                          "start": {
                            "column": 19,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1895,
                        1899
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 68
                        },
                        "start": {
                          "column": 16,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "range": [
                    1888,
                    1900
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 68
                    },
                    "start": {
                      "column": 9,
                      "line": 68
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "range": [
                  1883,
                  1887
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "range": [
                1883,
                1901
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1883,
              1902
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1913,
                          1914
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 69
                          },
                          "start": {
                            "column": 10,
                            "line": 69
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1916,
                          1917
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 69
                          },
                          "start": {
                            "column": 13,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1913,
                        1917
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 69
                        },
                        "start": {
                          "column": 10,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1919,
                          1920
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 69
                          },
                          "start": {
                            "column": 16,
                            "line": 69
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1922,
                          1923
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 69
                          },
                          "start": {
                            "column": 19,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1919,
                        1923
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 69
                        },
                        "start": {
                          "column": 16,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "range": [
                    1912,
                    1924
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 69
                    },
                    "start": {
                      "column": 9,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1927,
                          1928
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 69
                          },
                          "start": {
                            "column": 24,
                            "line": 69
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1930,
                          1931
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 69
                          },
                          "start": {
                            "column": 27,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1927,
                        1931
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 69
                        },
                        "start": {
                          "column": 24,
                          "line": 69
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1933,
                          1934
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 69
                          },
                          "start": {
                            "column": 30,
                            "line": 69
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1936,
                          1937
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 69
                          },
                          "start": {
                            "column": 33,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1933,
                        1937
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 69
                        },
                        "start": {
                          "column": 30,
                          "line": 69
                        }
                      }
                    }
                  ],
                  "range": [
                    1926,
                    1938
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 69
                    },
                    "start": {
                      "column": 23,
                      "line": 69
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "range": [
                  1907,
                  1911
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "range": [
                1907,
                1939
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1907,
              1940
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1951,
                          1952
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 70
                          },
                          "start": {
                            "column": 10,
                            "line": 70
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1954,
                          1955
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 70
                          },
                          "start": {
                            "column": 13,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1951,
                        1955
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 70
                        },
                        "start": {
                          "column": 10,
                          "line": 70
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1957,
                          1958
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 70
                          },
                          "start": {
                            "column": 16,
                            "line": 70
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1960,
                          1961
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 70
                          },
                          "start": {
                            "column": 19,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1957,
                        1961
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 70
                        },
                        "start": {
                          "column": 16,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1950,
                    1962
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 9,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1965,
                          1966
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 70
                          },
                          "start": {
                            "column": 24,
                            "line": 70
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1968,
                          1969
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 70
                          },
                          "start": {
                            "column": 27,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1965,
                        1969
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 70
                        },
                        "start": {
                          "column": 24,
                          "line": 70
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1971,
                          1972
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 70
                          },
                          "start": {
                            "column": 30,
                            "line": 70
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1974,
                          1975
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 70
                          },
                          "start": {
                            "column": 33,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1971,
                        1975
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 70
                        },
                        "start": {
                          "column": 30,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1964,
                    1976
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 70
                    },
                    "start": {
                      "column": 23,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1979,
                          1980
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 70
                          },
                          "start": {
                            "column": 38,
                            "line": 70
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1982,
                          1983
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 70
                          },
                          "start": {
                            "column": 41,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1979,
                        1983
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 70
                        },
                        "start": {
                          "column": 38,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1978,
                    1984
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 70
                    },
                    "start": {
                      "column": 37,
                      "line": 70
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg6",
                "optional": false,
                "range": [
                  1945,
                  1949
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              "optional": false,
              "range": [
                1945,
                1985
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              1945,
              1986
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          }
        ],
        "range": [
          1528,
          1988
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 2,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "range": [
          958,
          963
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 85,
                "line": 42
              },
              "start": {
                "column": 8,
                "line": 42
              }
            },
            "range": [
              973,
              1050
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "range": [
                          980,
                          984
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 42
                          },
                          "start": {
                            "column": 15,
                            "line": 42
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 42
                          },
                          "start": {
                            "column": 19,
                            "line": 42
                          }
                        },
                        "range": [
                          984,
                          999
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    987,
                                    988
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 42
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
                                      "column": 31,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 42
                                    }
                                  },
                                  "range": [
                                    988,
                                    996
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      990,
                                      996
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 42
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  987,
                                  996
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 42
                                  }
                                }
                              }
                            ],
                            "range": [
                              986,
                              997
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 42
                              },
                              "start": {
                                "column": 21,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            986,
                            999
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 42
                            },
                            "start": {
                              "column": 21,
                              "line": 42
                            }
                          }
                        }
                      },
                      "range": [
                        977,
                        999
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 42
                        },
                        "start": {
                          "column": 12,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 42
                      },
                      "start": {
                        "column": 36,
                        "line": 42
                      }
                    },
                    "range": [
                      1001,
                      1010
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1004,
                        1010
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 42
                        },
                        "start": {
                          "column": 39,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    976,
                    1010
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 42
                    },
                    "start": {
                      "column": 11,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "range": [
                          1019,
                          1023
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 42
                          },
                          "start": {
                            "column": 54,
                            "line": 42
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 42
                          },
                          "start": {
                            "column": 58,
                            "line": 42
                          }
                        },
                        "range": [
                          1023,
                          1038
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    1026,
                                    1027
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 42
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
                                      "column": 70,
                                      "line": 42
                                    },
                                    "start": {
                                      "column": 62,
                                      "line": 42
                                    }
                                  },
                                  "range": [
                                    1027,
                                    1035
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1029,
                                      1035
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 42
                                      },
                                      "start": {
                                        "column": 64,
                                        "line": 42
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1026,
                                  1035
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 42
                                  }
                                }
                              }
                            ],
                            "range": [
                              1025,
                              1036
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 42
                              },
                              "start": {
                                "column": 60,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            1025,
                            1038
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 42
                            },
                            "start": {
                              "column": 60,
                              "line": 42
                            }
                          }
                        }
                      },
                      "range": [
                        1016,
                        1038
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 42
                        },
                        "start": {
                          "column": 51,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 42
                      },
                      "start": {
                        "column": 75,
                        "line": 42
                      }
                    },
                    "range": [
                      1040,
                      1049
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1043,
                        1049
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 42
                        },
                        "start": {
                          "column": 78,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    1015,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 42
                    },
                    "start": {
                      "column": 50,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                975,
                1050
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
                }
              }
            }
          },
          "range": [
            969,
            1050
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 42
            },
            "start": {
              "column": 4,
              "line": 42
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 91,
                "line": 43
              },
              "start": {
                "column": 8,
                "line": 43
              }
            },
            "range": [
              1060,
              1143
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 43
                          },
                          "start": {
                            "column": 13,
                            "line": 43
                          }
                        },
                        "range": [
                          1065,
                          1078
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1068,
                                  1069
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 43
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
                                    "column": 25,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 43
                                  }
                                },
                                "range": [
                                  1069,
                                  1077
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1071,
                                    1077
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 43
                                    }
                                  }
                                }
                              },
                              "range": [
                                1068,
                                1077
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 43
                                },
                                "start": {
                                  "column": 16,
                                  "line": 43
                                }
                              }
                            }
                          ],
                          "range": [
                            1067,
                            1078
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 43
                            },
                            "start": {
                              "column": 15,
                              "line": 43
                            }
                          }
                        }
                      },
                      "range": [
                        1064,
                        1078
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 43
                        },
                        "start": {
                          "column": 12,
                          "line": 43
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 43
                          },
                          "start": {
                            "column": 29,
                            "line": 43
                          }
                        },
                        "range": [
                          1081,
                          1089
                        ],
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "range": [
                            1083,
                            1089
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 43
                            },
                            "start": {
                              "column": 31,
                              "line": 43
                            }
                          }
                        }
                      },
                      "range": [
                        1080,
                        1089
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 43
                        },
                        "start": {
                          "column": 28,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 43
                      },
                      "start": {
                        "column": 39,
                        "line": 43
                      }
                    },
                    "range": [
                      1091,
                      1100
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1094,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 43
                        },
                        "start": {
                          "column": 42,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    1063,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 43
                    },
                    "start": {
                      "column": 11,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 43
                          },
                          "start": {
                            "column": 55,
                            "line": 43
                          }
                        },
                        "range": [
                          1107,
                          1115
                        ],
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "range": [
                            1109,
                            1115
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 43
                            },
                            "start": {
                              "column": 57,
                              "line": 43
                            }
                          }
                        }
                      },
                      "range": [
                        1106,
                        1115
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 43
                        },
                        "start": {
                          "column": 54,
                          "line": 43
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 43
                          },
                          "start": {
                            "column": 66,
                            "line": 43
                          }
                        },
                        "range": [
                          1118,
                          1131
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1121,
                                  1122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 43
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
                                    "column": 78,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 70,
                                    "line": 43
                                  }
                                },
                                "range": [
                                  1122,
                                  1130
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1124,
                                    1130
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 78,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 72,
                                      "line": 43
                                    }
                                  }
                                }
                              },
                              "range": [
                                1121,
                                1130
                              ],
                              "loc": {
                                "end": {
                                  "column": 78,
                                  "line": 43
                                },
                                "start": {
                                  "column": 69,
                                  "line": 43
                                }
                              }
                            }
                          ],
                          "range": [
                            1120,
                            1131
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 43
                            },
                            "start": {
                              "column": 68,
                              "line": 43
                            }
                          }
                        }
                      },
                      "range": [
                        1117,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 43
                        },
                        "start": {
                          "column": 65,
                          "line": 43
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 43
                      },
                      "start": {
                        "column": 81,
                        "line": 43
                      }
                    },
                    "range": [
                      1133,
                      1142
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1136,
                        1142
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 43
                        },
                        "start": {
                          "column": 84,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    1105,
                    1142
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 43
                    },
                    "start": {
                      "column": 53,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                1062,
                1143
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              }
            }
          },
          "range": [
            1056,
            1143
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 101,
                "line": 44
              },
              "start": {
                "column": 8,
                "line": 44
              }
            },
            "range": [
              1153,
              1246
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 13,
                            "line": 44
                          }
                        },
                        "range": [
                          1158,
                          1171
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1161,
                                  1162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 44
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
                                    "column": 25,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 44
                                  }
                                },
                                "range": [
                                  1162,
                                  1170
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1164,
                                    1170
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 44
                                    }
                                  }
                                }
                              },
                              "range": [
                                1161,
                                1170
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 44
                                },
                                "start": {
                                  "column": 16,
                                  "line": 44
                                }
                              }
                            }
                          ],
                          "range": [
                            1160,
                            1171
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 44
                            },
                            "start": {
                              "column": 15,
                              "line": 44
                            }
                          }
                        }
                      },
                      "range": [
                        1157,
                        1171
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "range": [
                          1176,
                          1180
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 44
                          },
                          "start": {
                            "column": 31,
                            "line": 44
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 44
                          },
                          "start": {
                            "column": 35,
                            "line": 44
                          }
                        },
                        "range": [
                          1180,
                          1195
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    1183,
                                    1184
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 44
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
                                      "column": 47,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 44
                                    }
                                  },
                                  "range": [
                                    1184,
                                    1192
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1186,
                                      1192
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 44
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 44
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1183,
                                  1192
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 44
                                  }
                                }
                              }
                            ],
                            "range": [
                              1182,
                              1193
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 44
                              },
                              "start": {
                                "column": 37,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            1182,
                            1195
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 44
                            },
                            "start": {
                              "column": 37,
                              "line": 44
                            }
                          }
                        }
                      },
                      "range": [
                        1173,
                        1195
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 44
                        },
                        "start": {
                          "column": 28,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 44
                      },
                      "start": {
                        "column": 52,
                        "line": 44
                      }
                    },
                    "range": [
                      1197,
                      1206
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1200,
                        1206
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 44
                        },
                        "start": {
                          "column": 55,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    1156,
                    1206
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 44
                    },
                    "start": {
                      "column": 11,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objs",
                        "optional": false,
                        "range": [
                          1215,
                          1219
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 44
                          },
                          "start": {
                            "column": 70,
                            "line": 44
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 44
                          },
                          "start": {
                            "column": 74,
                            "line": 44
                          }
                        },
                        "range": [
                          1219,
                          1234
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    1222,
                                    1223
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 78,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 77,
                                      "line": 44
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
                                      "column": 86,
                                      "line": 44
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 44
                                    }
                                  },
                                  "range": [
                                    1223,
                                    1231
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1225,
                                      1231
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 86,
                                        "line": 44
                                      },
                                      "start": {
                                        "column": 80,
                                        "line": 44
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1222,
                                  1231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 86,
                                    "line": 44
                                  },
                                  "start": {
                                    "column": 77,
                                    "line": 44
                                  }
                                }
                              }
                            ],
                            "range": [
                              1221,
                              1232
                            ],
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 44
                              },
                              "start": {
                                "column": 76,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            1221,
                            1234
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 44
                            },
                            "start": {
                              "column": 76,
                              "line": 44
                            }
                          }
                        }
                      },
                      "range": [
                        1212,
                        1234
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 44
                        },
                        "start": {
                          "column": 67,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 100,
                        "line": 44
                      },
                      "start": {
                        "column": 91,
                        "line": 44
                      }
                    },
                    "range": [
                      1236,
                      1245
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1239,
                        1245
                      ],
                      "loc": {
                        "end": {
                          "column": 100,
                          "line": 44
                        },
                        "start": {
                          "column": 94,
                          "line": 44
                        }
                      }
                    }
                  },
                  "range": [
                    1211,
                    1245
                  ],
                  "loc": {
                    "end": {
                      "column": 100,
                      "line": 44
                    },
                    "start": {
                      "column": 66,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                1155,
                1246
              ],
              "loc": {
                "end": {
                  "column": 101,
                  "line": 44
                },
                "start": {
                  "column": 10,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1149,
            1246
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 44
            },
            "start": {
              "column": 4,
              "line": 44
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 45
              },
              "start": {
                "column": 8,
                "line": 45
              }
            },
            "range": [
              1256,
              1336
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 45
                          },
                          "start": {
                            "column": 14,
                            "line": 45
                          }
                        },
                        "range": [
                          1262,
                          1275
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1265,
                                  1266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 45
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
                                    "column": 26,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 45
                                  }
                                },
                                "range": [
                                  1266,
                                  1274
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1268,
                                    1274
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 45
                                    }
                                  }
                                }
                              },
                              "range": [
                                1265,
                                1274
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 45
                                },
                                "start": {
                                  "column": 17,
                                  "line": 45
                                }
                              }
                            }
                          ],
                          "range": [
                            1264,
                            1275
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 45
                            },
                            "start": {
                              "column": 16,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        1260,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 45
                          },
                          "start": {
                            "column": 31,
                            "line": 45
                          }
                        },
                        "range": [
                          1279,
                          1292
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1282,
                                  1283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 45
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
                                    "column": 43,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 45
                                  }
                                },
                                "range": [
                                  1283,
                                  1291
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1285,
                                    1291
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 45
                                    }
                                  }
                                }
                              },
                              "range": [
                                1282,
                                1291
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 45
                                },
                                "start": {
                                  "column": 34,
                                  "line": 45
                                }
                              }
                            }
                          ],
                          "range": [
                            1281,
                            1292
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 45
                            },
                            "start": {
                              "column": 33,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        1277,
                        1292
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 45
                        },
                        "start": {
                          "column": 29,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 45
                      },
                      "start": {
                        "column": 46,
                        "line": 45
                      }
                    },
                    "range": [
                      1294,
                      1303
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1297,
                        1303
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 45
                        },
                        "start": {
                          "column": 49,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1259,
                    1303
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 45
                    },
                    "start": {
                      "column": 11,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 45
                          },
                          "start": {
                            "column": 63,
                            "line": 45
                          }
                        },
                        "range": [
                          1311,
                          1324
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1314,
                                  1315
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 66,
                                    "line": 45
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
                                    "column": 75,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 45
                                  }
                                },
                                "range": [
                                  1315,
                                  1323
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1317,
                                    1323
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 69,
                                      "line": 45
                                    }
                                  }
                                }
                              },
                              "range": [
                                1314,
                                1323
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 45
                                },
                                "start": {
                                  "column": 66,
                                  "line": 45
                                }
                              }
                            }
                          ],
                          "range": [
                            1313,
                            1324
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 45
                            },
                            "start": {
                              "column": 65,
                              "line": 45
                            }
                          }
                        }
                      },
                      "range": [
                        1309,
                        1324
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 45
                        },
                        "start": {
                          "column": 61,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 45
                      },
                      "start": {
                        "column": 78,
                        "line": 45
                      }
                    },
                    "range": [
                      1326,
                      1335
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1329,
                        1335
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 45
                        },
                        "start": {
                          "column": 81,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1308,
                    1335
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 45
                    },
                    "start": {
                      "column": 60,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                1258,
                1336
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 45
                },
                "start": {
                  "column": 10,
                  "line": 45
                }
              }
            }
          },
          "range": [
            1252,
            1336
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 45
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg5",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 92,
                "line": 46
              },
              "start": {
                "column": 8,
                "line": 46
              }
            },
            "range": [
              1346,
              1430
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 46
                          },
                          "start": {
                            "column": 14,
                            "line": 46
                          }
                        },
                        "range": [
                          1352,
                          1365
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1355,
                                  1356
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 46
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
                                    "column": 26,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 46
                                  }
                                },
                                "range": [
                                  1356,
                                  1364
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1358,
                                    1364
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 46
                                    }
                                  }
                                }
                              },
                              "range": [
                                1355,
                                1364
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 46
                                },
                                "start": {
                                  "column": 17,
                                  "line": 46
                                }
                              }
                            }
                          ],
                          "range": [
                            1354,
                            1365
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 46
                            },
                            "start": {
                              "column": 16,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1350,
                        1365
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          1370,
                          1371
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 46
                          },
                          "start": {
                            "column": 32,
                            "line": 46
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 46
                          },
                          "start": {
                            "column": 33,
                            "line": 46
                          }
                        },
                        "range": [
                          1371,
                          1386
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    1374,
                                    1375
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 46
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
                                      "column": 45,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 46
                                    }
                                  },
                                  "range": [
                                    1375,
                                    1383
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1377,
                                      1383
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 46
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1374,
                                  1383
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 46
                                  }
                                }
                              }
                            ],
                            "range": [
                              1373,
                              1384
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 46
                              },
                              "start": {
                                "column": 35,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1373,
                            1386
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 46
                            },
                            "start": {
                              "column": 35,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1367,
                        1386
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 46
                        },
                        "start": {
                          "column": 29,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 46
                      },
                      "start": {
                        "column": 50,
                        "line": 46
                      }
                    },
                    "range": [
                      1388,
                      1397
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1391,
                        1397
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 46
                        },
                        "start": {
                          "column": 53,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1349,
                    1397
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 46
                    },
                    "start": {
                      "column": 11,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 46
                          },
                          "start": {
                            "column": 67,
                            "line": 46
                          }
                        },
                        "range": [
                          1405,
                          1418
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1408,
                                  1409
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 70,
                                    "line": 46
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
                                    "column": 79,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 71,
                                    "line": 46
                                  }
                                },
                                "range": [
                                  1409,
                                  1417
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1411,
                                    1417
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 79,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 73,
                                      "line": 46
                                    }
                                  }
                                }
                              },
                              "range": [
                                1408,
                                1417
                              ],
                              "loc": {
                                "end": {
                                  "column": 79,
                                  "line": 46
                                },
                                "start": {
                                  "column": 70,
                                  "line": 46
                                }
                              }
                            }
                          ],
                          "range": [
                            1407,
                            1418
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 46
                            },
                            "start": {
                              "column": 69,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        1403,
                        1418
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 46
                        },
                        "start": {
                          "column": 65,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 46
                      },
                      "start": {
                        "column": 82,
                        "line": 46
                      }
                    },
                    "range": [
                      1420,
                      1429
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1423,
                        1429
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 46
                        },
                        "start": {
                          "column": 85,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    1402,
                    1429
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 46
                    },
                    "start": {
                      "column": 64,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                1348,
                1430
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 46
                },
                "start": {
                  "column": 10,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1342,
            1430
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 46
            },
            "start": {
              "column": 4,
              "line": 46
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg6",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 92,
                "line": 47
              },
              "start": {
                "column": 8,
                "line": 47
              }
            },
            "range": [
              1440,
              1524
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
                          }
                        },
                        "range": [
                          1446,
                          1459
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1449,
                                  1450
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 47
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
                                    "column": 26,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 47
                                  }
                                },
                                "range": [
                                  1450,
                                  1458
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1452,
                                    1458
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 47
                                    }
                                  }
                                }
                              },
                              "range": [
                                1449,
                                1458
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 47
                                },
                                "start": {
                                  "column": 17,
                                  "line": 47
                                }
                              }
                            }
                          ],
                          "range": [
                            1448,
                            1459
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 47
                            },
                            "start": {
                              "column": 16,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        1444,
                        1459
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 47
                        },
                        "start": {
                          "column": 12,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 47
                          },
                          "start": {
                            "column": 31,
                            "line": 47
                          }
                        },
                        "range": [
                          1463,
                          1476
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1466,
                                  1467
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 47
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
                                    "column": 43,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 47
                                  }
                                },
                                "range": [
                                  1467,
                                  1475
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1469,
                                    1475
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 47
                                    }
                                  }
                                }
                              },
                              "range": [
                                1466,
                                1475
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 47
                                },
                                "start": {
                                  "column": 34,
                                  "line": 47
                                }
                              }
                            }
                          ],
                          "range": [
                            1465,
                            1476
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 47
                            },
                            "start": {
                              "column": 33,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        1461,
                        1476
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 47
                        },
                        "start": {
                          "column": 29,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 47
                      },
                      "start": {
                        "column": 46,
                        "line": 47
                      }
                    },
                    "range": [
                      1478,
                      1487
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1481,
                        1487
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 47
                        },
                        "start": {
                          "column": 49,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1443,
                    1487
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 47
                    },
                    "start": {
                      "column": 11,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1496,
                          1497
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 47
                          },
                          "start": {
                            "column": 64,
                            "line": 47
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 47
                          },
                          "start": {
                            "column": 65,
                            "line": 47
                          }
                        },
                        "range": [
                          1497,
                          1512
                        ],
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    1500,
                                    1501
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 47
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
                                      "column": 77,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 69,
                                      "line": 47
                                    }
                                  },
                                  "range": [
                                    1501,
                                    1509
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      1503,
                                      1509
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 71,
                                        "line": 47
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1500,
                                  1509
                                ],
                                "loc": {
                                  "end": {
                                    "column": 77,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 47
                                  }
                                }
                              }
                            ],
                            "range": [
                              1499,
                              1510
                            ],
                            "loc": {
                              "end": {
                                "column": 78,
                                "line": 47
                              },
                              "start": {
                                "column": 67,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1499,
                            1512
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 47
                            },
                            "start": {
                              "column": 67,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        1493,
                        1512
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 47
                        },
                        "start": {
                          "column": 61,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 47
                      },
                      "start": {
                        "column": 82,
                        "line": 47
                      }
                    },
                    "range": [
                      1514,
                      1523
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1517,
                        1523
                      ],
                      "loc": {
                        "end": {
                          "column": 91,
                          "line": 47
                        },
                        "start": {
                          "column": 85,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1492,
                    1523
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 47
                    },
                    "start": {
                      "column": 60,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                1442,
                1524
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 47
                },
                "start": {
                  "column": 10,
                  "line": 47
                }
              }
            }
          },
          "range": [
            1436,
            1524
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "range": [
        949,
        1988
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 41
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
            "type": "FunctionDeclaration",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "range": [
                          2128,
                          2131
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 77
                          },
                          "start": {
                            "column": 14,
                            "line": 77
                          }
                        }
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "alternate": {
                          "type": "Literal",
                          "raw": "'button'",
                          "value": "button",
                          "range": [
                            2146,
                            2154
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 77
                            },
                            "start": {
                              "column": 32,
                              "line": 77
                            }
                          }
                        },
                        "consequent": {
                          "type": "Literal",
                          "raw": "'a'",
                          "value": "a",
                          "range": [
                            2140,
                            2143
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 77
                            },
                            "start": {
                              "column": 26,
                              "line": 77
                            }
                          }
                        },
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "url",
                          "optional": false,
                          "range": [
                            2134,
                            2137
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 77
                            },
                            "start": {
                              "column": 20,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          2134,
                          2154
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 77
                          },
                          "start": {
                            "column": 20,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        2128,
                        2154
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 77
                        },
                        "start": {
                          "column": 14,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2122,
                    2155
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "children": [
                      {
                        "type": "JSXText",
                        "range": [
                          2176,
                          2180
                        ],
                        "raw": "test",
                        "value": "test",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 78
                          },
                          "start": {
                            "column": 20,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "closingElement": {
                      "type": "JSXClosingElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "range": [
                          2182,
                          2185
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 78
                          },
                          "start": {
                            "column": 26,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2180,
                        2186
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 78
                        },
                        "start": {
                          "column": 24,
                          "line": 78
                        }
                      }
                    },
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Tag",
                        "range": [
                          2172,
                          2175
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 16,
                            "line": 78
                          }
                        }
                      },
                      "selfClosing": false,
                      "range": [
                        2171,
                        2176
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 78
                        },
                        "start": {
                          "column": 15,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      2171,
                      2186
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 78
                      },
                      "start": {
                        "column": 15,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    2164,
                    2187
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                2112,
                2193
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 51,
                  "line": 76
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                2074,
                2080
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 76
                },
                "start": {
                  "column": 13,
                  "line": 76
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "url",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 76
                    },
                    "start": {
                      "column": 24,
                      "line": 76
                    }
                  },
                  "range": [
                    2085,
                    2093
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2087,
                      2093
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 76
                      },
                      "start": {
                        "column": 26,
                        "line": 76
                      }
                    }
                  }
                },
                "range": [
                  2081,
                  2093
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 76
                  },
                  "start": {
                    "column": 20,
                    "line": 76
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 76
                },
                "start": {
                  "column": 33,
                  "line": 76
                }
              },
              "range": [
                2094,
                2111
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "React",
                    "optional": false,
                    "range": [
                      2096,
                      2101
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 76
                      },
                      "start": {
                        "column": 35,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "range": [
                      2102,
                      2111
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 76
                      },
                      "start": {
                        "column": 41,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    2096,
                    2111
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 76
                    },
                    "start": {
                      "column": 35,
                      "line": 76
                    }
                  }
                },
                "range": [
                  2096,
                  2111
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 76
                  },
                  "start": {
                    "column": 35,
                    "line": 76
                  }
                }
              }
            },
            "range": [
              2065,
              2193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 76
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Comp",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 83
                            },
                            "start": {
                              "column": 18,
                              "line": 83
                            }
                          },
                          "range": [
                            2325,
                            2342
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "range": [
                                  2327,
                                  2332
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 83
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "range": [
                                  2333,
                                  2342
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 83
                                  }
                                }
                              },
                              "range": [
                                2327,
                                2342
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 83
                                },
                                "start": {
                                  "column": 20,
                                  "line": 83
                                }
                              }
                            },
                            "range": [
                              2327,
                              2342
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 83
                              },
                              "start": {
                                "column": 20,
                                "line": 83
                              }
                            }
                          }
                        },
                        "range": [
                          2321,
                          2342
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 83
                          },
                          "start": {
                            "column": 14,
                            "line": 83
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "range": [
                            2345,
                            2350
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 83
                            },
                            "start": {
                              "column": 38,
                              "line": 83
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "range": [
                            2351,
                            2360
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 83
                            },
                            "start": {
                              "column": 44,
                              "line": 83
                            }
                          }
                        },
                        "range": [
                          2345,
                          2360
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 83
                          },
                          "start": {
                            "column": 38,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        2321,
                        2360
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 83
                        },
                        "start": {
                          "column": 14,
                          "line": 83
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2315,
                    2361
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        2378,
                        2386
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "Comp",
                        "range": [
                          2379,
                          2383
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 84
                          },
                          "start": {
                            "column": 17,
                            "line": 84
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 84
                        },
                        "start": {
                          "column": 16,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      2378,
                      2386
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 84
                      },
                      "start": {
                        "column": 16,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2370,
                    2388
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                2305,
                2394
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 55,
                  "line": 82
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "App",
              "optional": false,
              "range": [
                2263,
                2266
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 82
                },
                "start": {
                  "column": 13,
                  "line": 82
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 82
                    },
                    "start": {
                      "column": 22,
                      "line": 82
                    }
                  },
                  "range": [
                    2272,
                    2303
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "component",
                          "optional": false,
                          "range": [
                            2276,
                            2285
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 82
                            },
                            "start": {
                              "column": 26,
                              "line": 82
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
                              "column": 51,
                              "line": 82
                            },
                            "start": {
                              "column": 35,
                              "line": 82
                            }
                          },
                          "range": [
                            2285,
                            2301
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "React",
                                "optional": false,
                                "range": [
                                  2286,
                                  2291
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 82
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReactType",
                                "optional": false,
                                "range": [
                                  2292,
                                  2301
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 82
                                  }
                                }
                              },
                              "range": [
                                2286,
                                2301
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 82
                                },
                                "start": {
                                  "column": 36,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              2286,
                              2301
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 82
                              },
                              "start": {
                                "column": 36,
                                "line": 82
                              }
                            }
                          }
                        },
                        "range": [
                          2276,
                          2301
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 82
                          },
                          "start": {
                            "column": 26,
                            "line": 82
                          }
                        }
                      }
                    ],
                    "range": [
                      2274,
                      2303
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 82
                      },
                      "start": {
                        "column": 24,
                        "line": 82
                      }
                    }
                  }
                },
                "range": [
                  2267,
                  2303
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 82
                  },
                  "start": {
                    "column": 17,
                    "line": 82
                  }
                }
              }
            ],
            "range": [
              2254,
              2394
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 82
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
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      2489,
                      2549
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "range": [
                            2503,
                            2504
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 90
                            },
                            "start": {
                              "column": 12,
                              "line": 90
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 90
                            },
                            "start": {
                              "column": 14,
                              "line": 90
                            }
                          },
                          "range": [
                            2505,
                            2514
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              2507,
                              2514
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 90
                              },
                              "start": {
                                "column": 16,
                                "line": 90
                              }
                            }
                          }
                        },
                        "range": [
                          2503,
                          2515
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 90
                          },
                          "start": {
                            "column": 12,
                            "line": 90
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            2528,
                            2529
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 91
                            },
                            "start": {
                              "column": 12,
                              "line": 91
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 91
                            },
                            "start": {
                              "column": 14,
                              "line": 91
                            }
                          },
                          "range": [
                            2530,
                            2538
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2532,
                              2538
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 91
                              },
                              "start": {
                                "column": 16,
                                "line": 91
                              }
                            }
                          }
                        },
                        "range": [
                          2528,
                          2539
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 91
                          },
                          "start": {
                            "column": 12,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 92
                      },
                      "start": {
                        "column": 21,
                        "line": 89
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P1",
                    "optional": false,
                    "range": [
                      2486,
                      2488
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 89
                      },
                      "start": {
                        "column": 18,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2476,
                    2549
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "body": {
                    "type": "TSInterfaceBody",
                    "range": [
                      2571,
                      2649
                    ],
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "range": [
                            2585,
                            2586
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 94
                            },
                            "start": {
                              "column": 12,
                              "line": 94
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 94
                            },
                            "start": {
                              "column": 14,
                              "line": 94
                            }
                          },
                          "range": [
                            2587,
                            2596
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              2589,
                              2596
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 94
                              },
                              "start": {
                                "column": 16,
                                "line": 94
                              }
                            }
                          }
                        },
                        "range": [
                          2585,
                          2597
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 94
                          },
                          "start": {
                            "column": 12,
                            "line": 94
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            2610,
                            2611
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 95
                            },
                            "start": {
                              "column": 12,
                              "line": 95
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 95
                            },
                            "start": {
                              "column": 14,
                              "line": 95
                            }
                          },
                          "range": [
                            2612,
                            2617
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              2614,
                              2617
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 95
                              },
                              "start": {
                                "column": 16,
                                "line": 95
                              }
                            }
                          }
                        },
                        "range": [
                          2610,
                          2618
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 95
                          },
                          "start": {
                            "column": 12,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            2631,
                            2632
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 96
                            },
                            "start": {
                              "column": 12,
                              "line": 96
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 96
                            },
                            "start": {
                              "column": 14,
                              "line": 96
                            }
                          },
                          "range": [
                            2633,
                            2638
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              2635,
                              2638
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 96
                              },
                              "start": {
                                "column": 16,
                                "line": 96
                              }
                            }
                          }
                        },
                        "range": [
                          2631,
                          2639
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 96
                          },
                          "start": {
                            "column": 12,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 97
                      },
                      "start": {
                        "column": 21,
                        "line": 93
                      }
                    }
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P2",
                    "optional": false,
                    "range": [
                      2568,
                      2570
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 93
                      },
                      "start": {
                        "column": 18,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    2558,
                    2649
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 99
                            },
                            "start": {
                              "column": 13,
                              "line": 99
                            }
                          },
                          "range": [
                            2664,
                            2715
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    2685,
                                    2689
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P1",
                                        "optional": false,
                                        "range": [
                                          2686,
                                          2688
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 37,
                                            "line": 99
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 99
                                          }
                                        }
                                      },
                                      "range": [
                                        2686,
                                        2688
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 99
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 99
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 99
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "range": [
                                      2666,
                                      2671
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 99
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 99
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "range": [
                                      2672,
                                      2685
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 99
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 99
                                      }
                                    }
                                  },
                                  "range": [
                                    2666,
                                    2685
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 99
                                    }
                                  }
                                },
                                "range": [
                                  2666,
                                  2689
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 99
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    2711,
                                    2715
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "P2",
                                        "optional": false,
                                        "range": [
                                          2712,
                                          2714
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 63,
                                            "line": 99
                                          },
                                          "start": {
                                            "column": 61,
                                            "line": 99
                                          }
                                        }
                                      },
                                      "range": [
                                        2712,
                                        2714
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 99
                                        },
                                        "start": {
                                          "column": 61,
                                          "line": 99
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 64,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 60,
                                      "line": 99
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "React",
                                    "optional": false,
                                    "range": [
                                      2692,
                                      2697
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 99
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 99
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ComponentType",
                                    "optional": false,
                                    "range": [
                                      2698,
                                      2711
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 60,
                                        "line": 99
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 99
                                      }
                                    }
                                  },
                                  "range": [
                                    2692,
                                    2711
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 60,
                                      "line": 99
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 99
                                    }
                                  }
                                },
                                "range": [
                                  2692,
                                  2715
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 99
                                  }
                                }
                              }
                            ],
                            "range": [
                              2666,
                              2715
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 99
                              },
                              "start": {
                                "column": 15,
                                "line": 99
                              }
                            }
                          }
                        },
                        "range": [
                          2663,
                          2715
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 99
                          },
                          "start": {
                            "column": 12,
                            "line": 99
                          }
                        }
                      },
                      "init": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "raw": "null",
                          "value": null,
                          "range": [
                            2718,
                            2722
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 99
                            },
                            "start": {
                              "column": 67,
                              "line": 99
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2726,
                            2729
                          ],
                          "loc": {
                            "end": {
                              "column": 78,
                              "line": 99
                            },
                            "start": {
                              "column": 75,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2718,
                          2729
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 99
                          },
                          "start": {
                            "column": 67,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        2663,
                        2729
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 99
                        },
                        "start": {
                          "column": 12,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2659,
                    2730
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          2746,
                          2747
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 101
                          },
                          "start": {
                            "column": 14,
                            "line": 101
                          }
                        }
                      },
                      "init": {
                        "type": "JSXElement",
                        "children": [],
                        "closingElement": null,
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "range": [
                            2750,
                            2764
                          ],
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "p",
                                "range": [
                                  2753,
                                  2754
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 101
                                  }
                                }
                              },
                              "value": {
                                "type": "JSXExpressionContainer",
                                "expression": {
                                  "type": "Literal",
                                  "raw": "true",
                                  "value": true,
                                  "range": [
                                    2756,
                                    2760
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 101
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 101
                                    }
                                  }
                                },
                                "range": [
                                  2755,
                                  2761
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 101
                                  }
                                }
                              },
                              "range": [
                                2753,
                                2761
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 101
                                },
                                "start": {
                                  "column": 21,
                                  "line": 101
                                }
                              }
                            }
                          ],
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "C",
                            "range": [
                              2751,
                              2752
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 101
                              },
                              "start": {
                                "column": 19,
                                "line": 101
                              }
                            }
                          },
                          "selfClosing": true,
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 101
                            },
                            "start": {
                              "column": 18,
                              "line": 101
                            }
                          }
                        },
                        "range": [
                          2750,
                          2764
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 101
                          },
                          "start": {
                            "column": 18,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        2746,
                        2764
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 101
                        },
                        "start": {
                          "column": 14,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2740,
                    2765
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
                    }
                  }
                }
              ],
              "range": [
                2466,
                2771
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 23,
                  "line": 88
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "render2",
              "optional": false,
              "range": [
                2456,
                2463
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 88
                },
                "start": {
                  "column": 13,
                  "line": 88
                }
              }
            },
            "params": [],
            "range": [
              2447,
              2771
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          2024,
          2773
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 17,
            "line": 74
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "range": [
          2016,
          2021
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 74
          },
          "start": {
            "column": 9,
            "line": 74
          }
        }
      },
      "params": [],
      "range": [
        2007,
        2773
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 104
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
