__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    176
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InputType",
        "optional": false,
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "enable_member_receipts",
              "optional": false,
              "range": [
                19,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              },
              "range": [
                42,
                51
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  44,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 44,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              19,
              51
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          }
        ],
        "range": [
          17,
          53
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsEmptyObject",
        "optional": false,
        "range": [
          60,
          73
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                93,
                94
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 38,
                  "line": 2
                }
              }
            },
            "range": [
              93,
              94
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 38,
                "line": 2
              }
            }
          },
          "range": [
            87,
            94
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 2
            },
            "start": {
              "column": 32,
              "line": 2
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            82,
            83
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 27,
              "line": 2
            }
          }
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSUndefinedKeyword",
          "range": [
            98,
            107
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 2
            },
            "start": {
              "column": 43,
              "line": 2
            }
          }
        },
        "range": [
          79,
          109
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 2
          },
          "start": {
            "column": 24,
            "line": 2
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        },
        "range": [
          73,
          76
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
                74,
                75
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              74,
              75
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        55,
        110
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
      "type": "ExportNamedDeclaration",
      "range": [
        112,
        175
      ],
      "attributes": [],
      "declaration": {
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
              "range": [
                125,
                129
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        140,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 5
                        },
                        "start": {
                          "column": 6,
                          "line": 5
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          159,
                          170
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InputType",
                              "optional": false,
                              "range": [
                                160,
                                169
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 5
                                },
                                "start": {
                                  "column": 26,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              160,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 5
                              },
                              "start": {
                                "column": 26,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsEmptyObject",
                        "optional": false,
                        "range": [
                          146,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        146,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 5
                        },
                        "start": {
                          "column": 12,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      140,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    136,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 5
                    },
                    "start": {
                      "column": 2,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                132,
                174
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 4
                }
              }
            },
            "range": [
              125,
              174
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          119,
          175
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
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
