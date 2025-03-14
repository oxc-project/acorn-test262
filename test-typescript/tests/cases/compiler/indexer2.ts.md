__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    225
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          30,
          32
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 30,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHeapObjectProperty",
        "optional": false,
        "range": [
          10,
          29
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          62,
          172
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "range": [
                73,
                87
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 39,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  },
                  "range": [
                    96,
                    104
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      98,
                      104
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  88,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 41,
                  "line": 3
                }
              },
              "range": [
                106,
                115
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  108,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              73,
              116
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 3
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
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  },
                  "range": [
                    135,
                    143
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      137,
                      143
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
                  }
                },
                "range": [
                  127,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
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
                  "column": 50,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              },
              "range": [
                145,
                168
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
                      147,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    147,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                },
                "range": [
                  147,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 50,
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
              126,
              169
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 4
              },
              "start": {
                "column": 8,
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
            "column": 29,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectChildrenMap",
        "optional": false,
        "range": [
          43,
          61
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        33,
        172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
              181,
              198
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
          "init": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                221,
                223
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 44,
                  "line": 6
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
                  202,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "range": [
                202,
                220
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            },
            "range": [
              201,
              223
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 24,
                "line": 6
              }
            }
          },
          "range": [
            181,
            223
          ],
          "loc": {
            "end": {
              "column": 46,
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
        177,
        224
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 48,
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
