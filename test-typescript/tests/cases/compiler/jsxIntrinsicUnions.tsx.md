__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    176
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
            "name": "El",
            "optional": false,
            "range": [
              84,
              86
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "'h2'",
              "value": "h2",
              "range": [
                112,
                116
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "'h1'",
              "value": "h1",
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "range": [
                    89,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "range": [
                    94,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                "range": [
                  89,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "optional": false,
              "range": [
                89,
                102
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              89,
              116
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          "range": [
            84,
            116
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        78,
        117
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "tag",
            "optional": false,
            "range": [
              125,
              128
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "raw": "\"Title\"",
                  "value": "Title",
                  "range": [
                    161,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 42,
                      "line": 7
                    }
                  }
                },
                "range": [
                  160,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 7
                  },
                  "start": {
                    "column": 41,
                    "line": 7
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "range": [
                  171,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 7
                  },
                  "start": {
                    "column": 52,
                    "line": 7
                  }
                }
              },
              "range": [
                169,
                174
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 7
                },
                "start": {
                  "column": 50,
                  "line": 7
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
                      135,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 16,
                        "line": 7
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      145,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    135,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 7
                    },
                    "start": {
                      "column": 16,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "range": [
                      150,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 7
                      },
                      "start": {
                        "column": 31,
                        "line": 7
                      }
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "raw": "\"key\"",
                    "value": "key",
                    "range": [
                      154,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 35,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    150,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 7
                    },
                    "start": {
                      "column": 31,
                      "line": 7
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "range": [
                  132,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 13,
                    "line": 7
                  }
                }
              },
              "selfClosing": false,
              "range": [
                131,
                160
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "range": [
              131,
              174
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          },
          "range": [
            125,
            174
          ],
          "loc": {
            "end": {
              "column": 55,
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
        119,
        175
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 7
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
