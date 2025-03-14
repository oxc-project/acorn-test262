__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    29
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"classnames\"",
        "value": "classnames",
        "range": [
          15,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
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
        28
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 1
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
      "line": 2
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
    41,
    235
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'classnames'",
        "value": "classnames",
        "range": [
          61,
          73
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 20,
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
            "name": "cx",
            "optional": false,
            "range": [
              53,
              55
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            48,
            55
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
        }
      ],
      "range": [
        41,
        74
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"react\"",
        "value": "react",
        "range": [
          98,
          105
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
              87,
              92
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
            82,
            92
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
        75,
        106
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "buttonProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              },
              "range": [
                124,
                155
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "attributeName",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 5
                            },
                            "start": {
                              "column": 33,
                              "line": 5
                            }
                          },
                          "range": [
                            141,
                            149
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              143,
                              149
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          128,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
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
                          "column": 46,
                          "line": 5
                        },
                        "start": {
                          "column": 42,
                          "line": 5
                        }
                      },
                      "range": [
                        150,
                        154
                      ],
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "raw": "''",
                          "value": "",
                          "range": [
                            152,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 5
                            },
                            "start": {
                              "column": 44,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          152,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 5
                          },
                          "start": {
                            "column": 44,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      127,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 5
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  126,
                  155
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              112,
              155
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            112,
            155
          ],
          "loc": {
            "end": {
              "column": 47,
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
        108,
        155
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 5
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
            "name": "k",
            "optional": false,
            "range": [
              160,
              161
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
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
                164,
                234
              ],
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "buttonProps",
                    "optional": false,
                    "range": [
                      176,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 20,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    172,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "range": [
                      189,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 6
                      },
                      "start": {
                        "column": 33,
                        "line": 6
                      }
                    }
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "'class1'",
                          "value": "class1",
                          "range": [
                            203,
                            211
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 6
                            },
                            "start": {
                              "column": 47,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "class2",
                                "optional": false,
                                "range": [
                                  215,
                                  221
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 59,
                                    "line": 6
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
                                  223,
                                  227
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 67,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                215,
                                227
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 6
                                },
                                "start": {
                                  "column": 59,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            213,
                            229
                          ],
                          "loc": {
                            "end": {
                              "column": 73,
                              "line": 6
                            },
                            "start": {
                              "column": 57,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cx",
                        "optional": false,
                        "range": [
                          200,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 6
                          },
                          "start": {
                            "column": 44,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        200,
                        230
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      199,
                      231
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 6
                      },
                      "start": {
                        "column": 43,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    189,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 6
                    },
                    "start": {
                      "column": 33,
                      "line": 6
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "button",
                "range": [
                  165,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 9,
                    "line": 6
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 78,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              164,
              234
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 6
              },
              "start": {
                "column": 8,
                "line": 6
              }
            }
          },
          "range": [
            160,
            234
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        156,
        235
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 79,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
