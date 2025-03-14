__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    239
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
            "name": "mySymbol",
            "optional": false,
            "range": [
              6,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                17,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              17,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          },
          "range": [
            6,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        26
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          41,
          76
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              },
              "range": [
                47,
                53
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  49,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              45,
              54
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mySymbol",
              "optional": false,
              "range": [
                58,
                66
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 3,
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
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              },
              "range": [
                67,
                73
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    69,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                },
                "range": [
                  69,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              57,
              74
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "line": 2
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
          37,
          40
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        27,
        76
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              },
              "range": [
                86,
                91
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    88,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  88,
                  91
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              83,
              91
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                100,
                102
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 23,
                  "line": 6
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              94,
              102
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          },
          "range": [
            83,
            102
          ],
          "loc": {
            "end": {
              "column": 25,
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
        77,
        103
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "foo",
            "optional": false,
            "range": [
              104,
              107
            ],
            "loc": {
              "end": {
                "column": 3,
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
            "type": "Identifier",
            "decorators": [],
            "name": "mySymbol",
            "optional": false,
            "range": [
              108,
              116
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "range": [
            104,
            117
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "range": [
          104,
          124
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
      "range": [
        104,
        125
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          141,
          170
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              },
              "range": [
                147,
                153
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  149,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 6,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              145,
              154
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "range": [
                157,
                161
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
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
                  "column": 12,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              },
              "range": [
                161,
                167
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    163,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "range": [
                  163,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              157,
              168
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 14,
            "line": 9
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
          137,
          140
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        127,
        170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "t",
            "optional": false,
            "range": [
              177,
              178
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "\"test\"",
              "value": "test",
              "range": [
                181,
                187
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 10,
                  "line": 13
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
                  191,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "range": [
                191,
                196
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "range": [
              181,
              196
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 10,
                "line": 13
              }
            }
          },
          "range": [
            177,
            196
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        171,
        197
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                207,
                212
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "range": [
                    209,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "range": [
                  209,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              204,
              212
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                221,
                223
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 14
                },
                "start": {
                  "column": 23,
                  "line": 14
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              215,
              223
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 14
              },
              "start": {
                "column": 17,
                "line": 14
              }
            }
          },
          "range": [
            204,
            223
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        198,
        224
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "bar",
            "optional": false,
            "range": [
              225,
              228
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 0,
                "line": 15
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "range": [
              229,
              230
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "range": [
            225,
            231
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 15
            },
            "start": {
              "column": 0,
              "line": 15
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            234,
            238
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 15
            },
            "start": {
              "column": 9,
              "line": 15
            }
          }
        },
        "range": [
          225,
          238
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        225,
        239
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 14,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
