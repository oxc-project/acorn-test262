__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    137
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./Configurable\"",
        "value": "./Configurable",
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
            "name": "Configurable",
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
            "name": "Configurable",
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
        45
      ],
      "loc": {
        "end": {
          "column": 45,
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
        47,
        74
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            72,
            74
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 25,
              "line": 3
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HiddenClass",
          "optional": false,
          "range": [
            60,
            71
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          54,
          74
        ],
        "loc": {
          "end": {
            "column": 27,
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
          "column": 27,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        76,
        137
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            135,
            137
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 61,
              "line": 5
            },
            "start": {
              "column": 59,
              "line": 5
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ActualClass",
          "optional": false,
          "range": [
            89,
            100
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "HiddenClass",
              "optional": false,
              "range": [
                122,
                133
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 5
                },
                "start": {
                  "column": 46,
                  "line": 5
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Configurable",
            "optional": false,
            "range": [
              109,
              121
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 33,
                "line": 5
              }
            }
          },
          "optional": false,
          "range": [
            109,
            134
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 5
            },
            "start": {
              "column": 33,
              "line": 5
            }
          }
        },
        "range": [
          83,
          137
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 5
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
          "column": 61,
          "line": 5
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
      "column": 61,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    250
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        60
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
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
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      42,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    },
                    "range": [
                      46,
                      53
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          48,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        48,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    39,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                },
                "range": [
                  54,
                  57
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      56,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    56,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 25,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                35,
                58
              ],
              "loc": {
                "end": {
                  "column": 27,
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
            29,
            60
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 29,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 26,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          },
          "range": [
            23,
            26
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
                  24,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 1
                  },
                  "start": {
                    "column": 24,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          60
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
        61,
        249
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
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    161,
                    246
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "range": [
                          172,
                          183
                        ],
                        "decorators": [],
                        "name": "constructor",
                        "optional": false,
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
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
                          183,
                          239
                        ],
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
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "range": [
                                        223,
                                        227
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      220,
                                      227
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 8
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Super",
                                  "range": [
                                    214,
                                    219
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 8
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  214,
                                  228
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                214,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            200,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 9
                            },
                            "start": {
                              "column": 36,
                              "line": 7
                            }
                          }
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "args",
                              "optional": false,
                              "range": [
                                187,
                                191
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
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 7
                                },
                                "start": {
                                  "column": 27,
                                  "line": 7
                                }
                              },
                              "range": [
                                191,
                                198
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    193,
                                    196
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  193,
                                  198
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
                              }
                            },
                            "range": [
                              184,
                              198
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 9
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        172,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 7
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
                      "column": 30,
                      "line": 5
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
                  "name": "base",
                  "optional": false,
                  "range": [
                    156,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "range": [
                  142,
                  246
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                135,
                247
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            129,
            249
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 68,
              "line": 4
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Configurable",
          "optional": false,
          "range": [
            77,
            89
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 4
                },
                "start": {
                  "column": 60,
                  "line": 4
                }
              },
              "range": [
                121,
                124
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    123,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 4
                    },
                    "start": {
                      "column": 62,
                      "line": 4
                    }
                  }
                },
                "range": [
                  123,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 62,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              117,
              124
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 56,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 67,
              "line": 4
            },
            "start": {
              "column": 64,
              "line": 4
            }
          },
          "range": [
            125,
            128
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                127,
                128
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 4
                },
                "start": {
                  "column": 66,
                  "line": 4
                }
              }
            },
            "range": [
              127,
              128
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 4
              },
              "start": {
                "column": 66,
                "line": 4
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 55,
              "line": 4
            },
            "start": {
              "column": 28,
              "line": 4
            }
          },
          "range": [
            89,
            116
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    111,
                    115
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        112,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 4
                        },
                        "start": {
                          "column": 51,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 4
                    },
                    "start": {
                      "column": 50,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "range": [
                    100,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 39,
                      "line": 4
                    }
                  }
                },
                "range": [
                  100,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 4
                  },
                  "start": {
                    "column": 39,
                    "line": 4
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
                  90,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 29,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                90,
                115
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          68,
          249
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
