__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    105,
    320
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          125,
          181
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                131,
                139
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                  "column": 51,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              },
              "range": [
                139,
                178
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          142,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSOptionalType",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            150,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 23,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          150,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      141,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        169,
                        178
                      ],
                      "params": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            170,
                            177
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 6
                            },
                            "start": {
                              "column": 43,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 6
                        },
                        "start": {
                          "column": 42,
                          "line": 6
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "range": [
                        161,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 6
                        },
                        "start": {
                          "column": 34,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      161,
                      178
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 6
                      },
                      "start": {
                        "column": 34,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  141,
                  178
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 6
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              131,
              179
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "range": [
          115,
          124
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        105,
        181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          239,
          241
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 59,
            "line": 8
          },
          "start": {
            "column": 57,
            "line": 8
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          196,
          199
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 14,
            "line": 8
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
            208,
            213
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 26,
              "line": 8
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
            214,
            223
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 8
            },
            "start": {
              "column": 32,
              "line": 8
            }
          }
        },
        "range": [
          208,
          223
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 8
          },
          "start": {
            "column": 26,
            "line": 8
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          223,
          238
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "range": [
                224,
                233
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 42,
                  "line": 8
                }
              }
            },
            "range": [
              224,
              233
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 42,
                "line": 8
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              235,
              237
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 8
              },
              "start": {
                "column": 53,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 8
          },
          "start": {
            "column": 41,
            "line": 8
          }
        }
      },
      "range": [
        182,
        241
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "b",
            "optional": false,
            "range": [
              248,
              249
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [
              {
                "type": "JSXText",
                "range": [
                  263,
                  272
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "JSXElement",
                    "children": [],
                    "closingElement": null,
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "range": [
                        273,
                        279
                      ],
                      "attributes": [],
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "range": [
                          274,
                          277
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 11
                          },
                          "start": {
                            "column": 10,
                            "line": 11
                          }
                        }
                      },
                      "selfClosing": true,
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 11
                        },
                        "start": {
                          "column": 9,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      273,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      283,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    273,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                "range": [
                  272,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  291,
                  300
                ],
                "raw": "\n        ",
                "value": "\n        ",
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 27,
                    "line": 11
                  }
                }
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "raw": "\"aa\"",
                  "value": "aa",
                  "range": [
                    301,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  300,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              {
                "type": "JSXText",
                "range": [
                  306,
                  311
                ],
                "raw": "\n    ",
                "value": "\n    ",
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 13
                  },
                  "start": {
                    "column": 14,
                    "line": 12
                  }
                }
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  313,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              },
              "range": [
                311,
                317
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "openingElement": {
              "type": "JSXOpeningElement",
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "range": [
                  259,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 10
                  },
                  "start": {
                    "column": 5,
                    "line": 10
                  }
                }
              },
              "selfClosing": false,
              "range": [
                258,
                263
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              258,
              317
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "range": [
            248,
            319
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        242,
        320
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 14
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
      "column": 2,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
