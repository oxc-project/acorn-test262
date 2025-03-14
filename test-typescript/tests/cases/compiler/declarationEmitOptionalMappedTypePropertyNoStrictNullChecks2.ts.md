__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    271
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Id",
        "optional": false,
        "range": [
          5,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 2
                    },
                    "start": {
                      "column": 14,
                      "line": 2
                    }
                  }
                },
                "range": [
                  29,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                30
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                18,
                19
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    35,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  }
                },
                "range": [
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    33,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  33,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "range": [
                33,
                37
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              40
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              43,
              45
            ],
            "loc": {
              "end": {
                "column": 6,
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
          13,
          45
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        46
      ],
      "loc": {
        "end": {
          "column": 7,
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
        48,
        270
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createApi",
          "optional": false,
          "range": [
            72,
            81
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 5
            },
            "start": {
              "column": 24,
              "line": 5
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 5
                },
                "start": {
                  "column": 48,
                  "line": 5
                }
              },
              "range": [
                96,
                124
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
                      "name": "endpoints",
                      "optional": false,
                      "range": [
                        100,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 5
                        },
                        "start": {
                          "column": 52,
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
                          "column": 74,
                          "line": 5
                        },
                        "start": {
                          "column": 61,
                          "line": 5
                        }
                      },
                      "range": [
                        109,
                        122
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Definitions",
                          "optional": false,
                          "range": [
                            111,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 5
                            },
                            "start": {
                              "column": 63,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          111,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 5
                          },
                          "start": {
                            "column": 63,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      100,
                      122
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 5
                      },
                      "start": {
                        "column": 52,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  98,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 5
                  },
                  "start": {
                    "column": 50,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              95,
              124
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 77,
              "line": 5
            }
          },
          "range": [
            125,
            269
          ],
          "typeAnnotation": {
            "type": "TSMappedType",
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Definitions",
                  "optional": false,
                  "range": [
                    143,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                },
                "range": [
                  143,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              },
              "range": [
                137,
                154
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                132,
                133
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 6
                },
                "start": {
                  "column": 3,
                  "line": 6
                }
              }
            },
            "nameType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "tail": false,
                  "value": {
                    "cooked": "use",
                    "raw": "use"
                  },
                  "range": [
                    158,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 29,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TemplateElement",
                  "tail": true,
                  "value": {
                    "cooked": "Query",
                    "raw": "Query"
                  },
                  "range": [
                    186,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 6
                    },
                    "start": {
                      "column": 57,
                      "line": 6
                    }
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      174,
                      186
                    ],
                    "params": [
                      {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "range": [
                                175,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 6
                                },
                                "start": {
                                  "column": 46,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              175,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 6
                              },
                              "start": {
                                "column": 46,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              179,
                              185
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 6
                              },
                              "start": {
                                "column": 50,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          175,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 6
                          },
                          "start": {
                            "column": 46,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 6
                      },
                      "start": {
                        "column": 45,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Capitalize",
                    "optional": false,
                    "range": [
                      164,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 6
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    164,
                    186
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                158,
                193
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 6
                },
                "start": {
                  "column": 29,
                  "line": 6
                }
              }
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 9
                  },
                  "start": {
                    "column": 70,
                    "line": 6
                  }
                },
                "range": [
                  199,
                  266
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      204,
                      266
                    ],
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "status",
                              "optional": false,
                              "range": [
                                211,
                                217
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 7
                                },
                                "start": {
                                  "column": 4,
                                  "line": 7
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
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 10,
                                  "line": 7
                                }
                              },
                              "range": [
                                217,
                                234
                              ],
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "raw": "\"uninitialized\"",
                                  "value": "uninitialized",
                                  "range": [
                                    219,
                                    234
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  219,
                                  234
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              211,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 7
                              },
                              "start": {
                                "column": 4,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "originalArgs",
                              "optional": false,
                              "range": [
                                240,
                                252
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 8
                                },
                                "start": {
                                  "column": 4,
                                  "line": 8
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
                                  "line": 8
                                },
                                "start": {
                                  "column": 17,
                                  "line": 8
                                }
                              },
                              "range": [
                                253,
                                260
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "range": [
                                    255,
                                    258
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  255,
                                  260
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              240,
                              261
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 8
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "range": [
                          205,
                          265
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 9
                          },
                          "start": {
                            "column": 76,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 9
                      },
                      "start": {
                        "column": 75,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "range": [
                      202,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 6
                      },
                      "start": {
                        "column": 73,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    202,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 9
                    },
                    "start": {
                      "column": 73,
                      "line": 6
                    }
                  }
                }
              },
              "range": [
                196,
                266
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 9
                },
                "start": {
                  "column": 67,
                  "line": 6
                }
              }
            },
            "range": [
              127,
              269
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 79,
                "line": 5
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 46,
              "line": 5
            },
            "start": {
              "column": 33,
              "line": 5
            }
          },
          "range": [
            81,
            94
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Definitions",
                "optional": false,
                "range": [
                  82,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                82,
                93
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          55,
          270
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
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
      "line": 11
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
    171
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./createApi\"",
        "value": "./createApi",
        "range": [
          26,
          39
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 1
          },
          "start": {
            "column": 26,
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
            "name": "createApi",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "name": "createApi",
            "optional": false,
            "range": [
              9,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
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
            18
          ],
          "loc": {
            "end": {
              "column": 18,
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
        40
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "slice",
            "optional": false,
            "range": [
              48,
              53
            ],
            "loc": {
              "end": {
                "column": 11,
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
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "endpoints",
                      "optional": false,
                      "range": [
                        70,
                        79
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
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              87,
                              91
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 5
                              },
                              "start": {
                                "column": 4,
                                "line": 5
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "url",
                                  "optional": false,
                                  "range": [
                                    101,
                                    104
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 6
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "TemplateLiteral",
                                  "expressions": [],
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "tail": true,
                                      "value": {
                                        "cooked": "/user",
                                        "raw": "/user"
                                      },
                                      "range": [
                                        106,
                                        113
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 6
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 6
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    106,
                                    113
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  101,
                                  113
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "range": [
                              93,
                              120
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 7
                              },
                              "start": {
                                "column": 10,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            87,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 7
                            },
                            "start": {
                              "column": 4,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        81,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      70,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 8
                      },
                      "start": {
                        "column": 2,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  66,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "createApi",
              "optional": false,
              "range": [
                56,
                65
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              56,
              129
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "range": [
            48,
            129
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 9
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
        42,
        130
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 9
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
        132,
        170
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "range": [
                      147,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useTestQuery",
                    "optional": false,
                    "range": [
                      147,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    147,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                145,
                161
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "range": [
                164,
                169
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 11
                },
                "start": {
                  "column": 32,
                  "line": 11
                }
              }
            },
            "range": [
              145,
              169
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          139,
          170
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 38,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
