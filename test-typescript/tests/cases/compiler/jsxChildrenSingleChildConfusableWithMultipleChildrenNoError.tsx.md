__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    457
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'react'",
        "value": "react",
        "range": [
          68,
          75
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
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
              57,
              62
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            52,
            62
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        }
      ],
      "range": [
        45,
        75
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tab",
        "optional": false,
        "range": [
          82,
          85
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              89,
              95
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "range": [
                  97,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReactNode",
                "optional": false,
                "range": [
                  103,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "range": [
                97,
                112
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              112
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          }
        ],
        "range": [
          88,
          113
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        77,
        113
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          157,
          180
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                163,
                171
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                171,
                178
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tab",
                    "optional": false,
                    "range": [
                      173,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 14,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    173,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  }
                },
                "range": [
                  173,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              163,
              178
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 16,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          151,
          156
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        141,
        180
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
              "type": "JSXElement",
              "children": [],
              "closingElement": null,
              "openingElement": {
                "type": "JSXOpeningElement",
                "range": [
                  228,
                  234
                ],
                "attributes": [],
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "range": [
                    229,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "selfClosing": true,
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                228,
                234
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              221,
              234
            ],
            "loc": {
              "end": {
                "column": 17,
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
          215,
          236
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 33,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabLayout",
        "optional": false,
        "range": [
          191,
          200
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 11
              },
              "start": {
                "column": 24,
                "line": 11
              }
            },
            "range": [
              206,
              213
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "range": [
                  208,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 11
                  },
                  "start": {
                    "column": 26,
                    "line": 11
                  }
                }
              },
              "range": [
                208,
                213
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              }
            }
          },
          "range": [
            201,
            213
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 11
            },
            "start": {
              "column": 19,
              "line": 11
            }
          }
        }
      ],
      "range": [
        182,
        236
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        238,
        457
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            283,
            457
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
                  289,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
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
                  295,
                  455
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
                              326,
                              339
                            ],
                            "raw": "\n            ",
                            "value": "\n            ",
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 18
                              },
                              "start": {
                                "column": 26,
                                "line": 17
                              }
                            }
                          },
                          {
                            "type": "JSXExpressionContainer",
                            "expression": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "raw": "'Users'",
                                      "value": "Users",
                                      "range": [
                                        359,
                                        366
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 19
                                        }
                                      }
                                    },
                                    {
                                      "type": "JSXElement",
                                      "children": [],
                                      "closingElement": null,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "range": [
                                          368,
                                          374
                                        ],
                                        "attributes": [],
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "range": [
                                            369,
                                            372
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 19
                                            }
                                          }
                                        },
                                        "selfClosing": true,
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        368,
                                        374
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 19
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    358,
                                    375
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 19
                                    }
                                  }
                                },
                                {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "raw": "'Products'",
                                      "value": "Products",
                                      "range": [
                                        394,
                                        404
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 20
                                        }
                                      }
                                    },
                                    {
                                      "type": "JSXElement",
                                      "children": [],
                                      "closingElement": null,
                                      "openingElement": {
                                        "type": "JSXOpeningElement",
                                        "range": [
                                          406,
                                          412
                                        ],
                                        "attributes": [],
                                        "name": {
                                          "type": "JSXIdentifier",
                                          "name": "div",
                                          "range": [
                                            407,
                                            410
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 33,
                                              "line": 20
                                            },
                                            "start": {
                                              "column": 30,
                                              "line": 20
                                            }
                                          }
                                        },
                                        "selfClosing": true,
                                        "loc": {
                                          "end": {
                                            "column": 35,
                                            "line": 20
                                          },
                                          "start": {
                                            "column": 29,
                                            "line": 20
                                          }
                                        }
                                      },
                                      "range": [
                                        406,
                                        412
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 20
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    393,
                                    413
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
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
                                340,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 21
                                },
                                "start": {
                                  "column": 13,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              339,
                              428
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 21
                              },
                              "start": {
                                "column": 12,
                                "line": 18
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "range": [
                              428,
                              437
                            ],
                            "raw": "\n        ",
                            "value": "\n        ",
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 22
                              },
                              "start": {
                                "column": 14,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "closingElement": {
                          "type": "JSXClosingElement",
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TabLayout",
                            "range": [
                              439,
                              448
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 22
                              },
                              "start": {
                                "column": 10,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            437,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 22
                            },
                            "start": {
                              "column": 8,
                              "line": 22
                            }
                          }
                        },
                        "openingElement": {
                          "type": "JSXOpeningElement",
                          "attributes": [],
                          "name": {
                            "type": "JSXIdentifier",
                            "name": "TabLayout",
                            "range": [
                              316,
                              325
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
                          "selfClosing": false,
                          "range": [
                            315,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          315,
                          449
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 22
                          },
                          "start": {
                            "column": 15,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        308,
                        449
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    298,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 16
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
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "range": [
                289,
                455
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
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
              "line": 24
            },
            "start": {
              "column": 45,
              "line": 15
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "App",
          "optional": false,
          "range": [
            251,
            254
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 15
            },
            "start": {
              "column": 13,
              "line": 15
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
              263,
              268
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 25,
                "line": 15
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
              269,
              278
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 15
              },
              "start": {
                "column": 31,
                "line": 15
              }
            }
          },
          "range": [
            263,
            278
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "superTypeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            278,
            282
          ],
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                279,
                281
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 15
                },
                "start": {
                  "column": 41,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 15
            },
            "start": {
              "column": 40,
              "line": 15
            }
          }
        },
        "range": [
          245,
          457
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
