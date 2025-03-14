__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    35
  ],
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "range": [
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
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
          23,
          34
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
                25,
                28
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
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
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                28,
                31
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    30,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                },
                "range": [
                  30,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              25,
              32
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
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
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        },
        "range": [
          19,
          22
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "range": [
                20,
                21
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              20,
              21
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        12,
        34
      ],
      "loc": {
        "end": {
          "column": 22,
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
    59,
    179
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "q",
        "optional": false,
        "range": [
          66,
          67
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"exportAssignmentOfGenericType1_0\"",
          "value": "exportAssignmentOfGenericType1_0",
          "range": [
            78,
            112
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 2
            },
            "start": {
              "column": 19,
              "line": 2
            }
          }
        },
        "range": [
          70,
          113
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "range": [
        59,
        114
      ],
      "loc": {
        "end": {
          "column": 55,
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
          142,
          145
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 26,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "range": [
          122,
          123
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
        "name": "q",
        "optional": false,
        "range": [
          132,
          133
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
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          133,
          141
        ],
        "params": [
          {
            "type": "TSStringKeyword",
            "range": [
              134,
              140
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 18,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "range": [
        116,
        145
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                151,
                154
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    153,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  153,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              150,
              154
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            150,
            154
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        146,
        155
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                161,
                169
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  163,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              160,
              169
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
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
                174,
                177
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "range": [
              172,
              177
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            160,
            177
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        156,
        178
      ],
      "loc": {
        "end": {
          "column": 22,
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
      "line": 2
    }
  },
  "hashbang": null
}
```
