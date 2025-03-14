__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    391
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
          55,
          84
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
                61,
                62
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                63,
                66
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    65,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  65,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              61,
              66
            ],
            "loc": {
              "end": {
                "column": 9,
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
                71,
                72
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
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              },
              "range": [
                73,
                82
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  75,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              71,
              82
            ],
            "loc": {
              "end": {
                "column": 15,
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
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OptionProp",
        "optional": false,
        "range": [
          44,
          54
        ],
        "loc": {
          "end": {
            "column": 20,
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
        84
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
          136,
          193
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
                142,
                148
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
                148,
                191
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
                            173,
                            178
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
                            180,
                            183
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
                          178,
                          184
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
                            169,
                            172
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
                          168,
                          173
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
                        168,
                        184
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
                      161,
                      185
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
                  151,
                  191
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
              142,
              191
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
            "column": 50,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "range": [
          92,
          95
        ],
        "loc": {
          "end": {
            "column": 9,
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
            104,
            109
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 8
            },
            "start": {
              "column": 18,
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
            110,
            119
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 8
            },
            "start": {
              "column": 24,
              "line": 8
            }
          }
        },
        "range": [
          104,
          119
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 8
          },
          "start": {
            "column": 18,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          119,
          135
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionProp",
              "optional": false,
              "range": [
                120,
                130
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 34,
                  "line": 8
                }
              }
            },
            "range": [
              120,
              130
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 34,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              132,
              134
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 46,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 8
          },
          "start": {
            "column": 33,
            "line": 8
          }
        }
      },
      "range": [
        86,
        193
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
                  "column": 21,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                204,
                216
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "range": [
                    206,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  206,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 21,
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
              201,
              216
            ],
            "loc": {
              "end": {
                "column": 21,
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
            "properties": [],
            "range": [
              219,
              221
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 24,
                "line": 14
              }
            }
          },
          "range": [
            201,
            221
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 14
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
        195,
        222
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 14
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 15
                }
              },
              "range": [
                233,
                245
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionProp",
                  "optional": false,
                  "range": [
                    235,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 15
                    }
                  }
                },
                "range": [
                  235,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              229,
              245
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
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
                    254,
                    255
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
                    257,
                    258
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
                  254,
                  258
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
              248,
              260
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 17
              },
              "start": {
                "column": 25,
                "line": 15
              }
            }
          },
          "range": [
            229,
            260
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        223,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
              272,
              273
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
                276,
                283
              ],
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  277,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 12,
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
                  "column": 15,
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
              283
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            272,
            283
          ],
          "loc": {
            "end": {
              "column": 15,
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
        268,
        284
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              289,
              290
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                293,
                309
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
                      302,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 21
                      },
                      "start": {
                        "column": 17,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    298,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 21
                    },
                    "start": {
                      "column": 13,
                      "line": 21
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  294,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              293,
              309
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            289,
            309
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        285,
        310
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "y1",
            "optional": false,
            "range": [
              315,
              317
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                320,
                337
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "range": [
                      329,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    325,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 22
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  321,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 26,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "range": [
              320,
              337
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            315,
            337
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        311,
        338
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 22
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
            "name": "y2",
            "optional": false,
            "range": [
              343,
              345
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                348,
                366
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj1",
                    "optional": false,
                    "range": [
                      357,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    353,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "y",
                    "range": [
                      363,
                      364
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    363,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  349,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 27,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "range": [
              348,
              366
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 9,
                "line": 23
              }
            }
          },
          "range": [
            343,
            366
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
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        339,
        367
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "y3",
            "optional": false,
            "range": [
              372,
              374
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                377,
                390
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      382,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        385,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 24
                        },
                        "start": {
                          "column": 17,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      384,
                      387
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
                  "range": [
                    382,
                    387
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 14,
                      "line": 24
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Opt",
                "range": [
                  378,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 24
                  },
                  "start": {
                    "column": 10,
                    "line": 24
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 22,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              377,
              390
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            372,
            390
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        368,
        391
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 23,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
