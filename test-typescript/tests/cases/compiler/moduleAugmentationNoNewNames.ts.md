__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    321
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./observable\"",
        "value": "./observable",
        "range": [
          27,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 27,
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
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
        41
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "range": [
                  49,
                  59
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "range": [
                  60,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "range": [
                49,
                69
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                45,
                48
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "range": [
              44,
              69
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "range": [
              71,
              74
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          },
          "range": [
            43,
            74
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "range": [
              88,
              91
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 3
              },
              "start": {
                "column": 45,
                "line": 3
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            77,
            91
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 3
            },
            "start": {
              "column": 34,
              "line": 3
            }
          }
        },
        "range": [
          43,
          91
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        43,
        91
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                153,
                208
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "range": [
                      163,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "proj",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 7
                          },
                          "start": {
                            "column": 19,
                            "line": 7
                          }
                        },
                        "range": [
                          174,
                          186
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  178,
                                  180
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      179,
                                      180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    179,
                                    180
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                177,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 7
                              },
                              "start": {
                                "column": 27,
                                "line": 7
                              }
                            },
                            "range": [
                              182,
                              186
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "range": [
                                  185,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                185,
                                186
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 7
                                },
                                "start": {
                                  "column": 30,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            176,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        170,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    },
                    "range": [
                      187,
                      202
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          199,
                          202
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                200,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 7
                                },
                                "start": {
                                  "column": 45,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              200,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 7
                              },
                              "start": {
                                "column": 45,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 7
                          },
                          "start": {
                            "column": 44,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "range": [
                          189,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 7
                          },
                          "start": {
                            "column": 34,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        189,
                        202
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 7
                        },
                        "start": {
                          "column": 34,
                          "line": 7
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
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    },
                    "range": [
                      166,
                      169
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            167,
                            168
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "out": false,
                        "range": [
                          167,
                          168
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    163,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
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
                  "line": 8
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "range": [
                139,
                149
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 14,
                  "line": 6
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              },
              "range": [
                149,
                152
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
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    150,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              129,
              208
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                223,
                225
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                219,
                222
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              213,
              225
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    },
                    "range": [
                      235,
                      243
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        237,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    234,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": null,
                "range": [
                  234,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    },
                    "range": [
                      246,
                      254
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        248,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 22,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    245,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "init": null,
                "range": [
                  245,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              230,
              255
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          265,
                          266
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 11
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          268,
                          269
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        265,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
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
                          271,
                          272
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "range": [
                          274,
                          276
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        271,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 15,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 11
                      }
                    },
                    "range": [
                      277,
                      301
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              280,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 11
                              },
                              "start": {
                                "column": 24,
                                "line": 11
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
                                "column": 33,
                                "line": 11
                              },
                              "start": {
                                "column": 25,
                                "line": 11
                              }
                            },
                            "range": [
                              281,
                              289
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                283,
                                289
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 11
                                },
                                "start": {
                                  "column": 27,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            280,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 11
                            },
                            "start": {
                              "column": 24,
                              "line": 11
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
                              291,
                              292
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 11
                              },
                              "start": {
                                "column": 35,
                                "line": 11
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
                                "column": 44,
                                "line": 11
                              },
                              "start": {
                                "column": 36,
                                "line": 11
                              }
                            },
                            "range": [
                              292,
                              300
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                294,
                                300
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 11
                                },
                                "start": {
                                  "column": 38,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            291,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 11
                            },
                            "start": {
                              "column": 35,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        279,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    264,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": null,
                "range": [
                  264,
                  301
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              260,
              302
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "range": [
                316,
                318
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 13,
                  "line": 12
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                314,
                315
              ],
              "decorators": [],
              "name": "Z",
              "optional": false,
              "loc": {
                "end": {
                  "column": 12,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "kind": "module",
            "range": [
              307,
              318
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          123,
          320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 30,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"./observable\"",
        "value": "./observable",
        "range": [
          108,
          122
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "range": [
        93,
        320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
      "line": 14
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
    90
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        89
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            35,
            89
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                  47,
                  87
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
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
                        }
                      },
                      "range": [
                        52,
                        70
                      ],
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 2
                                },
                                "start": {
                                  "column": 19,
                                  "line": 2
                                }
                              },
                              "range": [
                                56,
                                58
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    57,
                                    58
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
                                  57,
                                  58
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
                              }
                            },
                            "range": [
                              55,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 2
                              },
                              "start": {
                                "column": 18,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 2
                            },
                            "start": {
                              "column": 23,
                              "line": 2
                            }
                          },
                          "range": [
                            60,
                            70
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              63,
                              70
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 2
                              },
                              "start": {
                                "column": 26,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          54,
                          70
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
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
                      48,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
                      "line": 2
                    }
                  },
                  "range": [
                    71,
                    86
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        83,
                        86
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
                              84,
                              85
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 2
                              },
                              "start": {
                                "column": 47,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            84,
                            85
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 2
                            },
                            "start": {
                              "column": 47,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 46,
                          "line": 2
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "range": [
                        73,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 36,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      73,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 2
                      },
                      "start": {
                        "column": 36,
                        "line": 2
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              },
              "range": [
                41,
                87
              ],
              "loc": {
                "end": {
                  "column": 50,
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
              "column": 35,
              "line": 1
            }
          }
        },
        "declare": true,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Observable",
          "optional": false,
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
        "implements": [],
        "superClass": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 31,
              "line": 1
            }
          },
          "range": [
            31,
            34
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
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          89
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
        "raw": "\"./observable\"",
        "value": "./observable",
        "range": [
          27,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 27,
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
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            "name": "Observable",
            "optional": false,
            "range": [
              9,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
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
            19
          ],
          "loc": {
            "end": {
              "column": 19,
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
        41
      ],
      "loc": {
        "end": {
          "column": 41,
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
        "raw": "\"./map\"",
        "value": "./map",
        "range": [
          49,
          56
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "specifiers": [],
      "range": [
        42,
        57
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                64,
                84
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    76,
                    84
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        77,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "range": [
                    66,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  66,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              63,
              84
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            63,
            84
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        59,
        85
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "y",
            "optional": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      105,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      109,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    105,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 19,
                      "line": 5
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      100,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  100,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 5
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
                "name": "x",
                "optional": false,
                "range": [
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "range": [
                  96,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              },
              "range": [
                94,
                99
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              94,
              111
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            90,
            111
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        86,
        112
      ],
      "loc": {
        "end": {
          "column": 26,
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
      "column": 26,
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
