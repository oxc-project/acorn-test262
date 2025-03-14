__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    39
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        14,
        38
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
              "name": "test",
              "optional": false,
              "range": [
                25,
                29
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "'abc'",
              "value": "abc",
              "range": [
                32,
                37
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              25,
              37
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          21,
          38
        ],
        "loc": {
          "end": {
            "column": 24,
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
          "column": 24,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
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
    234
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          21,
          26
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              9,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        27
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  116,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 55,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    },
                    "range": [
                      88,
                      93
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        90,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    82,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 4
                      },
                      "start": {
                        "column": 45,
                        "line": 4
                      }
                    },
                    "range": [
                      106,
                      114
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        108,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 4
                        },
                        "start": {
                          "column": 47,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    95,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                72,
                138
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              65,
              139
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          59,
          141
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 30,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "range": [
          38,
          44
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "handler",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 23,
                "line": 3
              }
            },
            "range": [
              52,
              57
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                54,
                57
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            }
          },
          "range": [
            45,
            57
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "range": [
        29,
        141
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          153,
          234
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "range": [
                            173,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 10
                            },
                            "start": {
                              "column": 18,
                              "line": 10
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "'abc'",
                          "value": "abc",
                          "range": [
                            181,
                            186
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 10
                            },
                            "start": {
                              "column": 26,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          173,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 10
                          },
                          "start": {
                            "column": 18,
                            "line": 10
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        167,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filter",
                    "optional": false,
                    "range": [
                      160,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 10
                      },
                      "start": {
                        "column": 5,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    160,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "range": [
                  159,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "whatever",
              "optional": false,
              "range": [
                199,
                207
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                207,
                232
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  210,
                  232
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 11
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
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              159,
              232
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
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
            "column": 10,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wat",
        "optional": false,
        "range": [
          149,
          152
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        143,
        234
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
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
      "line": 1
    }
  },
  "hashbang": null
}
```
