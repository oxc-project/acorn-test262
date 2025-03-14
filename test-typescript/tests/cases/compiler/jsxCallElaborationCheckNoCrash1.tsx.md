__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    251
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
        76
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
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tags",
        "optional": false,
        "range": [
          83,
          87
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"span\"",
              "value": "span",
              "range": [
                90,
                96
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
            "range": [
              90,
              96
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
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"div\"",
              "value": "div",
              "range": [
                99,
                104
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              99,
              104
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 21,
                "line": 5
              }
            }
          }
        ],
        "range": [
          90,
          104
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "range": [
        78,
        105
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 5
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
        107,
        250
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
              "name": "Hoc",
              "optional": false,
              "range": [
                120,
                123
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
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
                          "name": "Component",
                          "optional": false,
                          "range": [
                            193,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 9,
                              "line": 10
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "JSXElement",
                            "children": [],
                            "closingElement": null,
                            "openingElement": {
                              "type": "JSXOpeningElement",
                              "range": [
                                211,
                                225
                              ],
                              "attributes": [],
                              "name": {
                                "type": "JSXIdentifier",
                                "name": "TagElement",
                                "range": [
                                  212,
                                  222
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 10
                                  }
                                }
                              },
                              "selfClosing": true,
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 10
                                },
                                "start": {
                                  "column": 27,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              211,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 10
                              },
                              "start": {
                                "column": 27,
                                "line": 10
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            205,
                            225
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 10
                            },
                            "start": {
                              "column": 21,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          193,
                          225
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 10
                          },
                          "start": {
                            "column": 9,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      187,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 10
                      },
                      "start": {
                        "column": 3,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "range": [
                        237,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 10,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      230,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 3,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  182,
                  249
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 9
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
                  "name": "TagElement",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    },
                    "range": [
                      159,
                      164
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "range": [
                          161,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        161,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    149,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 3,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 9
                  },
                  "start": {
                    "column": 1,
                    "line": 9
                  }
                },
                "range": [
                  167,
                  178
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "range": [
                        169,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 9
                        },
                        "start": {
                          "column": 3,
                          "line": 9
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SFC",
                      "optional": false,
                      "range": [
                        175,
                        178
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 9,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      169,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 9
                      },
                      "start": {
                        "column": 3,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    169,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 3,
                      "line": 9
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                },
                "range": [
                  126,
                  144
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tags",
                        "optional": false,
                        "range": [
                          139,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 7
                          },
                          "start": {
                            "column": 32,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        139,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tag",
                      "optional": false,
                      "range": [
                        127,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      127,
                      143
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 20,
                        "line": 7
                      }
                    }
                  }
                ]
              },
              "range": [
                126,
                249
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 12
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "range": [
              120,
              249
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 12
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          114,
          250
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 12
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
