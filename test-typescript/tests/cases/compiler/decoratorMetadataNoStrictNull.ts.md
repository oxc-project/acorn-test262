__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    124
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
            "name": "dec",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "range": [
                39,
                48
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 1
                    },
                    "start": {
                      "column": 16,
                      "line": 1
                    }
                  },
                  "range": [
                    16,
                    20
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      18,
                      20
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  13,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 13,
                    "line": 1
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  },
                  "range": [
                    26,
                    34
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      28,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 28,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  22,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 1
                  },
                  "start": {
                    "column": 22,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              12,
              48
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            48
          ],
          "loc": {
            "end": {
              "column": 48,
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
        48
      ],
      "loc": {
        "end": {
          "column": 48,
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
          60,
          124
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
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
                    65,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 4
                    },
                    "start": {
                      "column": 3,
                      "line": 4
                    }
                  }
                },
                "range": [
                  64,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 4
                  },
                  "start": {
                    "column": 2,
                    "line": 4
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                76,
                79
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
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
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              },
              "range": [
                79,
                94
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      81,
                      87
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      90,
                      94
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  81,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              64,
              95
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
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
                    99,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 5
                    },
                    "start": {
                      "column": 3,
                      "line": 5
                    }
                  }
                },
                "range": [
                  98,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 5
                  },
                  "start": {
                    "column": 2,
                    "line": 5
                  }
                }
              }
            ],
            "definite": false,
            "key": {
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
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
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
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              },
              "range": [
                113,
                121
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  115,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              98,
              122
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 2,
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
            "column": 10,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          56,
          59
        ],
        "loc": {
          "end": {
            "column": 9,
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
        50,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
      "column": 1,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
