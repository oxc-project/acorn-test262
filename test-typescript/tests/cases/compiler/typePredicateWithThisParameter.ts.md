__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    374
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          36,
          56
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              42,
              54
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          32,
          35
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        56
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          71,
          91
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                77,
                80
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                80,
                88
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  82,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              77,
              89
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
            "column": 14,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          67,
          70
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        57,
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 6
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  149,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "range": [
                  158,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                149,
                164
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              142,
              165
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          136,
          167
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 43,
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
        "name": "isFoo1",
        "optional": false,
        "range": [
          102,
          108
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 22,
                "line": 10
              }
            },
            "range": [
              115,
              119
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                117,
                119
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            }
          },
          "range": [
            109,
            119
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 10
          },
          "start": {
            "column": 27,
            "line": 10
          }
        },
        "range": [
          120,
          135
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "range": [
              122,
              128
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 10
              },
              "start": {
                "column": 29,
                "line": 10
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 10
              },
              "start": {
                "column": 39,
                "line": 10
              }
            },
            "range": [
              132,
              135
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  132,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 10
                  },
                  "start": {
                    "column": 39,
                    "line": 10
                  }
                }
              },
              "range": [
                132,
                135
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 10
                },
                "start": {
                  "column": 39,
                  "line": 10
                }
              }
            }
          },
          "range": [
            122,
            135
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 10
            },
            "start": {
              "column": 29,
              "line": 10
            }
          }
        }
      },
      "range": [
        93,
        167
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
              "type": "BinaryExpression",
              "operator": "in",
              "left": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  237,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "object",
                "optional": false,
                "range": [
                  246,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              "range": [
                237,
                252
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              230,
              253
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          224,
          255
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 55,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFoo2",
        "optional": false,
        "range": [
          178,
          184
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            },
            "range": [
              189,
              195
            ],
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "range": [
                191,
                195
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              }
            }
          },
          "range": [
            185,
            195
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 14
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 14
              },
              "start": {
                "column": 34,
                "line": 14
              }
            },
            "range": [
              203,
              207
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                205,
                207
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 14
                },
                "start": {
                  "column": 36,
                  "line": 14
                }
              }
            }
          },
          "range": [
            197,
            207
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 14
            },
            "start": {
              "column": 28,
              "line": 14
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 54,
            "line": 14
          },
          "start": {
            "column": 39,
            "line": 14
          }
        },
        "range": [
          208,
          223
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "object",
            "optional": false,
            "range": [
              210,
              216
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 14
              },
              "start": {
                "column": 41,
                "line": 14
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 14
              },
              "start": {
                "column": 51,
                "line": 14
              }
            },
            "range": [
              220,
              223
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  220,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 14
                  },
                  "start": {
                    "column": 51,
                    "line": 14
                  }
                }
              },
              "range": [
                220,
                223
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 14
                },
                "start": {
                  "column": 51,
                  "line": 14
                }
              }
            }
          },
          "range": [
            210,
            223
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 14
            },
            "start": {
              "column": 41,
              "line": 14
            }
          }
        }
      },
      "range": [
        169,
        255
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              },
              "range": [
                273,
                284
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        275,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 18,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      275,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 18,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "range": [
                        281,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      281,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  275,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              269,
              284
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 12,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            269,
            284
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        257,
        285
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    311,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    316,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 21
                    },
                    "start": {
                      "column": 9,
                      "line": 21
                    }
                  }
                },
                "range": [
                  311,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'hi'",
                "value": "hi",
                "range": [
                  322,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              },
              "range": [
                311,
                326
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              311,
              327
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          305,
          329
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 18,
            "line": 20
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              298,
              302
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 20
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo1",
          "optional": false,
          "range": [
            291,
            297
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          291,
          303
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 20
          },
          "start": {
            "column": 4,
            "line": 20
          }
        }
      },
      "range": [
        287,
        329
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    355,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    360,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  355,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'hi'",
                "value": "hi",
                "range": [
                  366,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 15,
                    "line": 25
                  }
                }
              },
              "range": [
                355,
                370
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              355,
              371
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          349,
          373
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 18,
            "line": 24
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              342,
              346
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 24
              },
              "start": {
                "column": 11,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFoo2",
          "optional": false,
          "range": [
            335,
            341
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          335,
          347
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 24
          },
          "start": {
            "column": 4,
            "line": 24
          }
        }
      },
      "range": [
        331,
        373
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
