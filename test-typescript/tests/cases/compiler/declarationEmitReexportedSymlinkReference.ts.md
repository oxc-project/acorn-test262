__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    24
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./types'",
        "value": "./types",
        "range": [
          14,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
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
      "column": 24,
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
    360
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        44
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "range": [
            20,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  30,
                  32
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                },
                "range": [
                  32,
                  40
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    34,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                30,
                41
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            24,
            43
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "range": [
          7,
          44
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 3
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
          "column": 2,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        45,
        89
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "range": [
            65,
            66
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  75,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 5
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
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                },
                "range": [
                  77,
                  85
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    79,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                75,
                86
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            69,
            88
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 24,
              "line": 4
            }
          }
        },
        "range": [
          52,
          89
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
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
        90,
        125
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": true,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IdType",
          "optional": false,
          "range": [
            110,
            116
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 20,
              "line": 7
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 29,
                    "line": 7
                  }
                }
              },
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "range": [
                123,
                124
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            119,
            124
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        },
        "range": [
          97,
          125
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
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
        126,
        360
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            194,
            360
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  209,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
                    "line": 9
                  }
                },
                "range": [
                  212,
                  220
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    214,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 18,
                      "line": 9
                    }
                  }
                }
              },
              "value": null,
              "range": [
                200,
                221
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  234,
                  245
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  245,
                  248
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 23,
                    "line": 10
                  }
                }
              },
              "range": [
                226,
                248
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "range": [
                  253,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  261,
                  272
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 14,
                      "line": 11
                    }
                  },
                  "range": [
                    263,
                    271
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      265,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 11
                      },
                      "start": {
                        "column": 16,
                        "line": 11
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              },
              "range": [
                253,
                272
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "range": [
                  284,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  290,
                  358
                ],
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 12
                        },
                        "start": {
                          "column": 51,
                          "line": 12
                        }
                      },
                      "range": [
                        324,
                        332
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          326,
                          332
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 12
                          },
                          "start": {
                            "column": 53,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      321,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 12
                      },
                      "start": {
                        "column": 48,
                        "line": 12
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 12
                    },
                    "start": {
                      "column": 60,
                      "line": 12
                    }
                  },
                  "range": [
                    333,
                    357
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        351,
                        357
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
                              352,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 12
                              },
                              "start": {
                                "column": 79,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            352,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 12
                            },
                            "start": {
                              "column": 79,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "range": [
                              355,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 12
                              },
                              "start": {
                                "column": 82,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            355,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 12
                            },
                            "start": {
                              "column": 82,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 12
                        },
                        "start": {
                          "column": 78,
                          "line": 12
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MetadataAccessor",
                      "optional": false,
                      "range": [
                        335,
                        351
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 12
                        },
                        "start": {
                          "column": 62,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      335,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 12
                      },
                      "start": {
                        "column": 62,
                        "line": 12
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  },
                  "range": [
                    290,
                    320
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
                          291,
                          292
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
                      "out": false,
                      "range": [
                        291,
                        292
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
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IdType",
                          "optional": false,
                          "range": [
                            304,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 12
                            },
                            "start": {
                              "column": 31,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          304,
                          310
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 12
                          },
                          "start": {
                            "column": 31,
                            "line": 12
                          }
                        }
                      },
                      "default": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IdType",
                          "optional": false,
                          "range": [
                            313,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 12
                            },
                            "start": {
                              "column": 40,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          313,
                          319
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 12
                          },
                          "start": {
                            "column": 40,
                            "line": 12
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          294,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 21,
                            "line": 12
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        294,
                        319
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    }
                  ]
                },
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              },
              "range": [
                277,
                358
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 68,
              "line": 8
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MetadataAccessor",
          "optional": false,
          "range": [
            147,
            163
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 67,
              "line": 8
            },
            "start": {
              "column": 37,
              "line": 8
            }
          },
          "range": [
            163,
            193
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
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 38,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 8
                }
              }
            },
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdType",
                  "optional": false,
                  "range": [
                    177,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 51,
                      "line": 8
                    }
                  }
                },
                "range": [
                  177,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 8
                  },
                  "start": {
                    "column": 51,
                    "line": 8
                  }
                }
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IdType",
                  "optional": false,
                  "range": [
                    186,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 8
                    },
                    "start": {
                      "column": 60,
                      "line": 8
                    }
                  }
                },
                "range": [
                  186,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 8
                  },
                  "start": {
                    "column": 60,
                    "line": 8
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  167,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 41,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                167,
                192
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 8
                },
                "start": {
                  "column": 41,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          133,
          360
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "module",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    24
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./types'",
        "value": "./types",
        "range": [
          14,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
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
      "column": 24,
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
    34
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'@raymondfeng/pkg1'",
        "value": "@raymondfeng/pkg1",
        "range": [
          14,
          33
        ],
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
      "range": [
        0,
        34
      ],
      "loc": {
        "end": {
          "column": 34,
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
      "column": 34,
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
    23
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./keys'",
        "value": "./keys",
        "range": [
          14,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
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
      "column": 23,
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
    112
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@raymondfeng/pkg2\"",
        "value": "@raymondfeng/pkg2",
        "range": [
          31,
          50
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 31,
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
            "name": "MetadataAccessor",
            "optional": false,
            "range": [
              8,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MetadataAccessor",
            "optional": false,
            "range": [
              8,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            8,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 8,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        53,
        112
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
              "name": "ADMIN",
              "optional": false,
              "range": [
                66,
                71
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "'1'",
                  "value": "1",
                  "range": [
                    107,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 3
                    },
                    "start": {
                      "column": 54,
                      "line": 3
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
                  "name": "MetadataAccessor",
                  "optional": false,
                  "range": [
                    74,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 3
                    },
                    "start": {
                      "column": 21,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "create",
                  "optional": false,
                  "range": [
                    91,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  97,
                  106
                ],
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      98,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 3
                      },
                      "start": {
                        "column": 45,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
                  }
                }
              },
              "range": [
                74,
                111
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              66,
              111
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          60,
          112
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 59,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 59,
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
