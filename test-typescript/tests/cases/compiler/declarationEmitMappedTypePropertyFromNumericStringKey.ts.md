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
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        78
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
              "name": "f",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
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
                        "type": "Literal",
                        "raw": "'0'",
                        "value": "0",
                        "range": [
                          69,
                          72
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 1
                          },
                          "start": {
                            "column": 69,
                            "line": 1
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          74,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 1
                          },
                          "start": {
                            "column": 74,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        69,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 1
                        },
                        "start": {
                          "column": 69,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    68,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 1
                    },
                    "start": {
                      "column": 68,
                      "line": 1
                    }
                  }
                }
              ],
              "callee": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    63,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 1
                    },
                    "start": {
                      "column": 63,
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
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
                        }
                      },
                      "range": [
                        25,
                        58
                      ],
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
                                40,
                                41
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 1
                                },
                                "start": {
                                  "column": 40,
                                  "line": 1
                                }
                              }
                            },
                            "range": [
                              40,
                              41
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 1
                              },
                              "start": {
                                "column": 40,
                                "line": 1
                              }
                            }
                          },
                          "range": [
                            34,
                            41
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 1
                            },
                            "start": {
                              "column": 34,
                              "line": 1
                            }
                          }
                        },
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "range": [
                            29,
                            30
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 1
                            },
                            "start": {
                              "column": 29,
                              "line": 1
                            }
                          }
                        },
                        "nameType": null,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSIndexedAccessType",
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "range": [
                                    46,
                                    47
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 1
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 1
                                    }
                                  }
                                },
                                "range": [
                                  46,
                                  47
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 1
                                  }
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    44,
                                    45
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 1
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 1
                                    }
                                  }
                                },
                                "range": [
                                  44,
                                  45
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 1
                                  },
                                  "start": {
                                    "column": 44,
                                    "line": 1
                                  }
                                }
                              },
                              "range": [
                                44,
                                48
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 1
                                },
                                "start": {
                                  "column": 44,
                                  "line": 1
                                }
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                51,
                                57
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 1
                                },
                                "start": {
                                  "column": 51,
                                  "line": 1
                                }
                              }
                            }
                          ],
                          "range": [
                            44,
                            57
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 1
                            },
                            "start": {
                              "column": 44,
                              "line": 1
                            }
                          }
                        },
                        "range": [
                          27,
                          58
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 1
                          },
                          "start": {
                            "column": 27,
                            "line": 1
                          }
                        }
                      }
                    },
                    "range": [
                      22,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 1
                      },
                      "start": {
                        "column": 22,
                        "line": 1
                      }
                    }
                  }
                ],
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  },
                  "range": [
                    18,
                    21
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
                          19,
                          20
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 1
                          },
                          "start": {
                            "column": 19,
                            "line": 1
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        19,
                        20
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 1
                        },
                        "start": {
                          "column": 19,
                          "line": 1
                        }
                      }
                    }
                  ]
                },
                "range": [
                  18,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "optional": false,
              "range": [
                17,
                77
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              77
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          78
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 78,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 114,
      "line": 1
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
