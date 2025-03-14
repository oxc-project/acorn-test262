__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    256
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          26,
          29
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHeapObjectProperty",
        "optional": false,
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
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
          55,
          207
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "range": [
                118,
                132
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                132,
                159
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "objectId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 27,
                        "line": 4
                      }
                    },
                    "range": [
                      141,
                      149
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        143,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    133,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 36,
                    "line": 4
                  }
                },
                "range": [
                  150,
                  159
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    152,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 4
                    },
                    "start": {
                      "column": 38,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "range": [
              118,
              159
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  },
                  "range": [
                    173,
                    181
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      175,
                      181
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  165,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 5
                  },
                  "start": {
                    "column": 5,
                    "line": 5
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              },
              "range": [
                182,
                205
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IHeapObjectProperty",
                    "optional": false,
                    "range": [
                      184,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 5
                      },
                      "start": {
                        "column": 24,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    184,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  184,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 45,
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
              164,
              205
            ],
            "loc": {
              "end": {
                "column": 45,
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
            "column": 25,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectChildrenMap",
        "optional": false,
        "range": [
          36,
          54
        ],
        "loc": {
          "end": {
            "column": 24,
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
      "range": [
        30,
        207
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "name": "directChildrenMap",
            "optional": false,
            "range": [
              212,
              229
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                252,
                254
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 44,
                  "line": 7
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDirectChildrenMap",
                "optional": false,
                "range": [
                  233,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "range": [
                233,
                251
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            },
            "range": [
              232,
              254
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 7
              },
              "start": {
                "column": 24,
                "line": 7
              }
            }
          },
          "range": [
            212,
            254
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        208,
        255
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 48,
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
