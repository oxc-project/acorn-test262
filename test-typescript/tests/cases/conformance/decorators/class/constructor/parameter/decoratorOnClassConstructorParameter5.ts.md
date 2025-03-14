__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    336
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          71,
          74
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "range": [
          66,
          70
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        56,
        74
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
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
            "name": "IFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              },
              "range": [
                93,
                98
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  95,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              89,
              98
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            89,
            98
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        75,
        99
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          130,
          336
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
              "name": "Schema",
              "optional": false,
              "range": [
                152,
                158
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "value": {
              "type": "Literal",
              "raw": "'vscode-bulkeditpreview'",
              "value": "vscode-bulkeditpreview",
              "range": [
                161,
                185
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            "range": [
              136,
              186
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "emptyPreview",
              "optional": false,
              "range": [
                198,
                210
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "scheme",
                    "optional": false,
                    "range": [
                      215,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 28,
                        "line": 6
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BulkEditPreviewProvider",
                      "optional": false,
                      "range": [
                        223,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 6
                        },
                        "start": {
                          "column": 36,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "range": [
                        247,
                        253
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 6
                        },
                        "start": {
                          "column": 60,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      223,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 6
                      },
                      "start": {
                        "column": 36,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    215,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                213,
                255
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 6
                }
              }
            },
            "range": [
              191,
              256
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                261,
                272
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                272,
                334
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  331,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 9
                  },
                  "start": {
                    "column": 6,
                    "line": 9
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [
                    {
                      "type": "Decorator",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "range": [
                          283,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 8
                          },
                          "start": {
                            "column": 9,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        282,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_modeService",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 8
                        },
                        "start": {
                          "column": 43,
                          "line": 8
                        }
                      },
                      "range": [
                        317,
                        323
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "range": [
                            319,
                            323
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 8
                            },
                            "start": {
                              "column": 45,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          319,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 8
                          },
                          "start": {
                            "column": 45,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      305,
                      323
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 8
                      },
                      "start": {
                        "column": 31,
                        "line": 8
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    282,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            },
            "range": [
              261,
              334
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 30,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BulkEditPreviewProvider",
        "optional": false,
        "range": [
          106,
          129
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        100,
        336
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
      "column": 1,
      "line": 10
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
