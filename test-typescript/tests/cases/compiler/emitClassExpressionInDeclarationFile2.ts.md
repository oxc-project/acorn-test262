__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    601
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        119
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
              "name": "noPrivates",
              "optional": false,
              "range": [
                11,
                21
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  30,
                  119
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getTags",
                      "optional": false,
                      "range": [
                        43,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 2
                        },
                        "start": {
                          "column": 11,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        50,
                        56
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          53,
                          56
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
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 2
                        },
                        "start": {
                          "column": 18,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      36,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
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
                      "name": "tags",
                      "optional": false,
                      "range": [
                        61,
                        65
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
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
                        65,
                        71
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          68,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 3
                          },
                          "start": {
                            "column": 11,
                            "line": 3
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
                          "column": 14,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      61,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
                      }
                    }
                  },
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
                      "name": "ps",
                      "optional": false,
                      "range": [
                        91,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 19,
                          "line": 4
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          97,
                          98
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
                      "operator": "-",
                      "prefix": true,
                      "range": [
                        96,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      76,
                      98
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 4,
                        "line": 4
                      }
                    }
                  },
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
                      "name": "p",
                      "optional": false,
                      "range": [
                        111,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "raw": "12",
                      "value": 12,
                      "range": [
                        115,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      103,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 6
                  },
                  "start": {
                    "column": 30,
                    "line": 1
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "range": [
                24,
                119
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              119
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          7,
          119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
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
          "column": 1,
          "line": 6
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
        174,
        273
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            195,
            273
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  201,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
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
                  204,
                  216
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    213,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
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
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  },
                  "range": [
                    206,
                    212
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      208,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              },
              "range": [
                201,
                216
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                "name": "name",
                "optional": false,
                "range": [
                  221,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "optional": true,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                },
                "range": [
                  226,
                  234
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    228,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 11,
                      "line": 11
                    }
                  }
                }
              },
              "value": null,
              "range": [
                221,
                235
              ],
              "loc": {
                "end": {
                  "column": 18,
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
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "property",
                "optional": false,
                "range": [
                  248,
                  256
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
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "Literal",
                "raw": "\"capitalism\"",
                "value": "capitalism",
                "range": [
                  259,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              "range": [
                240,
                271
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooItem",
          "optional": false,
          "range": [
            187,
            194
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          181,
          273
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        275,
        329
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
            287,
            298
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
            },
            "start": {
              "column": 12,
              "line": 15
            }
          }
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "params": [
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "range": [
                  311,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 15
                  },
                  "start": {
                    "column": 36,
                    "line": 15
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 15
                  },
                  "start": {
                    "column": 40,
                    "line": 15
                  }
                },
                "range": [
                  315,
                  322
                ],
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "range": [
                      317,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 42,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    317,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 15
                    },
                    "start": {
                      "column": 42,
                      "line": 15
                    }
                  }
                }
              },
              "range": [
                308,
                322
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 49,
                "line": 15
              }
            },
            "range": [
              324,
              328
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  327,
                  328
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 15
                  },
                  "start": {
                    "column": 52,
                    "line": 15
                  }
                }
              },
              "range": [
                327,
                328
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 15
                },
                "start": {
                  "column": 52,
                  "line": 15
                }
              }
            }
          },
          "range": [
            304,
            328
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 15
            },
            "start": {
              "column": 29,
              "line": 15
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 26,
              "line": 15
            },
            "start": {
              "column": 23,
              "line": 15
            }
          },
          "range": [
            298,
            301
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
                  299,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 15
                  }
                }
              },
              "out": false,
              "range": [
                299,
                300
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            }
          ]
        },
        "range": [
          282,
          329
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 54,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        330,
        497
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
                    428,
                    495
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getTags",
                        "optional": false,
                        "range": [
                          445,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      "kind": "method",
                      "optional": false,
                      "override": false,
                      "static": true,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          452,
                          464
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            461,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 18
                            },
                            "start": {
                              "column": 31,
                              "line": 18
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
                              "line": 18
                            },
                            "start": {
                              "column": 24,
                              "line": 18
                            }
                          },
                          "range": [
                            454,
                            460
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              456,
                              460
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 18
                              },
                              "start": {
                                "column": 26,
                                "line": 18
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 18
                          },
                          "start": {
                            "column": 22,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        438,
                        464
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
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
                        "name": "tags",
                        "optional": false,
                        "range": [
                          473,
                          477
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
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
                          477,
                          489
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            486,
                            489
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 19
                            },
                            "start": {
                              "column": 21,
                              "line": 19
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
                              "column": 20,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          },
                          "range": [
                            479,
                            485
                          ],
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "range": [
                              481,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        473,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 30,
                      "line": 17
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
                  "name": "Base",
                  "optional": false,
                  "range": [
                    423,
                    427
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 17
                    },
                    "start": {
                      "column": 25,
                      "line": 17
                    }
                  }
                },
                "range": [
                  409,
                  495
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 17
                  }
                }
              },
              "range": [
                402,
                495
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            396,
            497
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 21
            },
            "start": {
              "column": 66,
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
          "name": "WithTags",
          "optional": false,
          "range": [
            346,
            354
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 16
            },
            "start": {
              "column": 16,
              "line": 16
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 16
                },
                "start": {
                  "column": 61,
                  "line": 16
                }
              },
              "range": [
                391,
                394
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    393,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 16
                    },
                    "start": {
                      "column": 63,
                      "line": 16
                    }
                  }
                },
                "range": [
                  393,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 16
                  },
                  "start": {
                    "column": 63,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              387,
              394
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 16
              },
              "start": {
                "column": 57,
                "line": 16
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 56,
              "line": 16
            },
            "start": {
              "column": 24,
              "line": 16
            }
          },
          "range": [
            354,
            386
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
                    376,
                    385
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooItem",
                        "optional": false,
                        "range": [
                          377,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 16
                          },
                          "start": {
                            "column": 47,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        377,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 16
                        },
                        "start": {
                          "column": 47,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 16
                    },
                    "start": {
                      "column": 46,
                      "line": 16
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "range": [
                    365,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 16
                    },
                    "start": {
                      "column": 35,
                      "line": 16
                    }
                  }
                },
                "range": [
                  365,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 16
                  },
                  "start": {
                    "column": 35,
                    "line": 16
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
                  355,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 16
                  },
                  "start": {
                    "column": 25,
                    "line": 16
                  }
                }
              },
              "out": false,
              "range": [
                355,
                385
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 25,
                  "line": 16
                }
              }
            }
          ]
        },
        "range": [
          337,
          497
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        499,
        545
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            543,
            545
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 46,
              "line": 23
            },
            "start": {
              "column": 44,
              "line": 23
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Test",
          "optional": false,
          "range": [
            512,
            516
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 23
            },
            "start": {
              "column": 13,
              "line": 23
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
              "name": "FooItem",
              "optional": false,
              "range": [
                534,
                541
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 23
                },
                "start": {
                  "column": 35,
                  "line": 23
                }
              }
            }
          ],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "WithTags",
            "optional": false,
            "range": [
              525,
              533
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 26,
                "line": 23
              }
            }
          },
          "optional": false,
          "range": [
            525,
            542
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 23
            },
            "start": {
              "column": 26,
              "line": 23
            }
          }
        },
        "range": [
          506,
          545
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "test",
            "optional": false,
            "range": [
              553,
              557
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "range": [
                564,
                568
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "range": [
              560,
              570
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          },
          "range": [
            553,
            570
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        547,
        571
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Test",
            "optional": false,
            "range": [
              573,
              577
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "getTags",
            "optional": false,
            "range": [
              578,
              585
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          },
          "range": [
            573,
            585
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          573,
          587
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        573,
        587
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              588,
              592
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 28
              },
              "start": {
                "column": 0,
                "line": 28
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "tags",
            "optional": false,
            "range": [
              593,
              597
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 28
              },
              "start": {
                "column": 5,
                "line": 28
              }
            }
          },
          "range": [
            588,
            597
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          588,
          599
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        588,
        600
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
