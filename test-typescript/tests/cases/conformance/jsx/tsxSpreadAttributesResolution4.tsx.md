__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    653
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          57,
          85
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
                63,
                64
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                64,
                72
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  66,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              73
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
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
              "name": "y",
              "optional": false,
              "range": [
                78,
                79
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                79,
                82
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    81,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  81,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              78,
              83
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "column": 23,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PoisonedProp",
        "optional": false,
        "range": [
          44,
          56
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        85
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          144,
          201
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
                150,
                156
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                156,
                199
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [
                        {
                          "type": "JSXText",
                          "range": [
                            181,
                            186
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            188,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 10
                            },
                            "start": {
                              "column": 27,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          186,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            177,
                            180
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
                        "selfClosing": false,
                        "range": [
                          176,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        176,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      169,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  159,
                  199
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 9
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
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              }
            },
            "range": [
              150,
              199
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
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
            "line": 12
          },
          "start": {
            "column": 57,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "range": [
          93,
          101
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
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
            110,
            115
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 23,
              "line": 8
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
            116,
            125
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 8
            },
            "start": {
              "column": 29,
              "line": 8
            }
          }
        },
        "range": [
          110,
          125
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 8
          },
          "start": {
            "column": 23,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          125,
          143
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PoisonedProp",
              "optional": false,
              "range": [
                126,
                138
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 39,
                  "line": 8
                }
              }
            },
            "range": [
              126,
              138
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 39,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              140,
              142
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 8
              },
              "start": {
                "column": 53,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 8
          },
          "start": {
            "column": 38,
            "line": 8
          }
        }
      },
      "range": [
        87,
        201
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                212,
                226
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PoisonedProp",
                  "optional": false,
                  "range": [
                    214,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  214,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              209,
              226
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    235,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello world\"",
                  "value": "hello world",
                  "range": [
                    238,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  235,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    257,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    260,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  257,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              }
            ],
            "range": [
              229,
              263
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 26,
                "line": 14
              }
            }
          },
          "range": [
            209,
            263
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        203,
        264
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "p",
            "optional": false,
            "range": [
              276,
              277
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
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
                280,
                301
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      294,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    290,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 18,
                      "line": 20
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  281,
                  289
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 20
                  },
                  "start": {
                    "column": 9,
                    "line": 20
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              }
            },
            "range": [
              280,
              301
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            276,
            301
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        272,
        302
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          352,
          414
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
                358,
                364
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
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
                364,
                412
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [
                        {
                          "type": "JSXText",
                          "range": [
                            389,
                            399
                          ],
                          "raw": "Default hi",
                          "value": "Default hi",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 24
                            },
                            "start": {
                              "column": 20,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            401,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 24
                            },
                            "start": {
                              "column": 32,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          399,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 24
                          },
                          "start": {
                            "column": 30,
                            "line": 24
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            385,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          384,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 15,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        384,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      377,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  367,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 13,
                    "line": 23
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
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 23
                }
              }
            },
            "range": [
              358,
              412
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 48,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyProp",
        "optional": false,
        "range": [
          310,
          319
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
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
            328,
            333
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 22
            },
            "start": {
              "column": 24,
              "line": 22
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
            334,
            343
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 22
            },
            "start": {
              "column": 30,
              "line": 22
            }
          }
        },
        "range": [
          328,
          343
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 22
          },
          "start": {
            "column": 24,
            "line": 22
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          343,
          351
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              344,
              346
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 22
              },
              "start": {
                "column": 40,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              348,
              350
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 22
              },
              "start": {
                "column": 44,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 22
          },
          "start": {
            "column": 39,
            "line": 22
          }
        }
      },
      "range": [
        304,
        414
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              },
              "range": [
                427,
                432
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  429,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 29
                  },
                  "start": {
                    "column": 7,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              426,
              432
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": null,
          "range": [
            426,
            432
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        422,
        433
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "e1",
            "optional": false,
            "range": [
              438,
              440
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                443,
                464
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 24,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    454,
                    461
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 30
                    },
                    "start": {
                      "column": 20,
                      "line": 30
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "range": [
                  444,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 30,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "range": [
              443,
              464
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            438,
            464
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        434,
        465
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "e2",
            "optional": false,
            "range": [
              470,
              472
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
                475,
                495
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "range": [
                      490,
                      491
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 31
                      },
                      "start": {
                        "column": 24,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    486,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 31
                    },
                    "start": {
                      "column": 20,
                      "line": 31
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "range": [
                  476,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              475,
              495
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            470,
            495
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        466,
        495
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "e3",
            "optional": false,
            "range": [
              500,
              502
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                505,
                571
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "range": [
                            522,
                            525
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 32
                            },
                            "start": {
                              "column": 26,
                              "line": 32
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        540,
                                        544
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "textInput",
                                      "optional": false,
                                      "range": [
                                        545,
                                        554
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 58,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "range": [
                                      540,
                                      554
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 58,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "input",
                                    "optional": false,
                                    "range": [
                                      557,
                                      562
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "range": [
                                    540,
                                    562
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  540,
                                  563
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 32
                                  }
                                }
                              }
                            ],
                            "range": [
                              538,
                              565
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 32
                              },
                              "start": {
                                "column": 42,
                                "line": 32
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "range": [
                                528,
                                533
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 32
                                },
                                "start": {
                                  "column": 32,
                                  "line": 32
                                }
                              }
                            }
                          ],
                          "range": [
                            527,
                            565
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 32
                            },
                            "start": {
                              "column": 31,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          522,
                          565
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 32
                          },
                          "start": {
                            "column": 26,
                            "line": 32
                          }
                        }
                      }
                    ],
                    "range": [
                      520,
                      567
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 32
                      },
                      "start": {
                        "column": 24,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    516,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 32
                    },
                    "start": {
                      "column": 20,
                      "line": 32
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "range": [
                  506,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 75,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "range": [
              505,
              571
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "range": [
            500,
            571
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        496,
        571
      ],
      "loc": {
        "end": {
          "column": 75,
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
            "name": "e4",
            "optional": false,
            "range": [
              576,
              578
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                581,
                604
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "range": [
                      592,
                      601
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 33
                      },
                      "start": {
                        "column": 20,
                        "line": 33
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    592,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 33
                    },
                    "start": {
                      "column": 20,
                      "line": 33
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "range": [
                  582,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 32,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "range": [
              581,
              604
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          },
          "range": [
            576,
            604
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        572,
        604
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "e5",
            "optional": false,
            "range": [
              609,
              611
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
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
                614,
                653
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Literal",
                          "raw": "\"data-prop\"",
                          "value": "data-prop",
                          "range": [
                            631,
                            642
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 34
                            },
                            "start": {
                              "column": 26,
                              "line": 34
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
                            644,
                            648
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 34
                            },
                            "start": {
                              "column": 39,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          631,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 34
                          },
                          "start": {
                            "column": 26,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      629,
                      649
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 34
                      },
                      "start": {
                        "column": 24,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    625,
                    650
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 34
                    },
                    "start": {
                      "column": 20,
                      "line": 34
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptyProp",
                "range": [
                  615,
                  624
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 48,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              614,
              653
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 34
              },
              "start": {
                "column": 9,
                "line": 34
              }
            }
          },
          "range": [
            609,
            653
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        605,
        653
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 48,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
