__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    240
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          64,
          240
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
              "name": "b",
              "optional": false,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ArrowFunctionExpression",
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "range": [
                              116,
                              123
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
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
                              124,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 22,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            116,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 4
                            },
                            "start": {
                              "column": 14,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          116,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        110,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      110,
                      134
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
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
                          "name": "obj",
                          "optional": false,
                          "range": [
                            149,
                            152
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
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": true,
                              "key": {
                                "type": "Literal",
                                "raw": "\"a\"",
                                "value": "a",
                                "range": [
                                  158,
                                  161
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 5
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
                                  "type": "ThisExpression",
                                  "range": [
                                    170,
                                    174
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 5
                                    }
                                  }
                                },
                                "expression": true,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  164,
                                  174
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                157,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 5
                                },
                                "start": {
                                  "column": 22,
                                  "line": 5
                                }
                              }
                            }
                          ],
                          "range": [
                            155,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          149,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      143,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  100,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 3
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "range": [
                      84,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    },
                    "range": [
                      88,
                      95
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          90,
                          93
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 24,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        90,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    81,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                74,
                237
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              70,
              238
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 8,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          62,
          63
        ],
        "loc": {
          "end": {
            "column": 7,
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
        56,
        240
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
