__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    19
  ],
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "range": [
          15,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
    0,
    258
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                49,
                77
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      59,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                        "column": 20,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    },
                    "range": [
                      63,
                      71
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"json\"",
                        "value": "json",
                        "range": [
                          65,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        65,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    59,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportAttributes",
              "optional": false,
              "range": [
                32,
                48
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              77
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          15,
          79
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          8,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "kind": "global",
      "range": [
        0,
        79
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "range": [
              114,
              118
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            }
          },
          "value": {
            "type": "Literal",
            "raw": "\"not-json\"",
            "value": "not-json",
            "range": [
              120,
              130
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 39,
                "line": 7
              }
            }
          },
          "range": [
            114,
            130
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 33,
              "line": 7
            }
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./a\"",
        "value": "./a",
        "range": [
          101,
          106
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ns",
            "optional": false,
            "range": [
              93,
              95
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
          },
          "range": [
            88,
            95
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 7
            },
            "start": {
              "column": 7,
              "line": 7
            }
          }
        }
      ],
      "range": [
        81,
        133
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "range": [
            139,
            141
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 8
            },
            "start": {
              "column": 5,
              "line": 8
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          134,
          141
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        134,
        142
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ImportExpression",
                "options": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "with",
                        "optional": false,
                        "range": [
                          199,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "range": [
                                219,
                                223
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "\"not-json\"",
                              "value": "not-json",
                              "range": [
                                225,
                                235
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 13
                                },
                                "start": {
                                  "column": 18,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              219,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          205,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        199,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "range": [
                    189,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                },
                "source": {
                  "type": "Literal",
                  "raw": "\"./a\"",
                  "value": "./a",
                  "range": [
                    182,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
                    }
                  }
                },
                "range": [
                  175,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              },
              "range": [
                169,
                254
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              169,
              255
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          163,
          257
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 19,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          159,
          160
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        144,
        257
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
