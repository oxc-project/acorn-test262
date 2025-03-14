__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    242
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              },
              "range": [
                94,
                117
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "keyof",
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
                        102,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactHTML",
                      "optional": false,
                      "range": [
                        108,
                        117
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      102,
                      117
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    102,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  96,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              91,
              117
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          "init": null,
          "range": [
            91,
            117
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        77,
        118
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "classes",
            "optional": false,
            "range": [
              126,
              133
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              136,
              138
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            126,
            138
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        120,
        139
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "rest",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                150,
                154
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  152,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              146,
              154
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              157,
              159
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            }
          },
          "range": [
            146,
            159
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        140,
        160
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "children",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              },
              "range": [
                175,
                182
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    177,
                    180
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "range": [
                  177,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 16,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              167,
              182
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              185,
              187
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          },
          "range": [
            167,
            187
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        161,
        188
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "children": [
          {
            "type": "JSXText",
            "range": [
              224,
              225
            ],
            "raw": "\n",
            "value": "\n",
            "loc": {
              "end": {
                "column": 0,
                "line": 10
              },
              "start": {
                "column": 35,
                "line": 9
              }
            }
          },
          {
            "type": "JSXExpressionContainer",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                226,
                234
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 1,
                  "line": 10
                }
              }
            },
            "range": [
              225,
              235
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          {
            "type": "JSXText",
            "range": [
              235,
              236
            ],
            "raw": "\n",
            "value": "\n",
            "loc": {
              "end": {
                "column": 0,
                "line": 11
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Tag",
            "range": [
              238,
              241
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          "range": [
            236,
            242
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "openingElement": {
          "type": "JSXOpeningElement",
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "className",
                "range": [
                  194,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "classes",
                  "optional": false,
                  "range": [
                    205,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
                    }
                  }
                },
                "range": [
                  204,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              "range": [
                194,
                213
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              }
            },
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "range": [
                  218,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 29,
                    "line": 9
                  }
                }
              },
              "range": [
                214,
                223
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 25,
                  "line": 9
                }
              }
            }
          ],
          "name": {
            "type": "JSXIdentifier",
            "name": "Tag",
            "range": [
              190,
              193
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          "selfClosing": false,
          "range": [
            189,
            224
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "range": [
          189,
          242
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        189,
        242
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 6,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
