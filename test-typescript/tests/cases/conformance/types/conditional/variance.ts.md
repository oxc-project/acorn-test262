__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    92,
    485
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          109,
          154
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                113,
                117
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
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
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                117,
                151
              ],
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      119,
                      120
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    119,
                    120
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "extendsType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    129,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 18,
                      "line": 6
                    }
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      146,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 35,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    146,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      139,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    139,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                },
                "range": [
                  119,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              113,
              152
            ],
            "loc": {
              "end": {
                "column": 41,
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
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          102,
          105
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 13,
            "line": 5
          }
        },
        "range": [
          105,
          108
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
                106,
                107
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
            },
            "out": false,
            "range": [
              106,
              107
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
        ]
      },
      "range": [
        92,
        154
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              162,
              165
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "range": [
                      170,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
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
                      176,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    170,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                168,
                182
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 9
                },
                "start": {
                  "column": 12,
                  "line": 9
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "range": [
                  186,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 9
                  }
                }
              },
              "range": [
                186,
                191
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 9
                },
                "start": {
                  "column": 30,
                  "line": 9
                }
              }
            },
            "range": [
              168,
              191
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "range": [
            162,
            191
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        156,
        192
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 10
                }
              },
              "range": [
                200,
                208
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    205,
                    208
                  ],
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          206,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 10
                          },
                          "start": {
                            "column": 13,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        206,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    202,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "range": [
                  202,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              199,
              208
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              211,
              214
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 10
              },
              "start": {
                "column": 18,
                "line": 10
              }
            }
          },
          "range": [
            199,
            214
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        193,
        215
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 10
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              },
              "range": [
                223,
                236
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    228,
                    236
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        229,
                        235
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    225,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  225,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              222,
              236
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              239,
              242
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            }
          },
          "range": [
            222,
            242
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        216,
        243
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                251,
                264
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    256,
                    264
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        257,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    253,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  253,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              250,
              264
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              267,
              268
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 23,
                "line": 12
              }
            }
          },
          "range": [
            250,
            268
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        244,
        269
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          322,
          484
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
              "name": "instance",
              "optional": false,
              "range": [
                341,
                349
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 25,
                  "line": 18
                }
              },
              "range": [
                349,
                364
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      354,
                      362
                    ],
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          355,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 18
                          },
                          "start": {
                            "column": 31,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 18
                      },
                      "start": {
                        "column": 30,
                        "line": 18
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "range": [
                      351,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 27,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    351,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 18
                    },
                    "start": {
                      "column": 27,
                      "line": 18
                    }
                  }
                },
                "range": [
                  351,
                  364
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 27,
                    "line": 18
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                367,
                369
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 18
                },
                "start": {
                  "column": 43,
                  "line": 18
                }
              }
            },
            "range": [
              326,
              370
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
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
              "name": "cast",
              "optional": false,
              "range": [
                374,
                378
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
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
                378,
                431
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  428,
                  431
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 20
                  },
                  "start": {
                    "column": 56,
                    "line": 20
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
                  "name": "_name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    },
                    "range": [
                      384,
                      426
                    ],
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                388,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 20
                                },
                                "start": {
                                  "column": 16,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              388,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 20
                              },
                              "start": {
                                "column": 16,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          387,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 20
                          },
                          "start": {
                            "column": 15,
                            "line": 20
                          }
                        }
                      },
                      "extendsType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              400,
                              406
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 20
                              },
                              "start": {
                                "column": 28,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          399,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 20
                          },
                          "start": {
                            "column": 27,
                            "line": 20
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSStringKeyword",
                        "range": [
                          419,
                          425
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 20
                          },
                          "start": {
                            "column": 47,
                            "line": 20
                          }
                        }
                      },
                      "trueType": {
                        "type": "TSStringKeyword",
                        "range": [
                          410,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 20
                          },
                          "start": {
                            "column": 38,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        387,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 20
                        },
                        "start": {
                          "column": 15,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    379,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 20
                    },
                    "start": {
                      "column": 7,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              }
            },
            "range": [
              374,
              431
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
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
              "name": "pushThis",
              "optional": false,
              "range": [
                437,
                445
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
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
                445,
                482
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
                          "type": "ThisExpression",
                          "range": [
                            472,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 23
                            },
                            "start": {
                              "column": 22,
                              "line": 23
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
                            "name": "Bar",
                            "optional": false,
                            "range": [
                              454,
                              457
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 23
                              },
                              "start": {
                                "column": 4,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "instance",
                            "optional": false,
                            "range": [
                              458,
                              466
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 23
                              },
                              "start": {
                                "column": 8,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            454,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 23
                            },
                            "start": {
                              "column": 4,
                              "line": 23
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "range": [
                            467,
                            471
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 23
                            },
                            "start": {
                              "column": 17,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          454,
                          471
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 4,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        454,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 4,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      454,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  448,
                  482
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 22
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
                  "column": 3,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "range": [
              437,
              482
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 28,
            "line": 17
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
          300,
          303
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        },
        "range": [
          303,
          321
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                314,
                320
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
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
                304,
                305
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              304,
              320
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 17
              },
              "start": {
                "column": 10,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        294,
        484
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
