__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    242
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          15,
          242
        ],
        "body": [
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
                21,
                24
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                24,
                240
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "range": [
                            214,
                            221
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              224,
                              228
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 6
                              },
                              "start": {
                                "column": 31,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "range": [
                              229,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 6
                              },
                              "start": {
                                "column": 36,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            224,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 6
                            },
                            "start": {
                              "column": 31,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          214,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 21,
                            "line": 6
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        208,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      201,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  56,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 39,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    },
                    "range": [
                      32,
                      40
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        34,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    25,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                },
                "range": [
                  41,
                  55
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 29,
                        "line": 2
                      }
                    },
                    "range": [
                      46,
                      55
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        49,
                        55
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    43,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              240
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestFile",
        "optional": false,
        "range": [
          6,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
        242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
