__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    4,
    174
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        4,
        174
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            50,
            174
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "range": [
                  60,
                  71
                ],
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                  72,
                  168
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              112,
                              116
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 3
                              },
                              "start": {
                                "column": 12,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_information",
                            "optional": false,
                            "range": [
                              117,
                              129
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 3
                              },
                              "start": {
                                "column": 17,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            112,
                            129
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "right": {
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
                                  132,
                                  136
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 3
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "logger",
                                "optional": false,
                                "range": [
                                  137,
                                  143
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                132,
                                143
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 3
                                },
                                "start": {
                                  "column": 32,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "information",
                              "optional": false,
                              "range": [
                                144,
                                155
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 3
                                },
                                "start": {
                                  "column": 44,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              132,
                              155
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 3
                              },
                              "start": {
                                "column": 32,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            132,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 3
                            },
                            "start": {
                              "column": 32,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          112,
                          157
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        112,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    97,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 45,
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "logger",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 2
                          },
                          "start": {
                            "column": 34,
                            "line": 2
                          }
                        },
                        "range": [
                          86,
                          95
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILogger",
                            "optional": false,
                            "range": [
                              88,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 2
                              },
                              "start": {
                                "column": 36,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            88,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 2
                            },
                            "start": {
                              "column": 36,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        80,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
                        }
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "range": [
                      73,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "range": [
                60,
                168
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 5
            },
            "start": {
              "column": 50,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LoggerAdapter",
          "optional": false,
          "range": [
            17,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILogger",
              "optional": false,
              "range": [
                42,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 42,
                  "line": 1
                }
              }
            },
            "range": [
              42,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 42,
                "line": 1
              }
            }
          }
        ],
        "superClass": null,
        "range": [
          11,
          174
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 5,
          "line": 5
        },
        "start": {
          "column": 4,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 5
    },
    "start": {
      "column": 4,
      "line": 1
    }
  },
  "hashbang": null
}
```
