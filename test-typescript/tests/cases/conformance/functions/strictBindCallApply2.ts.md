__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    163
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          36,
          52
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blub",
              "optional": false,
              "range": [
                38,
                42
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
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
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              },
              "range": [
                42,
                50
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  44,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 22,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              38,
              50
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 3
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
        52
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        52,
        53
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 30,
          "line": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          77,
          79
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 4
          },
          "start": {
            "column": 23,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          63,
          65
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
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
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            },
            "range": [
              70,
              75
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  72,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                72,
                75
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            }
          },
          "range": [
            66,
            75
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 12,
              "line": 4
            }
          }
        }
      ],
      "range": [
        54,
        79
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          86,
          90
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            110,
            121
          ],
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  118,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 6
                  }
                }
              },
              "range": [
                111,
                120
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThisParameterType",
          "optional": false,
          "range": [
            93,
            110
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "range": [
          93,
          121
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "range": [
        81,
        122
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "fb",
            "optional": false,
            "range": [
              131,
              133
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "blub",
                      "optional": false,
                      "range": [
                        146,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 21,
                          "line": 8
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"blub\"",
                      "value": "blub",
                      "range": [
                        152,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      146,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  144,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  136,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "range": [
                  139,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              },
              "range": [
                136,
                143
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              136,
              161
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          "range": [
            131,
            161
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        125,
        162
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
      "line": 3
    }
  },
  "hashbang": null
}
```
