__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    219
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        73
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            48,
            73
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "range": [
                  54,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
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
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                },
                "range": [
                  62,
                  70
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    64,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
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
                54,
                71
              ],
              "loc": {
                "end": {
                  "column": 21,
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
              "column": 26,
              "line": 3
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarProps",
          "optional": false,
          "range": [
            39,
            47
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        },
        "range": [
          29,
          73
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        75,
        138
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            101,
            138
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooProps",
                "optional": false,
                "range": [
                  107,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
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
                    "column": 32,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                },
                "range": [
                  116,
                  135
                ],
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BarProps",
                        "optional": false,
                        "range": [
                          118,
                          126
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        118,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    {
                      "type": "TSObjectKeyword",
                      "range": [
                        129,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    118,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                107,
                136
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooProps",
          "optional": false,
          "range": [
            92,
            100
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "range": [
          82,
          138
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "column": 27,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              },
              "range": [
                157,
                167
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooProps",
                  "optional": false,
                  "range": [
                    159,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                },
                "range": [
                  159,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              154,
              167
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            154,
            167
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        140,
        168
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooProps",
                  "optional": false,
                  "range": [
                    177,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "range": [
                    177,
                    190
                  ],
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProps",
                    "optional": false,
                    "range": [
                      177,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "range": [
                      188,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 19,
                        "line": 12
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  177,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              175,
              192
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              195,
              198
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            }
          },
          "range": [
            175,
            198
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        169,
        199
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
          "name": "fooProps",
          "optional": false,
          "range": [
            201,
            209
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "barProp",
          "optional": false,
          "range": [
            210,
            217
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 14
            },
            "start": {
              "column": 9,
              "line": 14
            }
          }
        },
        "range": [
          201,
          217
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        201,
        218
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
