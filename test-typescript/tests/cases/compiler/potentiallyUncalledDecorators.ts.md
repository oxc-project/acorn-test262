__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    35,
    1495
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Input",
        "optional": false,
        "range": [
          52,
          57
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
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindingPropertyName",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 2
              },
              "start": {
                "column": 43,
                "line": 2
              }
            },
            "range": [
              78,
              86
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                80,
                86
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              }
            }
          },
          "range": [
            58,
            86
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 2
          },
          "start": {
            "column": 52,
            "line": 2
          }
        },
        "range": [
          87,
          92
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            89,
            92
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          }
        }
      },
      "range": [
        35,
        93
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          113,
          140
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Input",
                  "optional": false,
                  "range": [
                    120,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                },
                "range": [
                  119,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                126,
                129
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                129,
                137
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  131,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              119,
              138
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooComponent",
        "optional": false,
        "range": [
          100,
          112
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        94,
        140
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "tracked",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 85,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 8
                }
              },
              "range": [
                193,
                257
              ],
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PropertyDecorator",
                      "optional": false,
                      "range": [
                        195,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      195,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "params": [
                          {
                            "type": "RestElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "watchedProperties",
                              "optional": false,
                              "range": [
                                221,
                                238
                              ],
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 8
                                },
                                "start": {
                                  "column": 49,
                                  "line": 8
                                }
                              }
                            },
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 8
                                },
                                "start": {
                                  "column": 66,
                                  "line": 8
                                }
                              },
                              "range": [
                                238,
                                248
                              ],
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    240,
                                    246
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  240,
                                  248
                                ],
                                "loc": {
                                  "end": {
                                    "column": 76,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 68,
                                    "line": 8
                                  }
                                }
                              }
                            },
                            "range": [
                              218,
                              248
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 8
                              },
                              "start": {
                                "column": 46,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 8
                            },
                            "start": {
                              "column": 77,
                              "line": 8
                            }
                          },
                          "range": [
                            249,
                            254
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              251,
                              254
                            ],
                            "loc": {
                              "end": {
                                "column": 82,
                                "line": 8
                              },
                              "start": {
                                "column": 79,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          217,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 8
                          },
                          "start": {
                            "column": 45,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      215,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 8
                      },
                      "start": {
                        "column": 43,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  195,
                  257
                ],
                "loc": {
                  "end": {
                    "column": 85,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              186,
              257
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            186,
            257
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        172,
        257
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          272,
          301
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tracked",
                  "optional": false,
                  "range": [
                    279,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "range": [
                  278,
                  286
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
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "person",
              "optional": false,
              "range": [
                287,
                293
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              278,
              294
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "any",
              "optional": false,
              "range": [
                295,
                298
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              295,
              299
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 11
              },
              "start": {
                "column": 21,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 13,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          265,
          271
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        259,
        301
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          323,
          428
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
              "name": "args",
              "optional": false,
              "range": [
                329,
                333
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              },
              "range": [
                333,
                338
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  335,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            },
            "value": null,
            "range": [
              329,
              339
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "'args'",
                      "value": "args",
                      "range": [
                        353,
                        359
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tracked",
                    "optional": false,
                    "range": [
                      345,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 16
                      },
                      "start": {
                        "column": 5,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    345,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 16
                    },
                    "start": {
                      "column": 5,
                      "line": 16
                    }
                  }
                },
                "range": [
                  344,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiplied",
              "optional": false,
              "range": [
                369,
                379
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                379,
                426
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              399,
                              403
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 15,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              404,
                              408
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 18
                              },
                              "start": {
                                "column": 20,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            399,
                            408
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "number",
                          "optional": false,
                          "range": [
                            409,
                            415
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 18
                            },
                            "start": {
                              "column": 25,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          399,
                          415
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          418,
                          419
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 18
                          },
                          "start": {
                            "column": 34,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        399,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 18
                        },
                        "start": {
                          "column": 15,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      392,
                      420
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
                  382,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 21,
                    "line": 17
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
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              }
            },
            "range": [
              344,
              426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 20,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiplyByTwo",
        "optional": false,
        "range": [
          309,
          322
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        303,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          534,
          537
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 83,
            "line": 24
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "MethodDecorator",
            "optional": false,
            "range": [
              483,
              498
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 24
              },
              "start": {
                "column": 32,
                "line": 24
              }
            }
          },
          "range": [
            483,
            498
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 24
            },
            "start": {
              "column": 32,
              "line": 24
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ClassDecorator",
            "optional": false,
            "range": [
              500,
              514
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 24
              },
              "start": {
                "column": 49,
                "line": 24
              }
            }
          },
          "range": [
            500,
            514
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 24
            },
            "start": {
              "column": 49,
              "line": 24
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false,
            "range": [
              516,
              533
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 24
              },
              "start": {
                "column": 65,
                "line": 24
              }
            }
          },
          "range": [
            516,
            533
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 24
            },
            "start": {
              "column": 65,
              "line": 24
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OmniDecorator",
        "optional": false,
        "range": [
          461,
          474
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "range": [
        451,
        537
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noArgs",
        "optional": false,
        "range": [
          556,
          562
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 27
          },
          "start": {
            "column": 25,
            "line": 27
          }
        },
        "range": [
          564,
          579
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              566,
              579
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 27
              },
              "start": {
                "column": 27,
                "line": 27
              }
            }
          },
          "range": [
            566,
            579
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 27
            },
            "start": {
              "column": 27,
              "line": 27
            }
          }
        }
      },
      "range": [
        539,
        580
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "allRest",
        "optional": false,
        "range": [
          598,
          605
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              609,
              613
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 28
              },
              "start": {
                "column": 28,
                "line": 28
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 28
              },
              "start": {
                "column": 32,
                "line": 28
              }
            },
            "range": [
              613,
              620
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  615,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 28
                  },
                  "start": {
                    "column": 34,
                    "line": 28
                  }
                }
              },
              "range": [
                615,
                620
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 28
                },
                "start": {
                  "column": 34,
                  "line": 28
                }
              }
            }
          },
          "range": [
            606,
            620
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 28
            },
            "start": {
              "column": 25,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 55,
            "line": 28
          },
          "start": {
            "column": 40,
            "line": 28
          }
        },
        "range": [
          621,
          636
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              623,
              636
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 28
              },
              "start": {
                "column": 42,
                "line": 28
              }
            }
          },
          "range": [
            623,
            636
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 28
            },
            "start": {
              "column": 42,
              "line": 28
            }
          }
        }
      },
      "range": [
        581,
        637
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptional",
        "optional": false,
        "range": [
          655,
          666
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 29
          },
          "start": {
            "column": 17,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 29
              },
              "start": {
                "column": 31,
                "line": 29
              }
            },
            "range": [
              669,
              674
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                671,
                674
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 29
                },
                "start": {
                  "column": 33,
                  "line": 29
                }
              }
            }
          },
          "range": [
            667,
            674
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 29
            },
            "start": {
              "column": 29,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 29
          },
          "start": {
            "column": 37,
            "line": 29
          }
        },
        "range": [
          675,
          690
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              677,
              690
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 29
              },
              "start": {
                "column": 39,
                "line": 29
              }
            }
          },
          "range": [
            677,
            690
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 29
            },
            "start": {
              "column": 39,
              "line": 29
            }
          }
        }
      },
      "range": [
        638,
        691
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoOptional",
        "optional": false,
        "range": [
          709,
          720
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 30
          },
          "start": {
            "column": 17,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 30
              },
              "start": {
                "column": 31,
                "line": 30
              }
            },
            "range": [
              723,
              728
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                725,
                728
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 30
                },
                "start": {
                  "column": 33,
                  "line": 30
                }
              }
            }
          },
          "range": [
            721,
            728
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 30
            },
            "start": {
              "column": 29,
              "line": 30
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 30
              },
              "start": {
                "column": 40,
                "line": 30
              }
            },
            "range": [
              732,
              737
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                734,
                737
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 42,
                  "line": 30
                }
              }
            }
          },
          "range": [
            730,
            737
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 30
            },
            "start": {
              "column": 38,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 61,
            "line": 30
          },
          "start": {
            "column": 46,
            "line": 30
          }
        },
        "range": [
          738,
          753
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              740,
              753
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 30
              },
              "start": {
                "column": 48,
                "line": 30
              }
            }
          },
          "range": [
            740,
            753
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 30
            },
            "start": {
              "column": 48,
              "line": 30
            }
          }
        }
      },
      "range": [
        692,
        754
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "threeOptional",
        "optional": false,
        "range": [
          772,
          785
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 31
          },
          "start": {
            "column": 17,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 33,
                "line": 31
              }
            },
            "range": [
              788,
              793
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                790,
                793
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 31
                },
                "start": {
                  "column": 35,
                  "line": 31
                }
              }
            }
          },
          "range": [
            786,
            793
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 31
            },
            "start": {
              "column": 31,
              "line": 31
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 31
              },
              "start": {
                "column": 42,
                "line": 31
              }
            },
            "range": [
              797,
              802
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                799,
                802
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 31
                },
                "start": {
                  "column": 44,
                  "line": 31
                }
              }
            }
          },
          "range": [
            795,
            802
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 31
            },
            "start": {
              "column": 40,
              "line": 31
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 31
              },
              "start": {
                "column": 51,
                "line": 31
              }
            },
            "range": [
              806,
              811
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                808,
                811
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 31
                },
                "start": {
                  "column": 53,
                  "line": 31
                }
              }
            }
          },
          "range": [
            804,
            811
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 31
            },
            "start": {
              "column": 49,
              "line": 31
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 72,
            "line": 31
          },
          "start": {
            "column": 57,
            "line": 31
          }
        },
        "range": [
          812,
          827
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              814,
              827
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 31
              },
              "start": {
                "column": 59,
                "line": 31
              }
            }
          },
          "range": [
            814,
            827
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 31
            },
            "start": {
              "column": 59,
              "line": 31
            }
          }
        }
      },
      "range": [
        755,
        828
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "oneOptionalWithRest",
        "optional": false,
        "range": [
          846,
          865
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 32
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 32
              },
              "start": {
                "column": 39,
                "line": 32
              }
            },
            "range": [
              868,
              873
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                870,
                873
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 32
                },
                "start": {
                  "column": 41,
                  "line": 32
                }
              }
            }
          },
          "range": [
            866,
            873
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 32
            },
            "start": {
              "column": 37,
              "line": 32
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "range": [
              878,
              882
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 32
              },
              "start": {
                "column": 49,
                "line": 32
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 32
              },
              "start": {
                "column": 53,
                "line": 32
              }
            },
            "range": [
              882,
              889
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  884,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 32
                  },
                  "start": {
                    "column": 55,
                    "line": 32
                  }
                }
              },
              "range": [
                884,
                889
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 32
                },
                "start": {
                  "column": 55,
                  "line": 32
                }
              }
            }
          },
          "range": [
            875,
            889
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 32
            },
            "start": {
              "column": 46,
              "line": 32
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 76,
            "line": 32
          },
          "start": {
            "column": 61,
            "line": 32
          }
        },
        "range": [
          890,
          905
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OmniDecorator",
            "optional": false,
            "range": [
              892,
              905
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 32
              },
              "start": {
                "column": 63,
                "line": 32
              }
            }
          },
          "range": [
            892,
            905
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 32
            },
            "start": {
              "column": 63,
              "line": 32
            }
          }
        }
      },
      "range": [
        829,
        906
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "anyDec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 33
                },
                "start": {
                  "column": 20,
                  "line": 33
                }
              },
              "range": [
                927,
                932
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  929,
                  932
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 33
                  },
                  "start": {
                    "column": 22,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              921,
              932
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 33
              },
              "start": {
                "column": 14,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            921,
            932
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        907,
        933
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          951,
          998
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "range": [
                    958,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 37
                    },
                    "start": {
                      "column": 5,
                      "line": 37
                    }
                  }
                },
                "range": [
                  957,
                  964
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                965,
                968
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 37
                },
                "start": {
                  "column": 12,
                  "line": 37
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 37
                },
                "start": {
                  "column": 15,
                  "line": 37
                }
              },
              "range": [
                968,
                973
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  970,
                  973
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 37
                  },
                  "start": {
                    "column": 17,
                    "line": 37
                  }
                }
              }
            },
            "value": null,
            "range": [
              957,
              974
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noArgs",
                  "optional": false,
                  "range": [
                    980,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 38
                    },
                    "start": {
                      "column": 5,
                      "line": 38
                    }
                  }
                },
                "range": [
                  979,
                  986
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                987,
                990
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 12,
                  "line": 38
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
                990,
                996
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  993,
                  996
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 38
                  },
                  "start": {
                    "column": 18,
                    "line": 38
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
                  "column": 21,
                  "line": 38
                },
                "start": {
                  "column": 15,
                  "line": 38
                }
              }
            },
            "range": [
              979,
              996
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 8,
            "line": 36
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "noArgs",
            "optional": false,
            "range": [
              936,
              942
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 35
              }
            }
          },
          "range": [
            935,
            942
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          949,
          950
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 36
          },
          "start": {
            "column": 6,
            "line": 36
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        935,
        998
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1017,
          1066
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "range": [
                    1024,
                    1031
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 43
                    },
                    "start": {
                      "column": 5,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1023,
                  1031
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1032,
                1035
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 43
                },
                "start": {
                  "column": 13,
                  "line": 43
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              },
              "range": [
                1035,
                1040
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1037,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 43
                  },
                  "start": {
                    "column": 18,
                    "line": 43
                  }
                }
              }
            },
            "value": null,
            "range": [
              1023,
              1041
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allRest",
                  "optional": false,
                  "range": [
                    1047,
                    1054
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 44
                    },
                    "start": {
                      "column": 5,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1046,
                  1054
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1055,
                1058
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 44
                },
                "start": {
                  "column": 13,
                  "line": 44
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
                1058,
                1064
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1061,
                  1064
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 44
                  },
                  "start": {
                    "column": 19,
                    "line": 44
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
                  "column": 22,
                  "line": 44
                },
                "start": {
                  "column": 16,
                  "line": 44
                }
              }
            },
            "range": [
              1046,
              1064
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 8,
            "line": 42
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "allRest",
            "optional": false,
            "range": [
              1001,
              1008
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 41
              },
              "start": {
                "column": 1,
                "line": 41
              }
            }
          },
          "range": [
            1000,
            1008
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          1015,
          1016
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 42
          },
          "start": {
            "column": 6,
            "line": 42
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1000,
        1066
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1089,
          1146
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "range": [
                    1096,
                    1107
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 49
                    },
                    "start": {
                      "column": 5,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1095,
                  1107
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1108,
                1111
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 20,
                  "line": 49
                }
              },
              "range": [
                1111,
                1116
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1113,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 49
                  },
                  "start": {
                    "column": 22,
                    "line": 49
                  }
                }
              }
            },
            "value": null,
            "range": [
              1095,
              1117
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptional",
                  "optional": false,
                  "range": [
                    1123,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 5,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1122,
                  1134
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1135,
                1138
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
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
                1138,
                1144
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1141,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 50
                  },
                  "start": {
                    "column": 23,
                    "line": 50
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
                  "column": 26,
                  "line": 50
                },
                "start": {
                  "column": 20,
                  "line": 50
                }
              }
            },
            "range": [
              1122,
              1144
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 8,
            "line": 48
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptional",
            "optional": false,
            "range": [
              1069,
              1080
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 47
              },
              "start": {
                "column": 1,
                "line": 47
              }
            }
          },
          "range": [
            1068,
            1080
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          1087,
          1088
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 48
          },
          "start": {
            "column": 6,
            "line": 48
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1068,
        1146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1169,
          1226
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "range": [
                    1176,
                    1187
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 55
                    },
                    "start": {
                      "column": 5,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1175,
                  1187
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
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1188,
                1191
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 55
                },
                "start": {
                  "column": 20,
                  "line": 55
                }
              },
              "range": [
                1191,
                1196
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1193,
                  1196
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 55
                  },
                  "start": {
                    "column": 22,
                    "line": 55
                  }
                }
              }
            },
            "value": null,
            "range": [
              1175,
              1197
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "twoOptional",
                  "optional": false,
                  "range": [
                    1203,
                    1214
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 56
                    },
                    "start": {
                      "column": 5,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1202,
                  1214
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1215,
                1218
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 56
                },
                "start": {
                  "column": 17,
                  "line": 56
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
                1218,
                1224
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1221,
                  1224
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 56
                  },
                  "start": {
                    "column": 23,
                    "line": 56
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
                  "column": 26,
                  "line": 56
                },
                "start": {
                  "column": 20,
                  "line": 56
                }
              }
            },
            "range": [
              1202,
              1224
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 8,
            "line": 54
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "twoOptional",
            "optional": false,
            "range": [
              1149,
              1160
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 53
              },
              "start": {
                "column": 1,
                "line": 53
              }
            }
          },
          "range": [
            1148,
            1160
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          1167,
          1168
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 54
          },
          "start": {
            "column": 6,
            "line": 54
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1148,
        1226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1251,
          1312
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "range": [
                    1258,
                    1271
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 61
                    },
                    "start": {
                      "column": 5,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1257,
                  1271
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1272,
                1275
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 61
                },
                "start": {
                  "column": 19,
                  "line": 61
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 61
                },
                "start": {
                  "column": 22,
                  "line": 61
                }
              },
              "range": [
                1275,
                1280
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1277,
                  1280
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 61
                  },
                  "start": {
                    "column": 24,
                    "line": 61
                  }
                }
              }
            },
            "value": null,
            "range": [
              1257,
              1281
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "threeOptional",
                  "optional": false,
                  "range": [
                    1287,
                    1300
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 62
                    },
                    "start": {
                      "column": 5,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1286,
                  1300
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1301,
                1304
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 62
                },
                "start": {
                  "column": 19,
                  "line": 62
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
                1304,
                1310
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1307,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 62
                  },
                  "start": {
                    "column": 25,
                    "line": 62
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
                  "column": 28,
                  "line": 62
                },
                "start": {
                  "column": 22,
                  "line": 62
                }
              }
            },
            "range": [
              1286,
              1310
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 8,
            "line": 60
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "threeOptional",
            "optional": false,
            "range": [
              1229,
              1242
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 59
              },
              "start": {
                "column": 1,
                "line": 59
              }
            }
          },
          "range": [
            1228,
            1242
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          1249,
          1250
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 60
          },
          "start": {
            "column": 6,
            "line": 60
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1228,
        1312
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1343,
          1416
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "range": [
                    1350,
                    1369
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 67
                    },
                    "start": {
                      "column": 5,
                      "line": 67
                    }
                  }
                },
                "range": [
                  1349,
                  1369
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1370,
                1373
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 67
                },
                "start": {
                  "column": 25,
                  "line": 67
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 67
                },
                "start": {
                  "column": 28,
                  "line": 67
                }
              },
              "range": [
                1373,
                1378
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1375,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 67
                  },
                  "start": {
                    "column": 30,
                    "line": 67
                  }
                }
              }
            },
            "value": null,
            "range": [
              1349,
              1379
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oneOptionalWithRest",
                  "optional": false,
                  "range": [
                    1385,
                    1404
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 68
                    },
                    "start": {
                      "column": 5,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1384,
                  1404
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1405,
                1408
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 68
                },
                "start": {
                  "column": 25,
                  "line": 68
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
                1408,
                1414
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1411,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 68
                  },
                  "start": {
                    "column": 31,
                    "line": 68
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
                  "column": 34,
                  "line": 68
                },
                "start": {
                  "column": 28,
                  "line": 68
                }
              }
            },
            "range": [
              1384,
              1414
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 8,
            "line": 66
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "oneOptionalWithRest",
            "optional": false,
            "range": [
              1315,
              1334
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 65
              },
              "start": {
                "column": 1,
                "line": 65
              }
            }
          },
          "range": [
            1314,
            1334
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 65
            },
            "start": {
              "column": 0,
              "line": 65
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "range": [
          1341,
          1342
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 66
          },
          "start": {
            "column": 6,
            "line": 66
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1314,
        1416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1434,
          1481
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "range": [
                    1441,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 73
                    },
                    "start": {
                      "column": 5,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1440,
                  1447
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                1448,
                1451
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 73
                },
                "start": {
                  "column": 12,
                  "line": 73
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 73
                },
                "start": {
                  "column": 15,
                  "line": 73
                }
              },
              "range": [
                1451,
                1456
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1453,
                  1456
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 73
                  },
                  "start": {
                    "column": 17,
                    "line": 73
                  }
                }
              }
            },
            "value": null,
            "range": [
              1440,
              1457
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anyDec",
                  "optional": false,
                  "range": [
                    1463,
                    1469
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 74
                    },
                    "start": {
                      "column": 5,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1462,
                  1469
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1470,
                1473
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 74
                },
                "start": {
                  "column": 12,
                  "line": 74
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
                1473,
                1479
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1476,
                  1479
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 74
                  },
                  "start": {
                    "column": 18,
                    "line": 74
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
                  "column": 21,
                  "line": 74
                },
                "start": {
                  "column": 15,
                  "line": 74
                }
              }
            },
            "range": [
              1462,
              1479
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 8,
            "line": 72
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyDec",
            "optional": false,
            "range": [
              1419,
              1425
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 71
              },
              "start": {
                "column": 1,
                "line": 71
              }
            }
          },
          "range": [
            1418,
            1425
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 71
            },
            "start": {
              "column": 0,
              "line": 71
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "range": [
          1432,
          1433
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 72
          },
          "start": {
            "column": 6,
            "line": 72
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1418,
        1481
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        1483,
        1494
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 78
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
