__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    76
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./MyComponent\"",
        "value": "./MyComponent",
        "range": [
          23,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 23,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            17
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyFunction",
            "optional": false,
            "range": [
              7,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "range": [
                    53,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"Hello World\"",
                  "value": "Hello World",
                  "range": [
                    58,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 17,
                      "line": 3
                    }
                  }
                },
                "range": [
                  53,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              52,
              72
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 11,
                "line": 3
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyFunction",
          "optional": false,
          "range": [
            41,
            51
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "range": [
          41,
          73
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        41,
        74
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 5
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
    0,
    153
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          21,
          37
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "msg",
              "optional": false,
              "range": [
                23,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
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
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              },
              "range": [
                26,
                34
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  28,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              23,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "range": [
          10,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
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
        39,
        126
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
              "name": "MyFunction",
              "optional": false,
              "range": [
                52,
                62
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "TemplateLiteral",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "range": [
                          118,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 3
                          },
                          "start": {
                            "column": 79,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "tail": false,
                        "value": {
                          "cooked": "Got message \"",
                          "raw": "Got message \""
                        },
                        "range": [
                          102,
                          118
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 3
                          },
                          "start": {
                            "column": 63,
                            "line": 3
                          }
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "tail": true,
                        "value": {
                          "cooked": "\"",
                          "raw": "\""
                        },
                        "range": [
                          121,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 85,
                            "line": 3
                          },
                          "start": {
                            "column": 82,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "range": [
                      102,
                      124
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 3
                      },
                      "start": {
                        "column": 63,
                        "line": 3
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "range": [
                      90,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 3
                      },
                      "start": {
                        "column": 51,
                        "line": 3
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "range": [
                      98,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 3
                      },
                      "start": {
                        "column": 59,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    90,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 3
                    },
                    "start": {
                      "column": 51,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  90,
                  125
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 3
                  },
                  "start": {
                    "column": 51,
                    "line": 3
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "range": [
                          68,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "range": [
                          68,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        68,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 3
                      },
                      "start": {
                        "column": 34,
                        "line": 3
                      }
                    },
                    "range": [
                      73,
                      85
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyFunction",
                        "optional": false,
                        "range": [
                          75,
                          85
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 36,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        75,
                        85
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    66,
                    85
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                65,
                125
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            },
            "range": [
              52,
              125
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          46,
          126
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 87,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunction",
        "optional": false,
        "range": [
          142,
          152
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 15,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "range": [
        127,
        153
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 26,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
