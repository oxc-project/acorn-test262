__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    163
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Log",
            "optional": false,
            "range": [
              6,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "info",
                  "optional": false,
                  "range": [
                    16,
                    20
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 2
                    },
                    "start": {
                      "column": 2,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    20,
                    36
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      34,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
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
                      "name": "msg",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 10,
                            "line": 2
                          }
                        },
                        "range": [
                          24,
                          32
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            26,
                            32
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 2
                            },
                            "start": {
                              "column": 12,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        21,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 2
                        },
                        "start": {
                          "column": 7,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "range": [
                  16,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 2,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              12,
              38
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "range": [
            6,
            38
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
          57,
          162
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                61,
                72
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
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
                100
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  95,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 7
                  },
                  "start": {
                    "column": 36,
                    "line": 6
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
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 26,
                          "line": 6
                        }
                      },
                      "range": [
                        85,
                        93
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          87,
                          93
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
                      }
                    },
                    "range": [
                      81,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    73,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 14,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              61,
              100
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hello",
              "optional": false,
              "range": [
                111,
                116
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
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
                116,
                160
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "TemplateLiteral",
                          "expressions": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  143,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 10
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
                                  148,
                                  152
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                143,
                                152
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 10
                                },
                                "start": {
                                  "column": 22,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "tail": false,
                              "value": {
                                "cooked": "Hello ",
                                "raw": "Hello "
                              },
                              "range": [
                                134,
                                143
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 10
                                },
                                "start": {
                                  "column": 13,
                                  "line": 10
                                }
                              }
                            },
                            {
                              "type": "TemplateElement",
                              "tail": true,
                              "value": {
                                "cooked": "",
                                "raw": ""
                              },
                              "range": [
                                152,
                                154
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 10
                                },
                                "start": {
                                  "column": 31,
                                  "line": 10
                                }
                              }
                            }
                          ],
                          "range": [
                            134,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 10
                            },
                            "start": {
                              "column": 13,
                              "line": 10
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
                          "name": "Log",
                          "optional": false,
                          "range": [
                            125,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 10
                            },
                            "start": {
                              "column": 4,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "info",
                          "optional": false,
                          "range": [
                            129,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          125,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 10
                          },
                          "start": {
                            "column": 4,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        125,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      125,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  119,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 9
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
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              104,
              160
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HelloWorld",
        "optional": false,
        "range": [
          46,
          56
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        40,
        162
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
