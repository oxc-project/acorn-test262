__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    52
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          33
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "me",
              "optional": false,
              "range": [
                20,
                22
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                22,
                30
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  24,
                  30
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              20,
              31
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        33
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "TesterB",
        "optional": false,
        "range": [
          43,
          50
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        34,
        51
      ],
      "loc": {
        "end": {
          "column": 17,
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
    159
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          7,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"./unusedImportDeclaration_testerB\"",
          "value": "./unusedImportDeclaration_testerB",
          "range": [
            19,
            54
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 1
            },
            "start": {
              "column": 19,
              "line": 1
            }
          }
        },
        "range": [
          11,
          55
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "range": [
        0,
        56
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "thingy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                67,
                70
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  69,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              61,
              70
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "me",
                  "optional": false,
                  "range": [
                    79,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
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
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    83,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "range": [
                  79,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              73,
              88
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            61,
            88
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 4
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
        57,
        89
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          107,
          110
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            },
            "range": [
              112,
              120
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                114,
                120
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            }
          },
          "range": [
            111,
            120
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 5
          },
          "start": {
            "column": 31,
            "line": 5
          }
        },
        "range": [
          121,
          127
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            123,
            127
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 5
            },
            "start": {
              "column": 33,
              "line": 5
            }
          }
        }
      },
      "range": [
        90,
        128
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"IN \"",
                "value": "IN ",
                "range": [
                  133,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thingy",
                  "optional": false,
                  "range": [
                    141,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "me",
                  "optional": false,
                  "range": [
                    148,
                    150
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 19,
                      "line": 6
                    }
                  }
                },
                "range": [
                  141,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "range": [
                133,
                150
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "\"!\"",
              "value": "!",
              "range": [
                153,
                156
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "range": [
              133,
              156
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            129,
            132
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          129,
          157
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        129,
        158
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
