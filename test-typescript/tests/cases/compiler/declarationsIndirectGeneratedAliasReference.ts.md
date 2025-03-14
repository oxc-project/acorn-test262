__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    238
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        40
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            22,
            40
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  28,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 5,
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
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                },
                "range": [
                  29,
                  37
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    31,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 7,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                28,
                38
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
              "column": 22,
              "line": 1
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Ctor",
          "optional": false,
          "range": [
            17,
            21
          ],
          "loc": {
            "end": {
              "column": 21,
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
          40
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
        41,
        91
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedCtor",
          "optional": false,
          "range": [
            53,
            65
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 4
            },
            "start": {
              "column": 12,
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
                "name": "x",
                "optional": false,
                "range": [
                  72,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
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
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 4
                  }
                },
                "range": [
                  73,
                  81
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    75,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                72,
                82
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 4
                },
                "start": {
                  "column": 31,
                  "line": 4
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ext",
                "optional": false,
                "range": [
                  83,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
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
                    "column": 48,
                    "line": 4
                  },
                  "start": {
                    "column": 45,
                    "line": 4
                  }
                },
                "range": [
                  86,
                  89
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      88,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 4
                      },
                      "start": {
                        "column": 47,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    88,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 4
                    },
                    "start": {
                      "column": 47,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                83,
                89
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 4
                },
                "start": {
                  "column": 42,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            71,
            90
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 4
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 27,
              "line": 4
            },
            "start": {
              "column": 24,
              "line": 4
            }
          },
          "range": [
            65,
            68
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
                  66,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              },
              "out": false,
              "range": [
                66,
                67
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 25,
                  "line": 4
                }
              }
            }
          ]
        },
        "range": [
          48,
          91
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 4
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
          "column": 50,
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
        92,
        202
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            125,
            202
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extends",
                "optional": false,
                "range": [
                  131,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    },
                    "range": [
                      143,
                      146
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          145,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 18,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    142,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 6
                  }
                },
                "range": [
                  147,
                  199
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      161,
                      199
                    ],
                    "params": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              162,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 6
                              },
                              "start": {
                                "column": 35,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            162,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 6
                            },
                            "start": {
                              "column": 35,
                              "line": 6
                            }
                          }
                        },
                        "extendsType": {
                          "type": "TSUnknownKeyword",
                          "range": [
                            172,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 6
                            },
                            "start": {
                              "column": 45,
                              "line": 6
                            }
                          }
                        },
                        "falseType": {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            189,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 6
                            },
                            "start": {
                              "column": 62,
                              "line": 6
                            }
                          }
                        },
                        "trueType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Ctor",
                            "optional": false,
                            "range": [
                              182,
                              186
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 6
                              },
                              "start": {
                                "column": 55,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            182,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 6
                            },
                            "start": {
                              "column": 55,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          162,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 6
                          },
                          "start": {
                            "column": 35,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 6
                      },
                      "start": {
                        "column": 34,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExtendedCtor",
                    "optional": false,
                    "range": [
                      149,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    149,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                },
                "range": [
                  138,
                  141
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
                        139,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "range": [
                131,
                200
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
              "column": 33,
              "line": 5
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CtorConstructor",
          "optional": false,
          "range": [
            109,
            124
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 17,
              "line": 5
            }
          }
        },
        "range": [
          99,
          202
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
      "exportKind": "type",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        203,
        238
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
              "name": "Ctor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
                  }
                },
                "range": [
                  220,
                  237
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CtorConstructor",
                    "optional": false,
                    "range": [
                      222,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    222,
                    237
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
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
                216,
                237
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "init": null,
            "range": [
              216,
              237
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          210,
          238
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 35,
          "line": 8
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
      "column": 35,
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
    51
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./ctor\"",
        "value": "./ctor",
        "range": [
          21,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
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
            "name": "Ctor",
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
            "name": "Ctor",
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
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "range": [
          46,
          50
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "range": [
        31,
        51
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 20,
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
    102
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"mod\"",
        "value": "mod",
        "range": [
          20,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              12,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            7,
            14
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "Ctor",
            "optional": false,
            "range": [
              33,
              37
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "range": [
                40,
                42
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "default",
              "optional": false,
              "range": [
                43,
                50
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              40,
              50
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          },
          "range": [
            33,
            50
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        27,
        51
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        52,
        101
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
              "name": "MyComp",
              "optional": false,
              "range": [
                65,
                71
              ],
              "loc": {
                "end": {
                  "column": 19,
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
                          88,
                          91
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 3
                          },
                          "start": {
                            "column": 36,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"bar\"",
                        "value": "bar",
                        "range": [
                          93,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 41,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        88,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    87,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 35,
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
                  "name": "Ctor",
                  "optional": false,
                  "range": [
                    74,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "extends",
                  "optional": false,
                  "range": [
                    79,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                },
                "range": [
                  74,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                74,
                100
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              }
            },
            "range": [
              65,
              100
            ],
            "loc": {
              "end": {
                "column": 48,
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
          59,
          101
        ],
        "loc": {
          "end": {
            "column": 49,
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
          "column": 49,
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
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
