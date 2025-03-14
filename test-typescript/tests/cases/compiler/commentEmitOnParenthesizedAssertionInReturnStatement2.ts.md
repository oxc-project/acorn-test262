__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    219
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        219
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            17,
            219
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
                "name": "client",
                "optional": false,
                "range": [
                  23,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getThing",
                      "optional": false,
                      "range": [
                        40,
                        48
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 3
                        },
                        "start": {
                          "column": 6,
                          "line": 3
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              72,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 3
                              },
                              "start": {
                                "column": 38,
                                "line": 3
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
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              56,
                              63
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 3
                              },
                              "start": {
                                "column": 22,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "range": [
                              64,
                              71
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 3
                              },
                              "start": {
                                "column": 30,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            56,
                            71
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          56,
                          75
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 3
                          },
                          "start": {
                            "column": 22,
                            "line": 3
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        50,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      40,
                      75
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 6,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  32,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              },
              "range": [
                23,
                81
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
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  89,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
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
                  92,
                  215
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSSatisfiesExpression",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  148,
                                  152
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 8
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "client",
                                "optional": false,
                                "range": [
                                  153,
                                  159
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                148,
                                159
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 8
                                },
                                "start": {
                                  "column": 36,
                                  "line": 8
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getThing",
                              "optional": false,
                              "range": [
                                171,
                                179
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 9
                                },
                                "start": {
                                  "column": 11,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              148,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 9
                              },
                              "start": {
                                "column": 36,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            148,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 36,
                              "line": 8
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              199,
                              207
                            ],
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  200,
                                  206
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 9
                              },
                              "start": {
                                "column": 39,
                                "line": 9
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              192,
                              199
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 9
                              },
                              "start": {
                                "column": 32,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            192,
                            207
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 9
                            },
                            "start": {
                              "column": 32,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          148,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 9
                          },
                          "start": {
                            "column": 36,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        103,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 9
                        },
                        "start": {
                          "column": 6,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    95,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 6
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
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              },
              "range": [
                89,
                215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
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
              "column": 3,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 1
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
            13,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          219
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 11
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
          "column": 3,
          "line": 11
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
      "column": 3,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
