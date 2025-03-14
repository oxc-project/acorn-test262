__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    161
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        160
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "handleParamGovernance",
          "optional": false,
          "range": [
            16,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "zcf",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 41,
                  "line": 1
                }
              },
              "range": [
                41,
                46
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  43,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 1
                  },
                  "start": {
                    "column": 43,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              38,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 38,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 47,
              "line": 1
            }
          },
          "range": [
            47,
            159
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
                  "name": "publicMixin",
                  "optional": false,
                  "range": [
                    53,
                    64
                  ],
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
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  },
                  "range": [
                    64,
                    156
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
                          "name": "getGovernedParams",
                          "optional": false,
                          "range": [
                            72,
                            89
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 3
                            },
                            "start": {
                              "column": 4,
                              "line": 3
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
                              "column": 83,
                              "line": 3
                            },
                            "start": {
                              "column": 21,
                              "line": 3
                            }
                          },
                          "range": [
                            89,
                            151
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 3
                                },
                                "start": {
                                  "column": 26,
                                  "line": 3
                                }
                              },
                              "range": [
                                94,
                                151
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    112,
                                    151
                                  ],
                                  "params": [
                                    {
                                      "type": "TSImportType",
                                      "range": [
                                        113,
                                        150
                                      ],
                                      "argument": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "raw": "\"./types.js\"",
                                          "value": "./types.js",
                                          "range": [
                                            120,
                                            132
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 64,
                                              "line": 3
                                            },
                                            "start": {
                                              "column": 52,
                                              "line": 3
                                            }
                                          }
                                        },
                                        "range": [
                                          120,
                                          132
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 64,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 3
                                          }
                                        }
                                      },
                                      "options": null,
                                      "qualifier": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ParamStateRecord",
                                        "optional": false,
                                        "range": [
                                          134,
                                          150
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 82,
                                            "line": 3
                                          },
                                          "start": {
                                            "column": 66,
                                            "line": 3
                                          }
                                        }
                                      },
                                      "typeArguments": null,
                                      "loc": {
                                        "end": {
                                          "column": 82,
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
                                      "column": 83,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 3
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "globalThis",
                                    "optional": false,
                                    "range": [
                                      97,
                                      107
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ERef",
                                    "optional": false,
                                    "range": [
                                      108,
                                      112
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 40,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "range": [
                                    97,
                                    112
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  97,
                                  151
                                ],
                                "loc": {
                                  "end": {
                                    "column": 83,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 3
                                  }
                                }
                              }
                            },
                            "range": [
                              91,
                              151
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 3
                              },
                              "start": {
                                "column": 23,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          72,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 3
                          },
                          "start": {
                            "column": 4,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      66,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                },
                "range": [
                  53,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              49,
              159
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 49,
                "line": 1
              }
            }
          }
        },
        "range": [
          7,
          160
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 5
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
          "column": 2,
          "line": 5
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
      "line": 6
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
    220
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ERef",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
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
              "name": "T",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              }
            },
            "range": [
              16,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                27,
                30
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
                      28,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    28,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 27,
                  "line": 1
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
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
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 20,
                "line": 1
              }
            }
          }
        ],
        "range": [
          16,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
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
        "raw": "'./types.js'",
        "value": "./types.js",
        "range": [
          86,
          98
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 2
          },
          "start": {
            "column": 54,
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
            "name": "ParamStateRecord",
            "optional": false,
            "range": [
              41,
              57
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "name": "_ParamStateRecord",
            "optional": false,
            "range": [
              61,
              78
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          "range": [
            41,
            78
          ],
          "loc": {
            "end": {
              "column": 46,
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
        99
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "attributes": [],
            "declaration": null,
            "exportKind": "value",
            "source": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ERef",
                  "optional": false,
                  "range": [
                    164,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ERef",
                  "optional": false,
                  "range": [
                    155,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "range": [
                  155,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              {
                "type": "ExportSpecifier",
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParamStateRecord",
                  "optional": false,
                  "range": [
                    195,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                },
                "exportKind": "value",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_ParamStateRecord",
                  "optional": false,
                  "range": [
                    174,
                    191
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                "range": [
                  174,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              142,
              217
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          }
        ],
        "range": [
          115,
          219
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          108,
          114
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
      "kind": "global",
      "range": [
        100,
        219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
      "column": 0,
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
