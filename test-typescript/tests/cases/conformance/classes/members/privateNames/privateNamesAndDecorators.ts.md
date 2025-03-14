__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    153
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
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
                "column": 33,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            },
            "range": [
              30,
              33
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  32,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 1
                  },
                  "start": {
                    "column": 32,
                    "line": 1
                  }
                }
              },
              "range": [
                32,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 32,
                  "line": 1
                }
              }
            }
          },
          "range": [
            24,
            33
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        },
        "range": [
          34,
          37
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            }
          },
          "range": [
            36,
            37
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 36,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          23
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
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
          48,
          152
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    55,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 4
                    },
                    "start": {
                      "column": 5,
                      "line": 4
                    }
                  }
                },
                "range": [
                  54,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                87,
                91
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                94,
                95
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              54,
              96
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "range": [
                    102,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  101,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                134,
                138
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                138,
                150
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  147,
                  150
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                },
                "range": [
                  140,
                  146
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    142,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 7
                }
              }
            },
            "range": [
              101,
              150
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 7
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
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 3
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
          46,
          47
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
      "superClass": null,
      "range": [
        40,
        152
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
