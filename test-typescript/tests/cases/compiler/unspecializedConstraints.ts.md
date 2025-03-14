__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4626
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                33,
                68
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        },
                        "range": [
                          49,
                          57
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            51,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        44,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 3
                        },
                        "start": {
                          "column": 9,
                          "line": 3
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
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    },
                    "range": [
                      58,
                      61
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          60,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        60,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 25,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    43,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "range": [
                26,
                29
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              },
              "range": [
                29,
                32
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
                      30,
                      31
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
                  "out": false,
                  "range": [
                    30,
                    31
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
                }
              ]
            },
            "range": [
              16,
              68
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                94,
                136
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "range": [
                      104,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
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
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        },
                        "range": [
                          116,
                          119
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              118,
                              119
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            118,
                            119
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 7
                            },
                            "start": {
                              "column": 22,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        111,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    },
                    "range": [
                      120,
                      129
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        122,
                        129
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
                    }
                  },
                  "static": false,
                  "range": [
                    104,
                    130
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
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
                  "column": 24,
                  "line": 6
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Equals",
              "optional": false,
              "range": [
                84,
                90
              ],
              "loc": {
                "end": {
                  "column": 20,
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
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              },
              "range": [
                90,
                93
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
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    91,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                }
              ]
            },
            "range": [
              74,
              136
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
                155,
                162
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                148,
                154
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              142,
              162
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
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
                194,
                1949
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "equals",
                    "optional": false,
                    "range": [
                      204,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
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
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      210,
                      1137
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                272,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 15
                                },
                                "start": {
                                  "column": 38,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              265,
                              277
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 15
                              },
                              "start": {
                                "column": 31,
                                "line": 15
                              }
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "ThisExpression",
                              "range": [
                                250,
                                254
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 15
                                },
                                "start": {
                                  "column": 16,
                                  "line": 15
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "that",
                              "optional": false,
                              "range": [
                                259,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 15
                                },
                                "start": {
                                  "column": 25,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              250,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 15
                              },
                              "start": {
                                "column": 16,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            246,
                            277
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "false",
                              "value": false,
                              "range": [
                                348,
                                353
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 16
                                },
                                "start": {
                                  "column": 70,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              341,
                              354
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 16
                              },
                              "start": {
                                "column": 63,
                                "line": 16
                              }
                            }
                          },
                          "test": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      296,
                                      300
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "range": [
                                      301,
                                      313
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    296,
                                    313
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 16
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  296,
                                  315
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 16
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "range": [
                                      319,
                                      323
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isObjectType",
                                    "optional": false,
                                    "range": [
                                      324,
                                      336
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "range": [
                                    319,
                                    336
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 58,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 16
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  319,
                                  338
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                296,
                                338
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 16
                                },
                                "start": {
                                  "column": 18,
                                  "line": 16
                                }
                              }
                            },
                            "operator": "!",
                            "prefix": true,
                            "range": [
                              294,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 16
                              },
                              "start": {
                                "column": 16,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            290,
                            354
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
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
                                "name": "propCount",
                                "optional": false,
                                "range": [
                                  371,
                                  380
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 17
                                  }
                                }
                              },
                              "init": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "range": [
                                      383,
                                      387
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getPropertyCount",
                                    "optional": false,
                                    "range": [
                                      388,
                                      404
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    383,
                                    404
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 17
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  383,
                                  406
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 17
                                  }
                                }
                              },
                              "range": [
                                371,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 17
                                },
                                "start": {
                                  "column": 16,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            367,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "false",
                              "value": false,
                              "range": [
                                470,
                                475
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 18
                                },
                                "start": {
                                  "column": 62,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              463,
                              476
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 18
                              },
                              "start": {
                                "column": 55,
                                "line": 18
                              }
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "propCount",
                              "optional": false,
                              "range": [
                                424,
                                433
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 18
                                },
                                "start": {
                                  "column": 16,
                                  "line": 18
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    438,
                                    442
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 18
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getPropertyCount",
                                  "optional": false,
                                  "range": [
                                    443,
                                    459
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  438,
                                  459
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                438,
                                461
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 18
                                },
                                "start": {
                                  "column": 30,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              424,
                              461
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 18
                              },
                              "start": {
                                "column": 16,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            420,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
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
                                "name": "sigCount",
                                "optional": false,
                                "range": [
                                  493,
                                  501
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 19
                                  }
                                }
                              },
                              "init": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "that",
                                    "optional": false,
                                    "range": [
                                      504,
                                      508
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "getSignatureCount",
                                    "optional": false,
                                    "range": [
                                      509,
                                      526
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "range": [
                                    504,
                                    526
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 19
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  504,
                                  528
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                493,
                                528
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 19
                                },
                                "start": {
                                  "column": 16,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            489,
                            529
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "raw": "false",
                              "value": false,
                              "range": [
                                592,
                                597
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 20
                                },
                                "start": {
                                  "column": 62,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              585,
                              598
                            ],
                            "loc": {
                              "end": {
                                "column": 68,
                                "line": 20
                              },
                              "start": {
                                "column": 55,
                                "line": 20
                              }
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "!==",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sigCount",
                              "optional": false,
                              "range": [
                                546,
                                554
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 20
                                },
                                "start": {
                                  "column": 16,
                                  "line": 20
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    559,
                                    563
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 20
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getSignatureCount",
                                  "optional": false,
                                  "range": [
                                    564,
                                    581
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  559,
                                  581
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 20
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                559,
                                583
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 20
                                },
                                "start": {
                                  "column": 29,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              546,
                              583
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 20
                              },
                              "start": {
                                "column": 16,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            542,
                            598
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 20
                            },
                            "start": {
                              "column": 12,
                              "line": 20
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ForStatement",
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
                                            "name": "thisProp",
                                            "optional": false,
                                            "range": [
                                              706,
                                              714
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 23
                                              }
                                            }
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "range": [
                                                  734,
                                                  735
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 53,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 52,
                                                    "line": 23
                                                  }
                                                }
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "ThisExpression",
                                                "range": [
                                                  717,
                                                  721
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 39,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 35,
                                                    "line": 23
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getProperty",
                                                "optional": false,
                                                "range": [
                                                  722,
                                                  733
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 51,
                                                    "line": 23
                                                  },
                                                  "start": {
                                                    "column": 40,
                                                    "line": 23
                                                  }
                                                }
                                              },
                                              "range": [
                                                717,
                                                733
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 51,
                                                  "line": 23
                                                },
                                                "start": {
                                                  "column": 35,
                                                  "line": 23
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              717,
                                              736
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 54,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 35,
                                                "line": 23
                                              }
                                            }
                                          },
                                          "range": [
                                            706,
                                            736
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 54,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 23
                                            }
                                          }
                                        }
                                      ],
                                      "declare": false,
                                      "kind": "var",
                                      "range": [
                                        702,
                                        737
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 20,
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
                                            "name": "thatProp",
                                            "optional": false,
                                            "range": [
                                              762,
                                              770
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 24
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 24
                                              }
                                            }
                                          },
                                          "init": {
                                            "type": "CallExpression",
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "range": [
                                                    796,
                                                    804
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 66,
                                                      "line": 24
                                                    },
                                                    "start": {
                                                      "column": 58,
                                                      "line": 24
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "range": [
                                                    805,
                                                    809
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 71,
                                                      "line": 24
                                                    },
                                                    "start": {
                                                      "column": 67,
                                                      "line": 24
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  796,
                                                  809
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 71,
                                                    "line": 24
                                                  },
                                                  "start": {
                                                    "column": 58,
                                                    "line": 24
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
                                                "name": "that",
                                                "optional": false,
                                                "range": [
                                                  773,
                                                  777
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 39,
                                                    "line": 24
                                                  },
                                                  "start": {
                                                    "column": 35,
                                                    "line": 24
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "getPropertyByName",
                                                "optional": false,
                                                "range": [
                                                  778,
                                                  795
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 57,
                                                    "line": 24
                                                  },
                                                  "start": {
                                                    "column": 40,
                                                    "line": 24
                                                  }
                                                }
                                              },
                                              "range": [
                                                773,
                                                795
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 57,
                                                  "line": 24
                                                },
                                                "start": {
                                                  "column": 35,
                                                  "line": 24
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              773,
                                              810
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 72,
                                                "line": 24
                                              },
                                              "start": {
                                                "column": 35,
                                                "line": 24
                                              }
                                            }
                                          },
                                          "range": [
                                            762,
                                            810
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 72,
                                              "line": 24
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 24
                                            }
                                          }
                                        }
                                      ],
                                      "declare": false,
                                      "kind": "var",
                                      "range": [
                                        758,
                                        811
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 73,
                                          "line": 24
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 24
                                        }
                                      }
                                    },
                                    {
                                      "type": "IfStatement",
                                      "alternate": null,
                                      "consequent": {
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "raw": "false",
                                          "value": false,
                                          "range": [
                                            932,
                                            937
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 125,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 120,
                                              "line": 25
                                            }
                                          }
                                        },
                                        "range": [
                                          925,
                                          938
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 126,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 113,
                                            "line": 25
                                          }
                                        }
                                      },
                                      "test": {
                                        "type": "UnaryExpression",
                                        "argument": {
                                          "type": "LogicalExpression",
                                          "operator": "&&",
                                          "left": {
                                            "type": "LogicalExpression",
                                            "operator": "&&",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "thatProp",
                                              "optional": false,
                                              "range": [
                                                838,
                                                846
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 34,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 26,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "===",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "range": [
                                                    850,
                                                    858
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 46,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 38,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "range": [
                                                    859,
                                                    864
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 52,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 47,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  850,
                                                  864
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 52,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 38,
                                                    "line": 25
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "range": [
                                                    869,
                                                    877
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 65,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 57,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "flags",
                                                  "optional": false,
                                                  "range": [
                                                    878,
                                                    883
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 71,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 66,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  869,
                                                  883
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 71,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 57,
                                                    "line": 25
                                                  }
                                                }
                                              },
                                              "range": [
                                                850,
                                                883
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 71,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 38,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "range": [
                                              838,
                                              883
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 71,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 26,
                                                "line": 25
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "CallExpression",
                                            "arguments": [
                                              {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thatProp",
                                                  "optional": false,
                                                  "range": [
                                                    908,
                                                    916
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 104,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 96,
                                                      "line": 25
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
                                                    917,
                                                    921
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 109,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 105,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  908,
                                                  921
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 109,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 96,
                                                    "line": 25
                                                  }
                                                }
                                              }
                                            ],
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "thisProp",
                                                  "optional": false,
                                                  "range": [
                                                    887,
                                                    895
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 83,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 75,
                                                      "line": 25
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
                                                    896,
                                                    900
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 88,
                                                      "line": 25
                                                    },
                                                    "start": {
                                                      "column": 84,
                                                      "line": 25
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  887,
                                                  900
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 88,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 75,
                                                    "line": 25
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "equals",
                                                "optional": false,
                                                "range": [
                                                  901,
                                                  907
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 95,
                                                    "line": 25
                                                  },
                                                  "start": {
                                                    "column": 89,
                                                    "line": 25
                                                  }
                                                }
                                              },
                                              "range": [
                                                887,
                                                907
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 95,
                                                  "line": 25
                                                },
                                                "start": {
                                                  "column": 75,
                                                  "line": 25
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              887,
                                              922
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 110,
                                                "line": 25
                                              },
                                              "start": {
                                                "column": 75,
                                                "line": 25
                                              }
                                            }
                                          },
                                          "range": [
                                            838,
                                            922
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 110,
                                              "line": 25
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 25
                                            }
                                          }
                                        },
                                        "operator": "!",
                                        "prefix": true,
                                        "range": [
                                          836,
                                          923
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 111,
                                            "line": 25
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 25
                                          }
                                        }
                                      },
                                      "range": [
                                        832,
                                        938
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 126,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 25
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    680,
                                    956
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 52,
                                      "line": 22
                                    }
                                  }
                                },
                                "init": {
                                  "type": "VariableDeclaration",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "range": [
                                          653,
                                          654
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "Literal",
                                        "raw": "0",
                                        "value": 0,
                                        "range": [
                                          657,
                                          658
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 22
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 22
                                          }
                                        }
                                      },
                                      "range": [
                                        653,
                                        658
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 22
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 22
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    649,
                                    658
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 22
                                    }
                                  }
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": "<",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      660,
                                      661
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 32,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "propCount",
                                    "optional": false,
                                    "range": [
                                      664,
                                      673
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "range": [
                                    660,
                                    673
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 22
                                    }
                                  }
                                },
                                "update": {
                                  "type": "UpdateExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      675,
                                      676
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 22
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 22
                                      }
                                    }
                                  },
                                  "operator": "++",
                                  "prefix": false,
                                  "range": [
                                    675,
                                    678
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 22
                                    }
                                  }
                                },
                                "range": [
                                  644,
                                  956
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "range": [
                              626,
                              970
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 27
                              },
                              "start": {
                                "column": 27,
                                "line": 21
                              }
                            }
                          },
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "propCount",
                            "optional": false,
                            "range": [
                              615,
                              624
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 21
                              },
                              "start": {
                                "column": 16,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            611,
                            970
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 27
                            },
                            "start": {
                              "column": 12,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "alternate": null,
                                "consequent": {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "raw": "false",
                                    "value": false,
                                    "range": [
                                      1082,
                                      1087
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 88,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 83,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "range": [
                                    1075,
                                    1088
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 89,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 76,
                                      "line": 29
                                    }
                                  }
                                },
                                "test": {
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "range": [
                                              1030,
                                              1034
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 29
                                              },
                                              "start": {
                                                "column": 31,
                                                "line": 29
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "range": [
                                              1035,
                                              1048
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 49,
                                                "line": 29
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 29
                                              }
                                            }
                                          },
                                          "range": [
                                            1030,
                                            1048
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 49,
                                              "line": 29
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 29
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          1030,
                                          1050
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 51,
                                            "line": 29
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 29
                                          }
                                        }
                                      },
                                      {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "that",
                                            "optional": false,
                                            "range": [
                                              1052,
                                              1056
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 57,
                                                "line": 29
                                              },
                                              "start": {
                                                "column": 53,
                                                "line": 29
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "getSignatures",
                                            "optional": false,
                                            "range": [
                                              1057,
                                              1070
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 71,
                                                "line": 29
                                              },
                                              "start": {
                                                "column": 58,
                                                "line": 29
                                              }
                                            }
                                          },
                                          "range": [
                                            1052,
                                            1070
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 71,
                                              "line": 29
                                            },
                                            "start": {
                                              "column": 53,
                                              "line": 29
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          1052,
                                          1072
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 73,
                                            "line": 29
                                          },
                                          "start": {
                                            "column": 53,
                                            "line": 29
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "setEquals",
                                      "optional": false,
                                      "range": [
                                        1020,
                                        1029
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 29
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 29
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      1020,
                                      1073
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 74,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 29
                                      }
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true,
                                  "range": [
                                    1019,
                                    1073
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  1015,
                                  1088
                                ],
                                "loc": {
                                  "end": {
                                    "column": 89,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 29
                                  }
                                }
                              }
                            ],
                            "range": [
                              997,
                              1102
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 30
                              },
                              "start": {
                                "column": 26,
                                "line": 28
                              }
                            }
                          },
                          "test": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sigCount",
                            "optional": false,
                            "range": [
                              987,
                              995
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 28
                              },
                              "start": {
                                "column": 16,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            983,
                            1102
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1122,
                              1126
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 31
                              },
                              "start": {
                                "column": 19,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            1115,
                            1127
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        232,
                        1137
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 32
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "that",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 14
                            },
                            "start": {
                              "column": 19,
                              "line": 14
                            }
                          },
                          "range": [
                            215,
                            221
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "range": [
                                217,
                                221
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 21,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              217,
                              221
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 14
                              },
                              "start": {
                                "column": 21,
                                "line": 14
                              }
                            }
                          }
                        },
                        "range": [
                          211,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 14
                        },
                        "start": {
                          "column": 26,
                          "line": 14
                        }
                      },
                      "range": [
                        222,
                        231
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          224,
                          231
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 14
                          },
                          "start": {
                            "column": 28,
                            "line": 14
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 32
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    204,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 14
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
                    "name": "getProperties",
                    "optional": false,
                    "range": [
                      1146,
                      1159
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
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
                      1159,
                      1208
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "range": [
                              1195,
                              1197
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1188,
                            1198
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        1174,
                        1208
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 36,
                          "line": 33
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      },
                      "range": [
                        1161,
                        1173
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Property",
                            "optional": false,
                            "range": [
                              1163,
                              1171
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 33
                              },
                              "start": {
                                "column": 25,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1163,
                            1171
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 33
                            },
                            "start": {
                              "column": 25,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          1163,
                          1173
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 33
                          },
                          "start": {
                            "column": 25,
                            "line": 33
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1146,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 33
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
                    "name": "getProperty",
                    "optional": false,
                    "range": [
                      1217,
                      1228
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
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
                      1228,
                      1295
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              1275,
                              1284
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 37
                              },
                              "start": {
                                "column": 19,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            1268,
                            1285
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "range": [
                        1254,
                        1295
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 38
                        },
                        "start": {
                          "column": 45,
                          "line": 36
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          },
                          "range": [
                            1234,
                            1242
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1236,
                              1242
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 36
                              },
                              "start": {
                                "column": 27,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          1229,
                          1242
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 36
                          },
                          "start": {
                            "column": 20,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 36
                        },
                        "start": {
                          "column": 34,
                          "line": 36
                        }
                      },
                      "range": [
                        1243,
                        1253
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "range": [
                            1245,
                            1253
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 36
                            },
                            "start": {
                              "column": 36,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          1245,
                          1253
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 36
                          },
                          "start": {
                            "column": 36,
                            "line": 36
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 38
                      },
                      "start": {
                        "column": 19,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1217,
                    1295
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 36
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
                    "name": "getPropertyByName",
                    "optional": false,
                    "range": [
                      1304,
                      1321
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                      1321,
                      1387
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              1367,
                              1376
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 40
                              },
                              "start": {
                                "column": 19,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            1360,
                            1377
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 40
                            },
                            "start": {
                              "column": 12,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "range": [
                        1346,
                        1387
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 41
                        },
                        "start": {
                          "column": 50,
                          "line": 39
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                              "column": 38,
                              "line": 39
                            },
                            "start": {
                              "column": 30,
                              "line": 39
                            }
                          },
                          "range": [
                            1326,
                            1334
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1328,
                              1334
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 39
                              },
                              "start": {
                                "column": 32,
                                "line": 39
                              }
                            }
                          }
                        },
                        "range": [
                          1322,
                          1334
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 39
                          },
                          "start": {
                            "column": 26,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 39
                        },
                        "start": {
                          "column": 39,
                          "line": 39
                        }
                      },
                      "range": [
                        1335,
                        1345
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Property",
                          "optional": false,
                          "range": [
                            1337,
                            1345
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 39
                            },
                            "start": {
                              "column": 41,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1337,
                          1345
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 39
                          },
                          "start": {
                            "column": 41,
                            "line": 39
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 25,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1304,
                    1387
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 39
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
                    "name": "getPropertyCount",
                    "optional": false,
                    "range": [
                      1396,
                      1412
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
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
                      1412,
                      1456
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1444,
                              1445
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 43
                              },
                              "start": {
                                "column": 19,
                                "line": 43
                              }
                            }
                          },
                          "range": [
                            1437,
                            1446
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 43
                            },
                            "start": {
                              "column": 12,
                              "line": 43
                            }
                          }
                        }
                      ],
                      "range": [
                        1423,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 44
                        },
                        "start": {
                          "column": 35,
                          "line": 42
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 42
                        },
                        "start": {
                          "column": 26,
                          "line": 42
                        }
                      },
                      "range": [
                        1414,
                        1422
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1416,
                          1422
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 42
                          },
                          "start": {
                            "column": 28,
                            "line": 42
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1396,
                    1456
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 42
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
                    "name": "getSignature",
                    "optional": false,
                    "range": [
                      1465,
                      1477
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
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
                      1477,
                      1545
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              1525,
                              1534
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 46
                              },
                              "start": {
                                "column": 19,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1518,
                            1535
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 46
                            },
                            "start": {
                              "column": 12,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "range": [
                        1504,
                        1545
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 47
                        },
                        "start": {
                          "column": 47,
                          "line": 45
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 45
                            },
                            "start": {
                              "column": 26,
                              "line": 45
                            }
                          },
                          "range": [
                            1483,
                            1491
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1485,
                              1491
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 45
                              },
                              "start": {
                                "column": 28,
                                "line": 45
                              }
                            }
                          }
                        },
                        "range": [
                          1478,
                          1491
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 45
                          },
                          "start": {
                            "column": 21,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 45
                        },
                        "start": {
                          "column": 35,
                          "line": 45
                        }
                      },
                      "range": [
                        1492,
                        1503
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Signature",
                          "optional": false,
                          "range": [
                            1494,
                            1503
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 45
                            },
                            "start": {
                              "column": 37,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          1494,
                          1503
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 45
                          },
                          "start": {
                            "column": 37,
                            "line": 45
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 47
                      },
                      "start": {
                        "column": 20,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1465,
                    1545
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 45
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
                    "name": "getSignatureCount",
                    "optional": false,
                    "range": [
                      1554,
                      1571
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                      1571,
                      1615
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              1603,
                              1604
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 49
                              },
                              "start": {
                                "column": 19,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1596,
                            1605
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "range": [
                        1582,
                        1615
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 50
                        },
                        "start": {
                          "column": 36,
                          "line": 48
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 48
                        },
                        "start": {
                          "column": 27,
                          "line": 48
                        }
                      },
                      "range": [
                        1573,
                        1581
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1575,
                          1581
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 48
                          },
                          "start": {
                            "column": 29,
                            "line": 48
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 50
                      },
                      "start": {
                        "column": 25,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1554,
                    1615
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 48
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
                    "name": "getSignatures",
                    "optional": false,
                    "range": [
                      1624,
                      1637
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
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
                      1637,
                      1687
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "range": [
                              1674,
                              1676
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 52
                              },
                              "start": {
                                "column": 19,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            1667,
                            1677
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 52
                            },
                            "start": {
                              "column": 12,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "range": [
                        1653,
                        1687
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 53
                        },
                        "start": {
                          "column": 37,
                          "line": 51
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 51
                        },
                        "start": {
                          "column": 23,
                          "line": 51
                        }
                      },
                      "range": [
                        1639,
                        1652
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Signature",
                            "optional": false,
                            "range": [
                              1641,
                              1650
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 51
                              },
                              "start": {
                                "column": 25,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1641,
                            1650
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 51
                            },
                            "start": {
                              "column": 25,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1641,
                          1652
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 51
                          },
                          "start": {
                            "column": 25,
                            "line": 51
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 21,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1624,
                    1687
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 51
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
                    "name": "isPrimitive",
                    "optional": false,
                    "range": [
                      1696,
                      1707
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 54
                      },
                      "start": {
                        "column": 8,
                        "line": 54
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
                      1707,
                      1756
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              1740,
                              1745
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 55
                              },
                              "start": {
                                "column": 19,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            1733,
                            1746
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 55
                            },
                            "start": {
                              "column": 12,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        1719,
                        1756
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 56
                        },
                        "start": {
                          "column": 31,
                          "line": 54
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 54
                        },
                        "start": {
                          "column": 21,
                          "line": 54
                        }
                      },
                      "range": [
                        1709,
                        1718
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1711,
                          1718
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 54
                          },
                          "start": {
                            "column": 23,
                            "line": 54
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 56
                      },
                      "start": {
                        "column": 19,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1696,
                    1756
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 54
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
                    "name": "isObjectType",
                    "optional": false,
                    "range": [
                      1765,
                      1777
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
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
                      1777,
                      1826
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              1810,
                              1815
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 58
                              },
                              "start": {
                                "column": 19,
                                "line": 58
                              }
                            }
                          },
                          "range": [
                            1803,
                            1816
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 58
                            },
                            "start": {
                              "column": 12,
                              "line": 58
                            }
                          }
                        }
                      ],
                      "range": [
                        1789,
                        1826
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 59
                        },
                        "start": {
                          "column": 32,
                          "line": 57
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 57
                        },
                        "start": {
                          "column": 22,
                          "line": 57
                        }
                      },
                      "range": [
                        1779,
                        1788
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1781,
                          1788
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 57
                          },
                          "start": {
                            "column": 24,
                            "line": 57
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 20,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1765,
                    1826
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 57
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
                    "name": "isTypeParameter",
                    "optional": false,
                    "range": [
                      1835,
                      1850
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
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
                      1850,
                      1899
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              1883,
                              1888
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 61
                              },
                              "start": {
                                "column": 19,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1876,
                            1889
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 61
                            },
                            "start": {
                              "column": 12,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "range": [
                        1862,
                        1899
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 62
                        },
                        "start": {
                          "column": 35,
                          "line": 60
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 60
                        },
                        "start": {
                          "column": 25,
                          "line": 60
                        }
                      },
                      "range": [
                        1852,
                        1861
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1854,
                          1861
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 60
                          },
                          "start": {
                            "column": 27,
                            "line": 60
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 62
                      },
                      "start": {
                        "column": 23,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1835,
                    1899
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 60
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
                    "name": "isSubTypeOf",
                    "optional": false,
                    "range": [
                      1908,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
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
                      1919,
                      1943
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1932,
                        1943
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 64
                        },
                        "start": {
                          "column": 32,
                          "line": 63
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
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
                              "column": 30,
                              "line": 63
                            },
                            "start": {
                              "column": 24,
                              "line": 63
                            }
                          },
                          "range": [
                            1924,
                            1930
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Type",
                              "optional": false,
                              "range": [
                                1926,
                                1930
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 63
                                },
                                "start": {
                                  "column": 26,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1926,
                              1930
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 63
                              },
                              "start": {
                                "column": 26,
                                "line": 63
                              }
                            }
                          }
                        },
                        "range": [
                          1920,
                          1930
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 63
                          },
                          "start": {
                            "column": 20,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 19,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1908,
                    1943
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 30,
                  "line": 13
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "range": [
                174,
                178
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                187,
                193
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 23,
                  "line": 13
                }
              }
            },
            "range": [
              168,
              1949
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1985,
                2306
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      1995,
                      2006
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
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
                      2006,
                      2108
                    ],
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
                              "type": "Super",
                              "range": [
                                2090,
                                2095
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 69
                                },
                                "start": {
                                  "column": 12,
                                  "line": 69
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              2090,
                              2097
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 69
                              },
                              "start": {
                                "column": 12,
                                "line": 69
                              }
                            }
                          },
                          "range": [
                            2090,
                            2098
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 69
                            },
                            "start": {
                              "column": 12,
                              "line": 69
                            }
                          }
                        }
                      ],
                      "range": [
                        2076,
                        2108
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 70
                        },
                        "start": {
                          "column": 89,
                          "line": 68
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 68
                              },
                              "start": {
                                "column": 31,
                                "line": 68
                              }
                            },
                            "range": [
                              2018,
                              2026
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                2020,
                                2026
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 68
                                },
                                "start": {
                                  "column": 33,
                                  "line": 68
                                }
                              }
                            }
                          },
                          "range": [
                            2014,
                            2026
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 68
                            },
                            "start": {
                              "column": 27,
                              "line": 68
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2007,
                          2026
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 68
                          },
                          "start": {
                            "column": 20,
                            "line": 68
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 68
                              },
                              "start": {
                                "column": 52,
                                "line": 68
                              }
                            },
                            "range": [
                              2039,
                              2045
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "range": [
                                  2041,
                                  2045
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 68
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 68
                                  }
                                }
                              },
                              "range": [
                                2041,
                                2045
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 68
                                },
                                "start": {
                                  "column": 54,
                                  "line": 68
                                }
                              }
                            }
                          },
                          "range": [
                            2035,
                            2045
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 68
                            },
                            "start": {
                              "column": 48,
                              "line": 68
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2028,
                          2045
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 68
                          },
                          "start": {
                            "column": 41,
                            "line": 68
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 87,
                                "line": 68
                              },
                              "start": {
                                "column": 72,
                                "line": 68
                              }
                            },
                            "range": [
                              2059,
                              2074
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PropertyFlags",
                                "optional": false,
                                "range": [
                                  2061,
                                  2074
                                ],
                                "loc": {
                                  "end": {
                                    "column": 87,
                                    "line": 68
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 68
                                  }
                                }
                              },
                              "range": [
                                2061,
                                2074
                              ],
                              "loc": {
                                "end": {
                                  "column": 87,
                                  "line": 68
                                },
                                "start": {
                                  "column": 74,
                                  "line": 68
                                }
                              }
                            }
                          },
                          "range": [
                            2054,
                            2074
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 68
                            },
                            "start": {
                              "column": 67,
                              "line": 68
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2047,
                          2074
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 68
                          },
                          "start": {
                            "column": 60,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 70
                      },
                      "start": {
                        "column": 19,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1995,
                    2108
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 70
                    },
                    "start": {
                      "column": 8,
                      "line": 68
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
                    "name": "equals",
                    "optional": false,
                    "range": [
                      2117,
                      2123
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
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
                      2123,
                      2300
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      2171,
                                      2175
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 72
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      2176,
                                      2180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 72
                                      }
                                    }
                                  },
                                  "range": [
                                    2171,
                                    2180
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 72
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      2185,
                                      2190
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 72
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      2191,
                                      2195
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 72
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 72
                                      }
                                    }
                                  },
                                  "range": [
                                    2185,
                                    2195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 72
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 72
                                    }
                                  }
                                },
                                "range": [
                                  2171,
                                  2195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 72
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 72
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      2215,
                                      2219
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "range": [
                                      2220,
                                      2225
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "range": [
                                    2215,
                                    2225
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 73
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      2230,
                                      2235
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "range": [
                                      2236,
                                      2241
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 73
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 73
                                      }
                                    }
                                  },
                                  "range": [
                                    2230,
                                    2241
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 73
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 73
                                    }
                                  }
                                },
                                "range": [
                                  2215,
                                  2241
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 73
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 73
                                  }
                                }
                              },
                              "range": [
                                2171,
                                2241
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 73
                                },
                                "start": {
                                  "column": 19,
                                  "line": 72
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      2278,
                                      2283
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 74
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
                                      2284,
                                      2288
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 74
                                      }
                                    }
                                  },
                                  "range": [
                                    2278,
                                    2288
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 74
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      2261,
                                      2265
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 74
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
                                      2266,
                                      2270
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 74
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 74
                                      }
                                    }
                                  },
                                  "range": [
                                    2261,
                                    2270
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 74
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "range": [
                                    2271,
                                    2277
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 74
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 74
                                    }
                                  }
                                },
                                "range": [
                                  2261,
                                  2277
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 74
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 74
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2261,
                                2289
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 74
                                },
                                "start": {
                                  "column": 16,
                                  "line": 74
                                }
                              }
                            },
                            "range": [
                              2171,
                              2289
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 74
                              },
                              "start": {
                                "column": 19,
                                "line": 72
                              }
                            }
                          },
                          "range": [
                            2164,
                            2290
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 74
                            },
                            "start": {
                              "column": 12,
                              "line": 72
                            }
                          }
                        }
                      ],
                      "range": [
                        2150,
                        2300
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 75
                        },
                        "start": {
                          "column": 41,
                          "line": 71
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 71
                            },
                            "start": {
                              "column": 20,
                              "line": 71
                            }
                          },
                          "range": [
                            2129,
                            2139
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Property",
                              "optional": false,
                              "range": [
                                2131,
                                2139
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 71
                                },
                                "start": {
                                  "column": 22,
                                  "line": 71
                                }
                              }
                            },
                            "range": [
                              2131,
                              2139
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 71
                              },
                              "start": {
                                "column": 22,
                                "line": 71
                              }
                            }
                          }
                        },
                        "range": [
                          2124,
                          2139
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 71
                          },
                          "start": {
                            "column": 15,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 71
                        },
                        "start": {
                          "column": 31,
                          "line": 71
                        }
                      },
                      "range": [
                        2140,
                        2149
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2142,
                          2149
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 71
                          },
                          "start": {
                            "column": 33,
                            "line": 71
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 75
                      },
                      "start": {
                        "column": 14,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2117,
                    2300
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 71
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 34,
                  "line": 67
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "range": [
                1961,
                1969
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 67
                },
                "start": {
                  "column": 10,
                  "line": 67
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                1978,
                1984
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 67
                },
                "start": {
                  "column": 27,
                  "line": 67
                }
              }
            },
            "range": [
              1955,
              2306
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 67
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "body": {
              "type": "TSEnumBody",
              "range": [
                2331,
                2380
              ],
              "members": [
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "range": [
                      2341,
                      2349
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 79
                      }
                    }
                  },
                  "initializer": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      2352,
                      2353
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 79
                      },
                      "start": {
                        "column": 19,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2341,
                    2353
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Private",
                    "optional": false,
                    "range": [
                      2363,
                      2370
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 80
                      },
                      "start": {
                        "column": 8,
                        "line": 80
                      }
                    }
                  },
                  "initializer": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      2373,
                      2374
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 80
                      },
                      "start": {
                        "column": 18,
                        "line": 80
                      }
                    }
                  },
                  "range": [
                    2363,
                    2374
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 80
                    },
                    "start": {
                      "column": 8,
                      "line": 80
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 81
                },
                "start": {
                  "column": 23,
                  "line": 78
                }
              }
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropertyFlags",
              "optional": false,
              "range": [
                2317,
                2330
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 78
                },
                "start": {
                  "column": 9,
                  "line": 78
                }
              }
            },
            "range": [
              2312,
              2380
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2417,
                3086
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      2427,
                      2438
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 84
                      },
                      "start": {
                        "column": 8,
                        "line": 84
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
                      2438,
                      2568
                    ],
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
                              "type": "Super",
                              "range": [
                                2550,
                                2555
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 85
                                },
                                "start": {
                                  "column": 12,
                                  "line": 85
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              2550,
                              2557
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 85
                              },
                              "start": {
                                "column": 12,
                                "line": 85
                              }
                            }
                          },
                          "range": [
                            2550,
                            2558
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 85
                            },
                            "start": {
                              "column": 12,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "range": [
                        2536,
                        2568
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 86
                        },
                        "start": {
                          "column": 117,
                          "line": 84
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "typeParameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 84
                              },
                              "start": {
                                "column": 41,
                                "line": 84
                              }
                            },
                            "range": [
                              2460,
                              2477
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TypeParameter",
                                  "optional": false,
                                  "range": [
                                    2462,
                                    2475
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 84
                                    }
                                  }
                                },
                                "range": [
                                  2462,
                                  2475
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 84
                                  }
                                }
                              },
                              "range": [
                                2462,
                                2477
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 84
                                },
                                "start": {
                                  "column": 43,
                                  "line": 84
                                }
                              }
                            }
                          },
                          "range": [
                            2446,
                            2477
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 84
                            },
                            "start": {
                              "column": 27,
                              "line": 84
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2439,
                          2477
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 84
                          },
                          "start": {
                            "column": 20,
                            "line": 84
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parameters",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 90,
                                "line": 84
                              },
                              "start": {
                                "column": 77,
                                "line": 84
                              }
                            },
                            "range": [
                              2496,
                              2509
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Parameter",
                                  "optional": false,
                                  "range": [
                                    2498,
                                    2507
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 88,
                                      "line": 84
                                    },
                                    "start": {
                                      "column": 79,
                                      "line": 84
                                    }
                                  }
                                },
                                "range": [
                                  2498,
                                  2507
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 79,
                                    "line": 84
                                  }
                                }
                              },
                              "range": [
                                2498,
                                2509
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 84
                                },
                                "start": {
                                  "column": 79,
                                  "line": 84
                                }
                              }
                            }
                          },
                          "range": [
                            2486,
                            2509
                          ],
                          "loc": {
                            "end": {
                              "column": 90,
                              "line": 84
                            },
                            "start": {
                              "column": 67,
                              "line": 84
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2479,
                          2509
                        ],
                        "loc": {
                          "end": {
                            "column": 90,
                            "line": 84
                          },
                          "start": {
                            "column": 60,
                            "line": 84
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "returnType",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 115,
                                "line": 84
                              },
                              "start": {
                                "column": 109,
                                "line": 84
                              }
                            },
                            "range": [
                              2528,
                              2534
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "range": [
                                  2530,
                                  2534
                                ],
                                "loc": {
                                  "end": {
                                    "column": 115,
                                    "line": 84
                                  },
                                  "start": {
                                    "column": 111,
                                    "line": 84
                                  }
                                }
                              },
                              "range": [
                                2530,
                                2534
                              ],
                              "loc": {
                                "end": {
                                  "column": 115,
                                  "line": 84
                                },
                                "start": {
                                  "column": 111,
                                  "line": 84
                                }
                              }
                            }
                          },
                          "range": [
                            2518,
                            2534
                          ],
                          "loc": {
                            "end": {
                              "column": 115,
                              "line": 84
                            },
                            "start": {
                              "column": 99,
                              "line": 84
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          2511,
                          2534
                        ],
                        "loc": {
                          "end": {
                            "column": 115,
                            "line": 84
                          },
                          "start": {
                            "column": 92,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 19,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2427,
                    2568
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 84
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
                    "name": "equalsNoReturn",
                    "optional": false,
                    "range": [
                      2577,
                      2591
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 87
                      },
                      "start": {
                        "column": 8,
                        "line": 87
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
                      2591,
                      2919
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "LogicalExpression",
                                "operator": "&&",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2640,
                                          2644
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 19,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "range": [
                                          2645,
                                          2655
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "range": [
                                        2640,
                                        2655
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 88
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "range": [
                                        2656,
                                        2662
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 35,
                                          "line": 88
                                        }
                                      }
                                    },
                                    "range": [
                                      2640,
                                      2662
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 88
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "range": [
                                          2667,
                                          2672
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 51,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parameters",
                                        "optional": false,
                                        "range": [
                                          2673,
                                          2683
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 62,
                                            "line": 88
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 88
                                          }
                                        }
                                      },
                                      "range": [
                                        2667,
                                        2683
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 62,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 88
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "range": [
                                        2684,
                                        2690
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 69,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 63,
                                          "line": 88
                                        }
                                      }
                                    },
                                    "range": [
                                      2667,
                                      2690
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 69,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 88
                                      }
                                    }
                                  },
                                  "range": [
                                    2640,
                                    2690
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 88
                                    }
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "===",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          2710,
                                          2714
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 89
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 89
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "range": [
                                          2715,
                                          2729
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 89
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 89
                                          }
                                        }
                                      },
                                      "range": [
                                        2710,
                                        2729
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 89
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 89
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "range": [
                                        2730,
                                        2736
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 89
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 89
                                        }
                                      }
                                    },
                                    "range": [
                                      2710,
                                      2736
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 89
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 89
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "other",
                                        "optional": false,
                                        "range": [
                                          2741,
                                          2746
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 89
                                          },
                                          "start": {
                                            "column": 47,
                                            "line": 89
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "typeParameters",
                                        "optional": false,
                                        "range": [
                                          2747,
                                          2761
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 67,
                                            "line": 89
                                          },
                                          "start": {
                                            "column": 53,
                                            "line": 89
                                          }
                                        }
                                      },
                                      "range": [
                                        2741,
                                        2761
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 67,
                                          "line": 89
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 89
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "range": [
                                        2762,
                                        2768
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 74,
                                          "line": 89
                                        },
                                        "start": {
                                          "column": 68,
                                          "line": 89
                                        }
                                      }
                                    },
                                    "range": [
                                      2741,
                                      2768
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 74,
                                        "line": 89
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 89
                                      }
                                    }
                                  },
                                  "range": [
                                    2710,
                                    2768
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 89
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 89
                                    }
                                  }
                                },
                                "range": [
                                  2640,
                                  2768
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 88
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        2800,
                                        2804
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 90
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 90
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "range": [
                                        2805,
                                        2815
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 90
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 90
                                        }
                                      }
                                    },
                                    "range": [
                                      2800,
                                      2815
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 90
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 90
                                      }
                                    }
                                  },
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "range": [
                                        2817,
                                        2822
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 90
                                        },
                                        "start": {
                                          "column": 45,
                                          "line": 90
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parameters",
                                      "optional": false,
                                      "range": [
                                        2823,
                                        2833
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 90
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 90
                                        }
                                      }
                                    },
                                    "range": [
                                      2817,
                                      2833
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 61,
                                        "line": 90
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 90
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arrayEquals",
                                  "optional": false,
                                  "range": [
                                    2788,
                                    2799
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 90
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 90
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  2788,
                                  2834
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 90
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 90
                                  }
                                }
                              },
                              "range": [
                                2640,
                                2834
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 90
                                },
                                "start": {
                                  "column": 19,
                                  "line": 88
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      2866,
                                      2870
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 91
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 91
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "range": [
                                      2871,
                                      2885
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 91
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 91
                                      }
                                    }
                                  },
                                  "range": [
                                    2866,
                                    2885
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 91
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 91
                                    }
                                  }
                                },
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      2887,
                                      2892
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 91
                                      },
                                      "start": {
                                        "column": 49,
                                        "line": 91
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "typeParameters",
                                    "optional": false,
                                    "range": [
                                      2893,
                                      2907
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 69,
                                        "line": 91
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 91
                                      }
                                    }
                                  },
                                  "range": [
                                    2887,
                                    2907
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 91
                                    },
                                    "start": {
                                      "column": 49,
                                      "line": 91
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arrayEquals",
                                "optional": false,
                                "range": [
                                  2854,
                                  2865
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 91
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 91
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2854,
                                2908
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 91
                                },
                                "start": {
                                  "column": 16,
                                  "line": 91
                                }
                              }
                            },
                            "range": [
                              2640,
                              2908
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 91
                              },
                              "start": {
                                "column": 19,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            2633,
                            2909
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 91
                            },
                            "start": {
                              "column": 12,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "range": [
                        2619,
                        2919
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 92
                        },
                        "start": {
                          "column": 50,
                          "line": 87
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 87
                            },
                            "start": {
                              "column": 28,
                              "line": 87
                            }
                          },
                          "range": [
                            2597,
                            2608
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "range": [
                                2599,
                                2608
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 87
                                },
                                "start": {
                                  "column": 30,
                                  "line": 87
                                }
                              }
                            },
                            "range": [
                              2599,
                              2608
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 87
                              },
                              "start": {
                                "column": 30,
                                "line": 87
                              }
                            }
                          }
                        },
                        "range": [
                          2592,
                          2608
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 87
                          },
                          "start": {
                            "column": 23,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 87
                        },
                        "start": {
                          "column": 40,
                          "line": 87
                        }
                      },
                      "range": [
                        2609,
                        2618
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2611,
                          2618
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 87
                          },
                          "start": {
                            "column": 42,
                            "line": 87
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 92
                      },
                      "start": {
                        "column": 22,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    2577,
                    2919
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 87
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
                    "name": "equals",
                    "optional": false,
                    "range": [
                      2928,
                      2934
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
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
                      2934,
                      3080
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "range": [
                                    3003,
                                    3008
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 94
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 94
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    2983,
                                    2987
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 94
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 94
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equalsNoReturn",
                                  "optional": false,
                                  "range": [
                                    2988,
                                    3002
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 94
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 94
                                    }
                                  }
                                },
                                "range": [
                                  2983,
                                  3002
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 94
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 94
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2983,
                                3009
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 94
                                },
                                "start": {
                                  "column": 19,
                                  "line": 94
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      3052,
                                      3057
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "range": [
                                      3058,
                                      3068
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 45,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    3052,
                                    3068
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 95
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      3029,
                                      3033
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "returnType",
                                    "optional": false,
                                    "range": [
                                      3034,
                                      3044
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 95
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 95
                                      }
                                    }
                                  },
                                  "range": [
                                    3029,
                                    3044
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 95
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "range": [
                                    3045,
                                    3051
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 95
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 95
                                    }
                                  }
                                },
                                "range": [
                                  3029,
                                  3051
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 95
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 95
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                3029,
                                3069
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 95
                                },
                                "start": {
                                  "column": 16,
                                  "line": 95
                                }
                              }
                            },
                            "range": [
                              2983,
                              3069
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 95
                              },
                              "start": {
                                "column": 19,
                                "line": 94
                              }
                            }
                          },
                          "range": [
                            2976,
                            3070
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 95
                            },
                            "start": {
                              "column": 12,
                              "line": 94
                            }
                          }
                        }
                      ],
                      "range": [
                        2962,
                        3080
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 96
                        },
                        "start": {
                          "column": 42,
                          "line": 93
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 93
                            },
                            "start": {
                              "column": 20,
                              "line": 93
                            }
                          },
                          "range": [
                            2940,
                            2951
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signature",
                              "optional": false,
                              "range": [
                                2942,
                                2951
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 93
                                },
                                "start": {
                                  "column": 22,
                                  "line": 93
                                }
                              }
                            },
                            "range": [
                              2942,
                              2951
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 93
                              },
                              "start": {
                                "column": 22,
                                "line": 93
                              }
                            }
                          }
                        },
                        "range": [
                          2935,
                          2951
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 93
                          },
                          "start": {
                            "column": 15,
                            "line": 93
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 93
                        },
                        "start": {
                          "column": 32,
                          "line": 93
                        }
                      },
                      "range": [
                        2952,
                        2961
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          2954,
                          2961
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 93
                          },
                          "start": {
                            "column": 34,
                            "line": 93
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 96
                      },
                      "start": {
                        "column": 14,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    2928,
                    3080
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 96
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 97
                },
                "start": {
                  "column": 35,
                  "line": 83
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Signature",
              "optional": false,
              "range": [
                2392,
                2401
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 83
                },
                "start": {
                  "column": 10,
                  "line": 83
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                2410,
                2416
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 83
                },
                "start": {
                  "column": 28,
                  "line": 83
                }
              }
            },
            "range": [
              2386,
              3086
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3123,
                3437
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      3133,
                      3144
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
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
                      3144,
                      3247
                    ],
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
                              "type": "Super",
                              "range": [
                                3229,
                                3234
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 101
                                },
                                "start": {
                                  "column": 12,
                                  "line": 101
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              3229,
                              3236
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 101
                              },
                              "start": {
                                "column": 12,
                                "line": 101
                              }
                            }
                          },
                          "range": [
                            3229,
                            3237
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 101
                            },
                            "start": {
                              "column": 12,
                              "line": 101
                            }
                          }
                        }
                      ],
                      "range": [
                        3215,
                        3247
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 102
                        },
                        "start": {
                          "column": 90,
                          "line": 100
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 100
                              },
                              "start": {
                                "column": 31,
                                "line": 100
                              }
                            },
                            "range": [
                              3156,
                              3164
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                3158,
                                3164
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 100
                                },
                                "start": {
                                  "column": 33,
                                  "line": 100
                                }
                              }
                            }
                          },
                          "range": [
                            3152,
                            3164
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 100
                            },
                            "start": {
                              "column": 27,
                              "line": 100
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          3145,
                          3164
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 100
                          },
                          "start": {
                            "column": 20,
                            "line": 100
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 100
                              },
                              "start": {
                                "column": 52,
                                "line": 100
                              }
                            },
                            "range": [
                              3177,
                              3183
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Type",
                                "optional": false,
                                "range": [
                                  3179,
                                  3183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 100
                                  }
                                }
                              },
                              "range": [
                                3179,
                                3183
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 100
                                },
                                "start": {
                                  "column": 54,
                                  "line": 100
                                }
                              }
                            }
                          },
                          "range": [
                            3173,
                            3183
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 100
                            },
                            "start": {
                              "column": 48,
                              "line": 100
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          3166,
                          3183
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 100
                          },
                          "start": {
                            "column": 41,
                            "line": 100
                          }
                        }
                      },
                      {
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 100
                              },
                              "start": {
                                "column": 72,
                                "line": 100
                              }
                            },
                            "range": [
                              3197,
                              3213
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ParameterFlags",
                                "optional": false,
                                "range": [
                                  3199,
                                  3213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 100
                                  },
                                  "start": {
                                    "column": 74,
                                    "line": 100
                                  }
                                }
                              },
                              "range": [
                                3199,
                                3213
                              ],
                              "loc": {
                                "end": {
                                  "column": 88,
                                  "line": 100
                                },
                                "start": {
                                  "column": 74,
                                  "line": 100
                                }
                              }
                            }
                          },
                          "range": [
                            3192,
                            3213
                          ],
                          "loc": {
                            "end": {
                              "column": 88,
                              "line": 100
                            },
                            "start": {
                              "column": 67,
                              "line": 100
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          3185,
                          3213
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 100
                          },
                          "start": {
                            "column": 60,
                            "line": 100
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 102
                      },
                      "start": {
                        "column": 19,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    3133,
                    3247
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 100
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
                    "name": "equals",
                    "optional": false,
                    "range": [
                      3256,
                      3262
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
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
                      3262,
                      3431
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "LogicalExpression",
                              "operator": "&&",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      3302,
                                      3306
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 104
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 104
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      3307,
                                      3311
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 104
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 104
                                      }
                                    }
                                  },
                                  "range": [
                                    3302,
                                    3311
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 104
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      3316,
                                      3321
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 104
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 104
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "range": [
                                      3322,
                                      3326
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 104
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 104
                                      }
                                    }
                                  },
                                  "range": [
                                    3316,
                                    3326
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 104
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 104
                                    }
                                  }
                                },
                                "range": [
                                  3302,
                                  3326
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 104
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 104
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "===",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      3346,
                                      3350
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 105
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 105
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "range": [
                                      3351,
                                      3356
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 105
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 105
                                      }
                                    }
                                  },
                                  "range": [
                                    3346,
                                    3356
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 105
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 105
                                    }
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      3361,
                                      3366
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 105
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 105
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "flags",
                                    "optional": false,
                                    "range": [
                                      3367,
                                      3372
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 105
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 105
                                      }
                                    }
                                  },
                                  "range": [
                                    3361,
                                    3372
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 105
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 105
                                    }
                                  }
                                },
                                "range": [
                                  3346,
                                  3372
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 105
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 105
                                  }
                                }
                              },
                              "range": [
                                3302,
                                3372
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 105
                                },
                                "start": {
                                  "column": 19,
                                  "line": 104
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "other",
                                    "optional": false,
                                    "range": [
                                      3409,
                                      3414
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 106
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
                                      3415,
                                      3419
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 106
                                      }
                                    }
                                  },
                                  "range": [
                                    3409,
                                    3419
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 106
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 106
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "range": [
                                      3392,
                                      3396
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 106
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
                                      3397,
                                      3401
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 106
                                      }
                                    }
                                  },
                                  "range": [
                                    3392,
                                    3401
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 106
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 106
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "equals",
                                  "optional": false,
                                  "range": [
                                    3402,
                                    3408
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 106
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 106
                                    }
                                  }
                                },
                                "range": [
                                  3392,
                                  3408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 106
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 106
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                3392,
                                3420
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 106
                                },
                                "start": {
                                  "column": 16,
                                  "line": 106
                                }
                              }
                            },
                            "range": [
                              3302,
                              3420
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 106
                              },
                              "start": {
                                "column": 19,
                                "line": 104
                              }
                            }
                          },
                          "range": [
                            3295,
                            3421
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 106
                            },
                            "start": {
                              "column": 12,
                              "line": 104
                            }
                          }
                        }
                      ],
                      "range": [
                        3281,
                        3431
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 107
                        },
                        "start": {
                          "column": 33,
                          "line": 103
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "other",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 103
                            },
                            "start": {
                              "column": 20,
                              "line": 103
                            }
                          },
                          "range": [
                            3268,
                            3279
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Parameter",
                              "optional": false,
                              "range": [
                                3270,
                                3279
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 103
                                },
                                "start": {
                                  "column": 22,
                                  "line": 103
                                }
                              }
                            },
                            "range": [
                              3270,
                              3279
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 103
                              },
                              "start": {
                                "column": 22,
                                "line": 103
                              }
                            }
                          }
                        },
                        "range": [
                          3263,
                          3279
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 103
                          },
                          "start": {
                            "column": 15,
                            "line": 103
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 107
                      },
                      "start": {
                        "column": 14,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    3256,
                    3431
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 35,
                  "line": 99
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parameter",
              "optional": false,
              "range": [
                3098,
                3107
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 99
                },
                "start": {
                  "column": 10,
                  "line": 99
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                3116,
                3122
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 99
                },
                "start": {
                  "column": 28,
                  "line": 99
                }
              }
            },
            "range": [
              3092,
              3437
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          {
            "type": "TSEnumDeclaration",
            "body": {
              "type": "TSEnumBody",
              "range": [
                3463,
                3509
              ],
              "members": [
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Optional",
                    "optional": false,
                    "range": [
                      3473,
                      3481
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 111
                      },
                      "start": {
                        "column": 8,
                        "line": 111
                      }
                    }
                  },
                  "initializer": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3484,
                      3485
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 111
                      },
                      "start": {
                        "column": 19,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    3473,
                    3485
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
                    }
                  }
                },
                {
                  "type": "TSEnumMember",
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rest",
                    "optional": false,
                    "range": [
                      3495,
                      3499
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  },
                  "initializer": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      3502,
                      3503
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 112
                      },
                      "start": {
                        "column": 15,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    3495,
                    3503
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 24,
                  "line": 110
                }
              }
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParameterFlags",
              "optional": false,
              "range": [
                3448,
                3462
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 110
                },
                "start": {
                  "column": 9,
                  "line": 110
                }
              }
            },
            "range": [
              3443,
              3509
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 110
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
                  "name": "hasOwnProperty",
                  "optional": false,
                  "range": [
                    3523,
                    3537
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 116
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "range": [
                        3540,
                        3546
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 116
                        },
                        "start": {
                          "column": 25,
                          "line": 116
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
                        3547,
                        3556
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 116
                        },
                        "start": {
                          "column": 32,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      3540,
                      3556
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 116
                      },
                      "start": {
                        "column": 25,
                        "line": 116
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "range": [
                      3557,
                      3571
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 116
                      },
                      "start": {
                        "column": 42,
                        "line": 116
                      }
                    }
                  },
                  "range": [
                    3540,
                    3571
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 116
                    },
                    "start": {
                      "column": 25,
                      "line": 116
                    }
                  }
                },
                "range": [
                  3523,
                  3571
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              3519,
              3572
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
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
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        3684,
                        3693
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 119
                        },
                        "start": {
                          "column": 51,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3677,
                      3694
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 119
                      },
                      "start": {
                        "column": 44,
                        "line": 119
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "range": [
                            3666,
                            3669
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 119
                            },
                            "start": {
                              "column": 33,
                              "line": 119
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            3671,
                            3674
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 119
                            },
                            "start": {
                              "column": 38,
                              "line": 119
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
                          "name": "hasOwnProperty",
                          "optional": false,
                          "range": [
                            3646,
                            3660
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 119
                            },
                            "start": {
                              "column": 13,
                              "line": 119
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "range": [
                            3661,
                            3665
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 119
                            },
                            "start": {
                              "column": 28,
                              "line": 119
                            }
                          }
                        },
                        "range": [
                          3646,
                          3665
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 119
                          },
                          "start": {
                            "column": 13,
                            "line": 119
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3646,
                        3675
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 119
                        },
                        "start": {
                          "column": 13,
                          "line": 119
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      3645,
                      3675
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 119
                      },
                      "start": {
                        "column": 12,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    3641,
                    3694
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 119
                    },
                    "start": {
                      "column": 8,
                      "line": 119
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        3710,
                        3713
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 120
                        },
                        "start": {
                          "column": 15,
                          "line": 120
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        3714,
                        3717
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 120
                        },
                        "start": {
                          "column": 19,
                          "line": 120
                        }
                      }
                    },
                    "range": [
                      3710,
                      3718
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 120
                      },
                      "start": {
                        "column": 15,
                        "line": 120
                      }
                    }
                  },
                  "range": [
                    3703,
                    3719
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 120
                    },
                    "start": {
                      "column": 8,
                      "line": 120
                    }
                  }
                }
              ],
              "range": [
                3631,
                3725
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 121
                },
                "start": {
                  "column": 57,
                  "line": 118
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProperty",
              "optional": false,
              "range": [
                3587,
                3598
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 118
                },
                "start": {
                  "column": 13,
                  "line": 118
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 118
                    },
                    "start": {
                      "column": 31,
                      "line": 118
                    }
                  },
                  "range": [
                    3605,
                    3613
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3610,
                        3613
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
                              3611,
                              3612
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 118
                              },
                              "start": {
                                "column": 37,
                                "line": 118
                              }
                            }
                          },
                          "range": [
                            3611,
                            3612
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 118
                            },
                            "start": {
                              "column": 37,
                              "line": 118
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 118
                        },
                        "start": {
                          "column": 36,
                          "line": 118
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "range": [
                        3607,
                        3610
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 118
                        },
                        "start": {
                          "column": 33,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      3607,
                      3613
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 118
                      },
                      "start": {
                        "column": 33,
                        "line": 118
                      }
                    }
                  }
                },
                "range": [
                  3602,
                  3613
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 118
                  },
                  "start": {
                    "column": 28,
                    "line": 118
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 118
                    },
                    "start": {
                      "column": 44,
                      "line": 118
                    }
                  },
                  "range": [
                    3618,
                    3626
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      3620,
                      3626
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 118
                      },
                      "start": {
                        "column": 46,
                        "line": 118
                      }
                    }
                  }
                },
                "range": [
                  3615,
                  3626
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 118
                  },
                  "start": {
                    "column": 41,
                    "line": 118
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 118
                },
                "start": {
                  "column": 53,
                  "line": 118
                }
              },
              "range": [
                3627,
                3630
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    3629,
                    3630
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 118
                    },
                    "start": {
                      "column": 55,
                      "line": 118
                    }
                  }
                },
                "range": [
                  3629,
                  3630
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 118
                  },
                  "start": {
                    "column": 55,
                    "line": 118
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 118
                },
                "start": {
                  "column": 24,
                  "line": 118
                }
              },
              "range": [
                3598,
                3601
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
                      3599,
                      3600
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 118
                      },
                      "start": {
                        "column": 25,
                        "line": 118
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3599,
                    3600
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 118
                    },
                    "start": {
                      "column": 25,
                      "line": 118
                    }
                  }
                }
              ]
            },
            "range": [
              3578,
              3725
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 118
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "map",
                        "optional": false,
                        "range": [
                          3827,
                          3830
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 124
                          },
                          "start": {
                            "column": 35,
                            "line": 124
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          3832,
                          3835
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 124
                          },
                          "start": {
                            "column": 40,
                            "line": 124
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
                        "name": "hasOwnProperty",
                        "optional": false,
                        "range": [
                          3807,
                          3821
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 124
                          },
                          "start": {
                            "column": 15,
                            "line": 124
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "call",
                        "optional": false,
                        "range": [
                          3822,
                          3826
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 124
                          },
                          "start": {
                            "column": 30,
                            "line": 124
                          }
                        }
                      },
                      "range": [
                        3807,
                        3826
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 124
                        },
                        "start": {
                          "column": 15,
                          "line": 124
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3807,
                      3836
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 124
                      },
                      "start": {
                        "column": 15,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    3800,
                    3837
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                }
              ],
              "range": [
                3790,
                3843
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 125
                },
                "start": {
                  "column": 63,
                  "line": 123
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasProperty",
              "optional": false,
              "range": [
                3740,
                3751
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 123
                },
                "start": {
                  "column": 13,
                  "line": 123
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 123
                    },
                    "start": {
                      "column": 31,
                      "line": 123
                    }
                  },
                  "range": [
                    3758,
                    3766
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3763,
                        3766
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
                              3764,
                              3765
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 123
                              },
                              "start": {
                                "column": 37,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            3764,
                            3765
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 123
                            },
                            "start": {
                              "column": 37,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 123
                        },
                        "start": {
                          "column": 36,
                          "line": 123
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Map",
                      "optional": false,
                      "range": [
                        3760,
                        3763
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 123
                        },
                        "start": {
                          "column": 33,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      3760,
                      3766
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 123
                      },
                      "start": {
                        "column": 33,
                        "line": 123
                      }
                    }
                  }
                },
                "range": [
                  3755,
                  3766
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 123
                  },
                  "start": {
                    "column": 28,
                    "line": 123
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 123
                    },
                    "start": {
                      "column": 44,
                      "line": 123
                    }
                  },
                  "range": [
                    3771,
                    3779
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      3773,
                      3779
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 123
                      },
                      "start": {
                        "column": 46,
                        "line": 123
                      }
                    }
                  }
                },
                "range": [
                  3768,
                  3779
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 123
                  },
                  "start": {
                    "column": 41,
                    "line": 123
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 62,
                  "line": 123
                },
                "start": {
                  "column": 53,
                  "line": 123
                }
              },
              "range": [
                3780,
                3789
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  3782,
                  3789
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 123
                  },
                  "start": {
                    "column": 55,
                    "line": 123
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 123
                },
                "start": {
                  "column": 24,
                  "line": 123
                }
              },
              "range": [
                3751,
                3754
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
                      3752,
                      3753
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 123
                      },
                      "start": {
                        "column": 25,
                        "line": 123
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3752,
                    3753
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 123
                    },
                    "start": {
                      "column": 25,
                      "line": 123
                    }
                  }
                }
              ]
            },
            "range": [
              3731,
              3843
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 123
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
                        "name": "len",
                        "optional": false,
                        "range": [
                          3933,
                          3936
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 128
                          },
                          "start": {
                            "column": 12,
                            "line": 128
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            3939,
                            3940
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 128
                            },
                            "start": {
                              "column": 18,
                              "line": 128
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            3941,
                            3947
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 128
                            },
                            "start": {
                              "column": 20,
                              "line": 128
                            }
                          }
                        },
                        "range": [
                          3939,
                          3947
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 128
                          },
                          "start": {
                            "column": 18,
                            "line": 128
                          }
                        }
                      },
                      "range": [
                        3933,
                        3947
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 128
                        },
                        "start": {
                          "column": 12,
                          "line": 128
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3929,
                    3948
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 128
                    },
                    "start": {
                      "column": 8,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              4031,
                              4035
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 130
                              },
                              "start": {
                                "column": 42,
                                "line": 130
                              }
                            }
                          },
                          "range": [
                            4024,
                            4036
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 130
                            },
                            "start": {
                              "column": 35,
                              "line": 130
                            }
                          }
                        },
                        "test": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  4017,
                                  4018
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 130
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 130
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  4019,
                                  4020
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 130
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 130
                                  }
                                }
                              },
                              "range": [
                                4017,
                                4021
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 130
                                },
                                "start": {
                                  "column": 28,
                                  "line": 130
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
                              "name": "item",
                              "optional": false,
                              "range": [
                                4005,
                                4009
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 130
                                },
                                "start": {
                                  "column": 16,
                                  "line": 130
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "equals",
                              "optional": false,
                              "range": [
                                4010,
                                4016
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 130
                                },
                                "start": {
                                  "column": 21,
                                  "line": 130
                                }
                              }
                            },
                            "range": [
                              4005,
                              4016
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 130
                              },
                              "start": {
                                "column": 16,
                                "line": 130
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            4005,
                            4022
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 130
                            },
                            "start": {
                              "column": 16,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          4001,
                          4036
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 130
                          },
                          "start": {
                            "column": 12,
                            "line": 130
                          }
                        }
                      }
                    ],
                    "range": [
                      3987,
                      4046
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 131
                      },
                      "start": {
                        "column": 38,
                        "line": 129
                      }
                    }
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            3966,
                            3967
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 129
                            },
                            "start": {
                              "column": 17,
                              "line": 129
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            3970,
                            3971
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 129
                            },
                            "start": {
                              "column": 21,
                              "line": 129
                            }
                          }
                        },
                        "range": [
                          3966,
                          3971
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 129
                          },
                          "start": {
                            "column": 17,
                            "line": 129
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3962,
                      3971
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 129
                      },
                      "start": {
                        "column": 13,
                        "line": 129
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        3973,
                        3974
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 129
                        },
                        "start": {
                          "column": 24,
                          "line": 129
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "range": [
                        3977,
                        3980
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 129
                        },
                        "start": {
                          "column": 28,
                          "line": 129
                        }
                      }
                    },
                    "range": [
                      3973,
                      3980
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 129
                      },
                      "start": {
                        "column": 24,
                        "line": 129
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        3982,
                        3983
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 129
                        },
                        "start": {
                          "column": 33,
                          "line": 129
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      3982,
                      3985
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 129
                      },
                      "start": {
                        "column": 33,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    3957,
                    4046
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 131
                    },
                    "start": {
                      "column": 8,
                      "line": 129
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      4062,
                      4067
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 132
                      },
                      "start": {
                        "column": 15,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    4055,
                    4068
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 132
                    },
                    "start": {
                      "column": 8,
                      "line": 132
                    }
                  }
                }
              ],
              "range": [
                3919,
                4074
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 133
                },
                "start": {
                  "column": 74,
                  "line": 127
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayContains",
              "optional": false,
              "range": [
                3858,
                3871
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 127
                },
                "start": {
                  "column": 13,
                  "line": 127
                }
              }
            },
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
                      "column": 54,
                      "line": 127
                    },
                    "start": {
                      "column": 49,
                      "line": 127
                    }
                  },
                  "range": [
                    3894,
                    3899
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3896,
                          3897
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 127
                          },
                          "start": {
                            "column": 51,
                            "line": 127
                          }
                        }
                      },
                      "range": [
                        3896,
                        3897
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 127
                        },
                        "start": {
                          "column": 51,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      3896,
                      3899
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 127
                      },
                      "start": {
                        "column": 51,
                        "line": 127
                      }
                    }
                  }
                },
                "range": [
                  3893,
                  3899
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 127
                  },
                  "start": {
                    "column": 48,
                    "line": 127
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 127
                    },
                    "start": {
                      "column": 60,
                      "line": 127
                    }
                  },
                  "range": [
                    3905,
                    3908
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        3907,
                        3908
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 127
                        },
                        "start": {
                          "column": 62,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      3907,
                      3908
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 127
                      },
                      "start": {
                        "column": 62,
                        "line": 127
                      }
                    }
                  }
                },
                "range": [
                  3901,
                  3908
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 127
                  },
                  "start": {
                    "column": 56,
                    "line": 127
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 73,
                  "line": 127
                },
                "start": {
                  "column": 64,
                  "line": 127
                }
              },
              "range": [
                3909,
                3918
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  3911,
                  3918
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 127
                  },
                  "start": {
                    "column": 66,
                    "line": 127
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 127
                },
                "start": {
                  "column": 26,
                  "line": 127
                }
              },
              "range": [
                3871,
                3892
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
                        3888,
                        3891
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
                              3889,
                              3890
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 127
                              },
                              "start": {
                                "column": 44,
                                "line": 127
                              }
                            }
                          },
                          "range": [
                            3889,
                            3890
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 127
                            },
                            "start": {
                              "column": 44,
                              "line": 127
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 127
                        },
                        "start": {
                          "column": 43,
                          "line": 127
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "range": [
                        3882,
                        3888
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 127
                        },
                        "start": {
                          "column": 37,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      3882,
                      3891
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 127
                      },
                      "start": {
                        "column": 37,
                        "line": 127
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
                      3872,
                      3873
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 127
                      },
                      "start": {
                        "column": 27,
                        "line": 127
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3872,
                    3891
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 127
                    },
                    "start": {
                      "column": 27,
                      "line": 127
                    }
                  }
                }
              ]
            },
            "range": [
              3849,
              4074
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 127
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
                        "name": "len",
                        "optional": false,
                        "range": [
                          4161,
                          4164
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 136
                          },
                          "start": {
                            "column": 12,
                            "line": 136
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            4167,
                            4168
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 136
                            },
                            "start": {
                              "column": 18,
                              "line": 136
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            4169,
                            4175
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 136
                            },
                            "start": {
                              "column": 20,
                              "line": 136
                            }
                          }
                        },
                        "range": [
                          4167,
                          4175
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 136
                          },
                          "start": {
                            "column": 18,
                            "line": 136
                          }
                        }
                      },
                      "range": [
                        4161,
                        4175
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 136
                        },
                        "start": {
                          "column": 12,
                          "line": 136
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4157,
                    4176
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 136
                    },
                    "start": {
                      "column": 8,
                      "line": 136
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        4214,
                        4219
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 137
                        },
                        "start": {
                          "column": 37,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      4207,
                      4220
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 137
                      },
                      "start": {
                        "column": 30,
                        "line": 137
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          4189,
                          4190
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 137
                          },
                          "start": {
                            "column": 12,
                            "line": 137
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          4191,
                          4197
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 137
                          },
                          "start": {
                            "column": 14,
                            "line": 137
                          }
                        }
                      },
                      "range": [
                        4189,
                        4197
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 137
                        },
                        "start": {
                          "column": 12,
                          "line": 137
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "range": [
                        4202,
                        4205
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 137
                        },
                        "start": {
                          "column": 25,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      4189,
                      4205
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 137
                      },
                      "start": {
                        "column": 12,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    4185,
                    4220
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              4304,
                              4309
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
                                "line": 139
                              },
                              "start": {
                                "column": 43,
                                "line": 139
                              }
                            }
                          },
                          "range": [
                            4297,
                            4310
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 139
                            },
                            "start": {
                              "column": 36,
                              "line": 139
                            }
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "range": [
                                    4290,
                                    4291
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 139
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    4292,
                                    4293
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 139
                                    }
                                  }
                                },
                                "range": [
                                  4290,
                                  4294
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 139
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    4278,
                                    4279
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 139
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    4280,
                                    4281
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 139
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 139
                                    }
                                  }
                                },
                                "range": [
                                  4278,
                                  4282
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 139
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "equals",
                                "optional": false,
                                "range": [
                                  4283,
                                  4289
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 139
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 139
                                  }
                                }
                              },
                              "range": [
                                4278,
                                4289
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 139
                                },
                                "start": {
                                  "column": 17,
                                  "line": 139
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              4278,
                              4295
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 139
                              },
                              "start": {
                                "column": 17,
                                "line": 139
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            4277,
                            4295
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 139
                            },
                            "start": {
                              "column": 16,
                              "line": 139
                            }
                          }
                        },
                        "range": [
                          4273,
                          4310
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 139
                          },
                          "start": {
                            "column": 12,
                            "line": 139
                          }
                        }
                      }
                    ],
                    "range": [
                      4259,
                      4320
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 140
                      },
                      "start": {
                        "column": 38,
                        "line": 138
                      }
                    }
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            4238,
                            4239
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 138
                            },
                            "start": {
                              "column": 17,
                              "line": 138
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            4242,
                            4243
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 138
                            },
                            "start": {
                              "column": 21,
                              "line": 138
                            }
                          }
                        },
                        "range": [
                          4238,
                          4243
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 138
                          },
                          "start": {
                            "column": 17,
                            "line": 138
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      4234,
                      4243
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 138
                      },
                      "start": {
                        "column": 13,
                        "line": 138
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        4245,
                        4246
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 138
                        },
                        "start": {
                          "column": 24,
                          "line": 138
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "range": [
                        4249,
                        4252
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 138
                        },
                        "start": {
                          "column": 28,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      4245,
                      4252
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 138
                      },
                      "start": {
                        "column": 24,
                        "line": 138
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        4254,
                        4255
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 138
                        },
                        "start": {
                          "column": 33,
                          "line": 138
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      4254,
                      4257
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 138
                      },
                      "start": {
                        "column": 33,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    4229,
                    4320
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 140
                    },
                    "start": {
                      "column": 8,
                      "line": 138
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      4336,
                      4340
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 141
                      },
                      "start": {
                        "column": 15,
                        "line": 141
                      }
                    }
                  },
                  "range": [
                    4329,
                    4341
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 141
                    },
                    "start": {
                      "column": 8,
                      "line": 141
                    }
                  }
                }
              ],
              "range": [
                4147,
                4347
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 142
                },
                "start": {
                  "column": 71,
                  "line": 135
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrayEquals",
              "optional": false,
              "range": [
                4089,
                4100
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 135
                },
                "start": {
                  "column": 13,
                  "line": 135
                }
              }
            },
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
                      "column": 52,
                      "line": 135
                    },
                    "start": {
                      "column": 47,
                      "line": 135
                    }
                  },
                  "range": [
                    4123,
                    4128
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4125,
                          4126
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 135
                          },
                          "start": {
                            "column": 49,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        4125,
                        4126
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 135
                        },
                        "start": {
                          "column": 49,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      4125,
                      4128
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 135
                      },
                      "start": {
                        "column": 49,
                        "line": 135
                      }
                    }
                  }
                },
                "range": [
                  4122,
                  4128
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 135
                  },
                  "start": {
                    "column": 46,
                    "line": 135
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
                      "column": 60,
                      "line": 135
                    },
                    "start": {
                      "column": 55,
                      "line": 135
                    }
                  },
                  "range": [
                    4131,
                    4136
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4133,
                          4134
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 135
                          },
                          "start": {
                            "column": 57,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        4133,
                        4134
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 135
                        },
                        "start": {
                          "column": 57,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      4133,
                      4136
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 135
                      },
                      "start": {
                        "column": 57,
                        "line": 135
                      }
                    }
                  }
                },
                "range": [
                  4130,
                  4136
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 135
                  },
                  "start": {
                    "column": 54,
                    "line": 135
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 70,
                  "line": 135
                },
                "start": {
                  "column": 61,
                  "line": 135
                }
              },
              "range": [
                4137,
                4146
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  4139,
                  4146
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 135
                  },
                  "start": {
                    "column": 63,
                    "line": 135
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 135
                },
                "start": {
                  "column": 24,
                  "line": 135
                }
              },
              "range": [
                4100,
                4121
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
                        4117,
                        4120
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
                              4118,
                              4119
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 135
                              },
                              "start": {
                                "column": 42,
                                "line": 135
                              }
                            }
                          },
                          "range": [
                            4118,
                            4119
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 135
                            },
                            "start": {
                              "column": 42,
                              "line": 135
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 135
                        },
                        "start": {
                          "column": 41,
                          "line": 135
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "range": [
                        4111,
                        4117
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 135
                        },
                        "start": {
                          "column": 35,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      4111,
                      4120
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 135
                      },
                      "start": {
                        "column": 35,
                        "line": 135
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
                      4101,
                      4102
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 135
                      },
                      "start": {
                        "column": 25,
                        "line": 135
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4101,
                    4120
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 135
                    },
                    "start": {
                      "column": 25,
                      "line": 135
                    }
                  }
                }
              ]
            },
            "range": [
              4080,
              4347
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 135
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
                        "name": "len",
                        "optional": false,
                        "range": [
                          4432,
                          4435
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 145
                          },
                          "start": {
                            "column": 12,
                            "line": 145
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            4438,
                            4439
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 145
                            },
                            "start": {
                              "column": 18,
                              "line": 145
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            4440,
                            4446
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 145
                            },
                            "start": {
                              "column": 20,
                              "line": 145
                            }
                          }
                        },
                        "range": [
                          4438,
                          4446
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 145
                          },
                          "start": {
                            "column": 18,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        4432,
                        4446
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 145
                        },
                        "start": {
                          "column": 12,
                          "line": 145
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4428,
                    4447
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        4485,
                        4490
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 146
                        },
                        "start": {
                          "column": 37,
                          "line": 146
                        }
                      }
                    },
                    "range": [
                      4478,
                      4491
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 146
                      },
                      "start": {
                        "column": 30,
                        "line": 146
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          4460,
                          4461
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 146
                          },
                          "start": {
                            "column": 12,
                            "line": 146
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          4462,
                          4468
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 146
                          },
                          "start": {
                            "column": 14,
                            "line": 146
                          }
                        }
                      },
                      "range": [
                        4460,
                        4468
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 146
                        },
                        "start": {
                          "column": 12,
                          "line": 146
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "range": [
                        4473,
                        4476
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 146
                        },
                        "start": {
                          "column": 25,
                          "line": 146
                        }
                      }
                    },
                    "range": [
                      4460,
                      4476
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 146
                      },
                      "start": {
                        "column": 12,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    4456,
                    4491
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "alternate": null,
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "false",
                            "value": false,
                            "range": [
                              4580,
                              4585
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 148
                              },
                              "start": {
                                "column": 48,
                                "line": 148
                              }
                            }
                          },
                          "range": [
                            4573,
                            4586
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 148
                            },
                            "start": {
                              "column": 41,
                              "line": 148
                            }
                          }
                        },
                        "test": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  4563,
                                  4564
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 148
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 148
                                  }
                                }
                              },
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    4566,
                                    4567
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 148
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 148
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    4568,
                                    4569
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 148
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 148
                                    }
                                  }
                                },
                                "range": [
                                  4566,
                                  4570
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 148
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 148
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arrayContains",
                              "optional": false,
                              "range": [
                                4549,
                                4562
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 148
                                },
                                "start": {
                                  "column": 17,
                                  "line": 148
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              4549,
                              4571
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 148
                              },
                              "start": {
                                "column": 17,
                                "line": 148
                              }
                            }
                          },
                          "operator": "!",
                          "prefix": true,
                          "range": [
                            4548,
                            4571
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 148
                            },
                            "start": {
                              "column": 16,
                              "line": 148
                            }
                          }
                        },
                        "range": [
                          4544,
                          4586
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 148
                          },
                          "start": {
                            "column": 12,
                            "line": 148
                          }
                        }
                      }
                    ],
                    "range": [
                      4530,
                      4596
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 149
                      },
                      "start": {
                        "column": 38,
                        "line": 147
                      }
                    }
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            4509,
                            4510
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 147
                            },
                            "start": {
                              "column": 17,
                              "line": 147
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            4513,
                            4514
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 147
                            },
                            "start": {
                              "column": 21,
                              "line": 147
                            }
                          }
                        },
                        "range": [
                          4509,
                          4514
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 147
                          },
                          "start": {
                            "column": 17,
                            "line": 147
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      4505,
                      4514
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 147
                      },
                      "start": {
                        "column": 13,
                        "line": 147
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        4516,
                        4517
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 147
                        },
                        "start": {
                          "column": 24,
                          "line": 147
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "len",
                      "optional": false,
                      "range": [
                        4520,
                        4523
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 147
                        },
                        "start": {
                          "column": 28,
                          "line": 147
                        }
                      }
                    },
                    "range": [
                      4516,
                      4523
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 147
                      },
                      "start": {
                        "column": 24,
                        "line": 147
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        4525,
                        4526
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 147
                        },
                        "start": {
                          "column": 33,
                          "line": 147
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      4525,
                      4528
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 147
                      },
                      "start": {
                        "column": 33,
                        "line": 147
                      }
                    }
                  },
                  "range": [
                    4500,
                    4596
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 149
                    },
                    "start": {
                      "column": 8,
                      "line": 147
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      4612,
                      4616
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 150
                      },
                      "start": {
                        "column": 15,
                        "line": 150
                      }
                    }
                  },
                  "range": [
                    4605,
                    4617
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                }
              ],
              "range": [
                4418,
                4623
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 151
                },
                "start": {
                  "column": 69,
                  "line": 144
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "setEquals",
              "optional": false,
              "range": [
                4362,
                4371
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 144
                },
                "start": {
                  "column": 13,
                  "line": 144
                }
              }
            },
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
                      "column": 50,
                      "line": 144
                    },
                    "start": {
                      "column": 45,
                      "line": 144
                    }
                  },
                  "range": [
                    4394,
                    4399
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4396,
                          4397
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 144
                          },
                          "start": {
                            "column": 47,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        4396,
                        4397
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 144
                        },
                        "start": {
                          "column": 47,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      4396,
                      4399
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 144
                      },
                      "start": {
                        "column": 47,
                        "line": 144
                      }
                    }
                  }
                },
                "range": [
                  4393,
                  4399
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 144
                  },
                  "start": {
                    "column": 44,
                    "line": 144
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
                      "column": 58,
                      "line": 144
                    },
                    "start": {
                      "column": 53,
                      "line": 144
                    }
                  },
                  "range": [
                    4402,
                    4407
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          4404,
                          4405
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 144
                          },
                          "start": {
                            "column": 55,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        4404,
                        4405
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 144
                        },
                        "start": {
                          "column": 55,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      4404,
                      4407
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 144
                      },
                      "start": {
                        "column": 55,
                        "line": 144
                      }
                    }
                  }
                },
                "range": [
                  4401,
                  4407
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 144
                  },
                  "start": {
                    "column": 52,
                    "line": 144
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 144
                },
                "start": {
                  "column": 59,
                  "line": 144
                }
              },
              "range": [
                4408,
                4417
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  4410,
                  4417
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 144
                  },
                  "start": {
                    "column": 61,
                    "line": 144
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 144
                },
                "start": {
                  "column": 22,
                  "line": 144
                }
              },
              "range": [
                4371,
                4392
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
                        4388,
                        4391
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
                              4389,
                              4390
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 144
                              },
                              "start": {
                                "column": 40,
                                "line": 144
                              }
                            }
                          },
                          "range": [
                            4389,
                            4390
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 144
                            },
                            "start": {
                              "column": 40,
                              "line": 144
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 144
                        },
                        "start": {
                          "column": 39,
                          "line": 144
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Equals",
                      "optional": false,
                      "range": [
                        4382,
                        4388
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 144
                        },
                        "start": {
                          "column": 33,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      4382,
                      4391
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 144
                      },
                      "start": {
                        "column": 33,
                        "line": 144
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
                      4372,
                      4373
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 144
                      },
                      "start": {
                        "column": 23,
                        "line": 144
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    4372,
                    4391
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 144
                    },
                    "start": {
                      "column": 23,
                      "line": 144
                    }
                  }
                }
              ]
            },
            "range": [
              4353,
              4623
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          }
        ],
        "range": [
          10,
          4625
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 152
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          9
        ],
        "decorators": [],
        "name": "ts",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        4625
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 152
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 153
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
