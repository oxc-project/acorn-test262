__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    229
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
            "name": "something",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              },
              "range": [
                21,
                29
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  23,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
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
        31,
        89
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
              "name": "dataSomething",
              "optional": false,
              "range": [
                44,
                57
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TemplateLiteral",
                "expressions": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "range": [
                      68,
                      77
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 37,
                        "line": 2
                      }
                    }
                  }
                ],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "tail": false,
                    "value": {
                      "cooked": "data-",
                      "raw": "data-"
                    },
                    "range": [
                      60,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 29,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "range": [
                      77,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 2
                      },
                      "start": {
                        "column": 46,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  60,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 29,
                    "line": 2
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
                    83,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 2
                    },
                    "start": {
                      "column": 52,
                      "line": 2
                    }
                  }
                },
                "range": [
                  83,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
                    "line": 2
                  }
                }
              },
              "range": [
                60,
                88
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 2
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            },
            "range": [
              44,
              88
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          38,
          89
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        91,
        175
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            113,
            175
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataSomething",
                "optional": false,
                "range": [
                  120,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              },
              "kind": "method",
              "optional": true,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  135,
                  173
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"something\"",
                        "value": "something",
                        "range": [
                          155,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        148,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    138,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 5
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
                    "line": 7
                  },
                  "start": {
                    "column": 20,
                    "line": 5
                  }
                }
              },
              "range": [
                119,
                173
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
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
              "line": 8
            },
            "start": {
              "column": 22,
              "line": 4
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithData",
          "optional": false,
          "range": [
            104,
            112
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          98,
          175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        177,
        229
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
              "name": "a",
              "optional": false,
              "range": [
                190,
                191
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
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WithData",
                      "optional": false,
                      "range": [
                        199,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 10
                        },
                        "start": {
                          "column": 22,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      195,
                      209
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "\"ahahahaahah\"",
                    "value": "ahahahaahah",
                    "range": [
                      211,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 10
                      },
                      "start": {
                        "column": 34,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    194,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 10
                    },
                    "start": {
                      "column": 17,
                      "line": 10
                    }
                  }
                },
                "range": [
                  194,
                  226
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                194,
                228
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 10
                },
                "start": {
                  "column": 17,
                  "line": 10
                }
              }
            },
            "range": [
              190,
              228
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          184,
          229
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 52,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
