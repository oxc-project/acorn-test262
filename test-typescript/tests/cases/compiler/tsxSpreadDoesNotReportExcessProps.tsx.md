__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    244
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
          63,
          70
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            52,
            57
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "range": [
              52,
              57
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 12,
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
        71
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 3
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
          158,
          243
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
                164,
                170
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                170,
                241
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            229,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 7
                            },
                            "start": {
                              "column": 54,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          227,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 7
                          },
                          "start": {
                            "column": 52,
                            "line": 7
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [
                          {
                            "type": "JSXSpreadAttribute",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  200,
                                  204
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "range": [
                                  205,
                                  210
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                200,
                                210
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 7
                                },
                                "start": {
                                  "column": 25,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              196,
                              211
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "className",
                              "range": [
                                212,
                                221
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 7
                                },
                                "start": {
                                  "column": 37,
                                  "line": 7
                                }
                              }
                            },
                            "value": {
                              "type": "Literal",
                              "raw": "\"ok\"",
                              "value": "ok",
                              "range": [
                                222,
                                226
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 7
                                },
                                "start": {
                                  "column": 47,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              212,
                              226
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 7
                              },
                              "start": {
                                "column": 37,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            192,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          191,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 7
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        191,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      183,
                      235
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  173,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 6
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
                  "line": 8
                },
                "start": {
                  "column": 10,
                  "line": 6
                }
              }
            },
            "range": [
              164,
              241
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
            "column": 85,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComponent",
        "optional": false,
        "range": [
          79,
          90
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
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
            99,
            104
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
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
            105,
            114
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 5
            }
          }
        },
        "range": [
          99,
          114
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 5
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          114,
          157
        ],
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dataSource",
                  "optional": false,
                  "range": [
                    116,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 5
                    },
                    "start": {
                      "column": 43,
                      "line": 5
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
                      "column": 63,
                      "line": 5
                    },
                    "start": {
                      "column": 53,
                      "line": 5
                    }
                  },
                  "range": [
                    126,
                    136
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        128,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 5
                        },
                        "start": {
                          "column": 55,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      128,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  116,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onClick",
                  "optional": false,
                  "range": [
                    138,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 5
                    },
                    "start": {
                      "column": 65,
                      "line": 5
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 5
                    },
                    "start": {
                      "column": 73,
                      "line": 5
                    }
                  },
                  "range": [
                    146,
                    151
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      148,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 5
                      },
                      "start": {
                        "column": 75,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  138,
                  151
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 5
                  },
                  "start": {
                    "column": 65,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              115,
              152
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 5
              },
              "start": {
                "column": 42,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              154,
              156
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 5
              },
              "start": {
                "column": 81,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 5
          },
          "start": {
            "column": 41,
            "line": 5
          }
        }
      },
      "range": [
        73,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
