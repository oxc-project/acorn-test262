__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    170
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        66
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            37,
            66
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "rejectOnNotFound",
                "optional": false,
                "range": [
                  41,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
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
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                },
                "range": [
                  58,
                  63
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    60,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                41,
                64
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
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
              "line": 3
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PrismaClientOptions",
          "optional": false,
          "range": [
            17,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "range": [
          7,
          66
        ],
        "loc": {
          "end": {
            "column": 1,
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
          "column": 1,
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
        68,
        169
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            147,
            169
          ],
          "body": [
            {
              "type": "PropertyDefinition",
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fetcher",
                "optional": false,
                "range": [
                  159,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null,
              "range": [
                151,
                167
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 79,
              "line": 5
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "PrismaClient",
          "optional": false,
          "range": [
            81,
            93
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 78,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          },
          "range": [
            93,
            146
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
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "range": [
                    104,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                },
                "range": [
                  104,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PrismaClientOptions",
                  "optional": false,
                  "range": [
                    126,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 5
                    },
                    "start": {
                      "column": 58,
                      "line": 5
                    }
                  }
                },
                "range": [
                  126,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 5
                  },
                  "start": {
                    "column": 58,
                    "line": 5
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
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                94,
                145
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          75,
          169
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
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
    32
  ],
  "body": [
    {
      "type": "ExportAllDeclaration",
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\".prisma/client\"",
        "value": ".prisma/client",
        "range": [
          14,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
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
    258
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"@prisma/client\"",
        "value": "@prisma/client",
        "range": [
          29,
          45
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 1
          },
          "start": {
            "column": 29,
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
            "name": "PrismaClient",
            "optional": false,
            "range": [
              9,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "name": "PrismaClient",
            "optional": false,
            "range": [
              9,
              21
            ],
            "loc": {
              "end": {
                "column": 21,
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
            21
          ],
          "loc": {
            "end": {
              "column": 21,
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
        46
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "enhancePrisma",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 120,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              },
              "range": [
                74,
                167
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "client",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 55,
                          "line": 2
                        }
                      },
                      "range": [
                        102,
                        121
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "range": [
                            104,
                            121
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 2
                            },
                            "start": {
                              "column": 57,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          104,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 2
                          },
                          "start": {
                            "column": 57,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      96,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 2
                      },
                      "start": {
                        "column": 49,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 120,
                      "line": 2
                    },
                    "start": {
                      "column": 76,
                      "line": 2
                    }
                  },
                  "range": [
                    123,
                    167
                  ],
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPrismaClientCtor",
                          "optional": false,
                          "range": [
                            126,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 96,
                              "line": 2
                            },
                            "start": {
                              "column": 79,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          126,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 96,
                            "line": 2
                          },
                          "start": {
                            "column": 79,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "enhanced",
                              "optional": false,
                              "range": [
                                148,
                                156
                              ],
                              "loc": {
                                "end": {
                                  "column": 109,
                                  "line": 2
                                },
                                "start": {
                                  "column": 101,
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
                                  "column": 118,
                                  "line": 2
                                },
                                "start": {
                                  "column": 109,
                                  "line": 2
                                }
                              },
                              "range": [
                                156,
                                165
                              ],
                              "typeAnnotation": {
                                "type": "TSUnknownKeyword",
                                "range": [
                                  158,
                                  165
                                ],
                                "loc": {
                                  "end": {
                                    "column": 118,
                                    "line": 2
                                  },
                                  "start": {
                                    "column": 111,
                                    "line": 2
                                  }
                                }
                              }
                            },
                            "range": [
                              148,
                              165
                            ],
                            "loc": {
                              "end": {
                                "column": 118,
                                "line": 2
                              },
                              "start": {
                                "column": 101,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          146,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 120,
                            "line": 2
                          },
                          "start": {
                            "column": 99,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      126,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 120,
                        "line": 2
                      },
                      "start": {
                        "column": 79,
                        "line": 2
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 2
                    },
                    "start": {
                      "column": 29,
                      "line": 2
                    }
                  },
                  "range": [
                    76,
                    95
                  ],
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPrismaClientCtor",
                        "optional": false,
                        "range": [
                          77,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        77,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    }
                  ]
                },
                "range": [
                  76,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 120,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              61,
              167
            ],
            "loc": {
              "end": {
                "column": 120,
                "line": 2
              },
              "start": {
                "column": 14,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            61,
            167
          ],
          "loc": {
            "end": {
              "column": 120,
              "line": 2
            },
            "start": {
              "column": 14,
              "line": 2
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        47,
        168
      ],
      "loc": {
        "end": {
          "column": 121,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "EnhancedPrisma",
            "optional": false,
            "range": [
              175,
              189
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "PrismaClient",
                "optional": false,
                "range": [
                  206,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 3
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "enhancePrisma",
              "optional": false,
              "range": [
                192,
                205
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              192,
              219
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            }
          },
          "range": [
            175,
            219
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        169,
        220
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EnhancedPrisma",
          "optional": false,
          "range": [
            240,
            254
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 4
            },
            "start": {
              "column": 19,
              "line": 4
            }
          }
        },
        "range": [
          236,
          256
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "range": [
        221,
        257
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
