__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    250
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          30,
          47
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                40,
                41
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 32,
                  "line": 2
                }
              }
            },
            "range": [
              32,
              45
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          18,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        12,
        47
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          66,
          68
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          54,
          55
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          64,
          65
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        48,
        68
      ],
      "loc": {
        "end": {
          "column": 20,
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
          87,
          111
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                100,
                103
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
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
                103,
                109
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  106,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
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
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              93,
              109
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 18,
            "line": 4
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
          75,
          76
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          85,
          86
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 16,
            "line": 4
          }
        }
      },
      "range": [
        69,
        111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          121,
          124
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            },
            "range": [
              129,
              135
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'hi'",
                "value": "hi",
                "range": [
                  131,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                131,
                135
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            }
          },
          "range": [
            125,
            135
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 24,
            "line": 7
          }
        },
        "range": [
          136,
          139
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              138,
              139
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "range": [
            138,
            139
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 26,
              "line": 7
            }
          }
        }
      },
      "range": [
        112,
        140
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          150,
          153
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            },
            "range": [
              158,
              165
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'bye'",
                "value": "bye",
                "range": [
                  160,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 8
                  }
                }
              },
              "range": [
                160,
                165
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            }
          },
          "range": [
            154,
            165
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 8
          },
          "start": {
            "column": 25,
            "line": 8
          }
        },
        "range": [
          166,
          169
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 8
              },
              "start": {
                "column": 27,
                "line": 8
              }
            }
          },
          "range": [
            168,
            169
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 8
            },
            "start": {
              "column": 27,
              "line": 8
            }
          }
        }
      },
      "range": [
        141,
        170
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          180,
          183
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            },
            "range": [
              188,
              196
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                190,
                196
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            }
          },
          "range": [
            184,
            196
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 26,
            "line": 9
          }
        },
        "range": [
          197,
          200
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              199,
              200
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 28,
                "line": 9
              }
            }
          },
          "range": [
            199,
            200
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 28,
              "line": 9
            }
          }
        }
      },
      "range": [
        171,
        201
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                242,
                246
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              235,
              247
            ],
            "loc": {
              "end": {
                "column": 16,
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
          229,
          249
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 27,
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
        "name": "foo",
        "optional": false,
        "range": [
          211,
          214
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 17,
                "line": 10
              }
            },
            "range": [
              219,
              224
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                221,
                224
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            }
          },
          "range": [
            215,
            224
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 10
          }
        },
        "range": [
          225,
          228
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Z",
            "optional": false,
            "range": [
              227,
              228
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 25,
                "line": 10
              }
            }
          },
          "range": [
            227,
            228
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 10
            },
            "start": {
              "column": 25,
              "line": 10
            }
          }
        }
      },
      "range": [
        202,
        249
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
