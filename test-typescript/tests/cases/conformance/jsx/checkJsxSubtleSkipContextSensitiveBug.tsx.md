__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    44,
    560
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
          67,
          74
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              56,
              61
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            51,
            61
          ],
          "loc": {
            "end": {
              "column": 17,
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
        75
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          99,
          114
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                101,
                106
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 24,
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
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              },
              "range": [
                106,
                112
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    108,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
                    }
                  }
                },
                "range": [
                  108,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 31,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              101,
              112
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 4
              },
              "start": {
                "column": 24,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 22,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorResult",
        "optional": false,
        "range": [
          87,
          98
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        }
      },
      "range": [
        77,
        114
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          152,
          268
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                167,
                172
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
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
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              },
              "range": [
                172,
                196
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  },
                  "range": [
                    177,
                    196
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        187,
                        196
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "range": [
                              188,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 7
                              },
                              "start": {
                                "column": 34,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            188,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 7
                            },
                            "start": {
                              "column": 34,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 33,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        180,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      180,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  174,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              158,
              197
            ],
            "loc": {
              "end": {
                "column": 43,
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
              "name": "prop2",
              "optional": false,
              "range": [
                212,
                217
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 9
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
                  "column": 66,
                  "line": 9
                },
                "start": {
                  "column": 18,
                  "line": 9
                }
              },
              "range": [
                217,
                265
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      },
                      "range": [
                        226,
                        257
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            235,
                            257
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "range": [
                                  236,
                                  243
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                236,
                                243
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 9
                                },
                                "start": {
                                  "column": 37,
                                  "line": 9
                                }
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false,
                                "range": [
                                  245,
                                  256
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                245,
                                256
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 9
                                },
                                "start": {
                                  "column": 46,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 9
                            },
                            "start": {
                              "column": 36,
                              "line": 9
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "range": [
                            228,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 9
                            },
                            "start": {
                              "column": 29,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          228,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 9
                          },
                          "start": {
                            "column": 29,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      220,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 9
                    },
                    "start": {
                      "column": 60,
                      "line": 9
                    }
                  },
                  "range": [
                    259,
                    265
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      262,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 9
                      },
                      "start": {
                        "column": 63,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  219,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 9
                  },
                  "start": {
                    "column": 20,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              203,
              266
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 36,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false,
        "range": [
          126,
          142
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 6
          }
        },
        "range": [
          142,
          151
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "range": [
                143,
                150
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              143,
              150
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        116,
        268
      ],
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
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          348,
          381
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                354,
                360
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                360,
                379
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        372,
                        376
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      365,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  363,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
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
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "range": [
              354,
              379
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 78,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false,
        "range": [
          276,
          287
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            305,
            310
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 12
            },
            "start": {
              "column": 35,
              "line": 12
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            311,
            320
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 12
            },
            "start": {
              "column": 41,
              "line": 12
            }
          }
        },
        "range": [
          305,
          320
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 12
          },
          "start": {
            "column": 35,
            "line": 12
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          320,
          347
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                337,
                346
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "range": [
                      338,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 12
                      },
                      "start": {
                        "column": 68,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    338,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 12
                    },
                    "start": {
                      "column": 68,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 12
                },
                "start": {
                  "column": 67,
                  "line": 12
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncLoaderProps",
              "optional": false,
              "range": [
                321,
                337
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 12
                },
                "start": {
                  "column": 51,
                  "line": 12
                }
              }
            },
            "range": [
              321,
              346
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 12
              },
              "start": {
                "column": 51,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 12
          },
          "start": {
            "column": 50,
            "line": 12
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 12
          }
        },
        "range": [
          287,
          296
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "range": [
                288,
                295
              ],
              "loc": {
                "end": {
                  "column": 25,
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
              288,
              295
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          }
        ]
      },
      "range": [
        270,
        381
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "success",
                    "optional": false,
                    "range": [
                      462,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      471,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 22,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    462,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                460,
                477
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "range": [
              453,
              478
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          447,
          480
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 64,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "range": [
          398,
          402
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 16
          },
          "start": {
            "column": 15,
            "line": 16
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 63,
            "line": 16
          },
          "start": {
            "column": 21,
            "line": 16
          }
        },
        "range": [
          404,
          446
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              413,
              446
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "success",
                          "optional": false,
                          "range": [
                            416,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 16
                            },
                            "start": {
                              "column": 33,
                              "line": 16
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
                              "column": 46,
                              "line": 16
                            },
                            "start": {
                              "column": 40,
                              "line": 16
                            }
                          },
                          "range": [
                            423,
                            429
                          ],
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                425,
                                429
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 16
                                },
                                "start": {
                                  "column": 42,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              425,
                              429
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 16
                              },
                              "start": {
                                "column": 42,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          416,
                          429
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 16
                          },
                          "start": {
                            "column": 33,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "range": [
                      414,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 16
                      },
                      "start": {
                        "column": 31,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false,
                      "range": [
                        434,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 16
                        },
                        "start": {
                          "column": 51,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      434,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 16
                      },
                      "start": {
                        "column": 51,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  414,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 16
                  },
                  "start": {
                    "column": 31,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 16
              },
              "start": {
                "column": 30,
                "line": 16
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              406,
              413
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 23,
                "line": 16
              }
            }
          },
          "range": [
            406,
            446
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 16
            },
            "start": {
              "column": 23,
              "line": 16
            }
          }
        }
      },
      "range": [
        383,
        480
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "loader",
            "optional": false,
            "range": [
              488,
              494
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
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
                497,
                558
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop1",
                    "range": [
                      514,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 4,
                        "line": 21
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "load",
                      "optional": false,
                      "range": [
                        521,
                        525
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      520,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 21
                      },
                      "start": {
                        "column": 10,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    514,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop2",
                    "range": [
                      531,
                      536
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          548,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 22
                          },
                          "start": {
                            "column": 21,
                            "line": 22
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            538,
                            544
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        538,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      537,
                      555
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 22
                      },
                      "start": {
                        "column": 10,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    531,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "AsyncLoader",
                "range": [
                  498,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 2,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              497,
              558
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 23
              },
              "start": {
                "column": 15,
                "line": 20
              }
            }
          },
          "range": [
            488,
            558
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        482,
        559
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
