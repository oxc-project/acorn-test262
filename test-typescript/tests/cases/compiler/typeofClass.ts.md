__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    114
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          52
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
              "name": "foo",
              "optional": false,
              "range": [
                14,
                17
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              },
              "range": [
                17,
                25
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  19,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 2
                  },
                  "start": {
                    "column": 9,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              14,
              26
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                38,
                41
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                41,
                49
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  43,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              31,
              50
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
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
        "name": "K",
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
        52
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                60,
                63
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    62,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  62,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              58,
              63
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
          "init": null,
          "range": [
            58,
            63
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        54,
        64
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "range": [
            65,
            67
          ],
          "loc": {
            "end": {
              "column": 2,
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
          "name": "foo",
          "optional": false,
          "range": [
            68,
            71
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 7
            },
            "start": {
              "column": 3,
              "line": 7
            }
          }
        },
        "range": [
          65,
          71
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        65,
        72
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "range": [
            73,
            75
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            76,
            79
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        },
        "range": [
          73,
          79
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        73,
        80
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
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              },
              "range": [
                87,
                97
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    96,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  }
                },
                "range": [
                  89,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              85,
              97
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            85,
            97
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        81,
        98
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "range": [
            99,
            101
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
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
            102,
            105
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 3,
              "line": 10
            }
          }
        },
        "range": [
          99,
          105
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        99,
        106
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "range": [
            107,
            109
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "range": [
            110,
            113
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 11
            },
            "start": {
              "column": 3,
              "line": 11
            }
          }
        },
        "range": [
          107,
          113
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        107,
        114
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 7,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
