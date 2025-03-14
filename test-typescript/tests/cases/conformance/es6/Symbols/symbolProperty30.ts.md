__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    111
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          111
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  16,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 5,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  23,
                  34
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              },
              "range": [
                16,
                34
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
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
                35,
                71
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              57,
                              58
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 3
                              },
                              "start": {
                                "column": 17,
                                "line": 3
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              60,
                              62
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 3
                              },
                              "start": {
                                "column": 20,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            57,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 3
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        55,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      48,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  38,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "range": [
              15,
              71
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  },
                  "range": [
                    78,
                    86
                  ],
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "range": [
                      80,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  77,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              },
              "range": [
                87,
                108
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    92,
                    108
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            97,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 5
                            },
                            "start": {
                              "column": 25,
                              "line": 5
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
                              "column": 34,
                              "line": 5
                            },
                            "start": {
                              "column": 26,
                              "line": 5
                            }
                          },
                          "range": [
                            98,
                            106
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              100,
                              106
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 5
                              },
                              "start": {
                                "column": 28,
                                "line": 5
                              }
                            }
                          }
                        },
                        "range": [
                          97,
                          106
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "range": [
                      95,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 5
                      },
                      "start": {
                        "column": 23,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  89,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              76,
              109
            ],
            "loc": {
              "end": {
                "column": 37,
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
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          6,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
        111
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
