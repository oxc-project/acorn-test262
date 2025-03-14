__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    14
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        13
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
              "name": "x",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": null,
            "range": [
              11,
              12
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 1
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
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
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
          "column": 13,
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
    58,
    277
  ],
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
            "name": "EntityPrototype",
            "optional": false,
            "range": [
              62,
              77
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "range": [
              80,
              89
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          "range": [
            62,
            89
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        58,
        90
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "WorkspacePrototype",
            "optional": false,
            "range": [
              95,
              113
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "name": "serialize",
                  "optional": false,
                  "range": [
                    122,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      150,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 32,
                        "line": 4
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
                        "line": 4
                      },
                      "start": {
                        "column": 26,
                        "line": 4
                      }
                    },
                    "range": [
                      144,
                      149
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        146,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    133,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "range": [
                  122,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              116,
              159
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          "range": [
            95,
            159
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        91,
        160
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "WorkspacePrototype",
            "optional": false,
            "range": [
              161,
              179
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'__proto__'",
            "value": "__proto__",
            "range": [
              180,
              191
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "range": [
            161,
            192
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "EntityPrototype",
          "optional": false,
          "range": [
            195,
            210
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 34,
              "line": 7
            }
          }
        },
        "range": [
          161,
          210
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        161,
        211
      ],
      "loc": {
        "end": {
          "column": 50,
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
            "name": "o",
            "optional": false,
            "range": [
              217,
              218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "type": "Literal",
                  "raw": "\"__proto__\"",
                  "value": "__proto__",
                  "range": [
                    227,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    240,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                "range": [
                  227,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              221,
              243
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            217,
            243
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        213,
        244
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          253,
          277
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"__proto__\"",
              "value": "__proto__",
              "range": [
                259,
                270
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                273,
                274
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 13
                },
                "start": {
                  "column": 18,
                  "line": 13
                }
              }
            },
            "range": [
              259,
              275
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          251,
          252
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        245,
        277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
