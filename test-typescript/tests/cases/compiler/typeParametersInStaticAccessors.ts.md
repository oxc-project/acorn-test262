__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    100
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          99
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                30,
                33
              ],
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                33,
                61
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        54,
                        58
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 2
                        },
                        "start": {
                          "column": 39,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      47,
                      59
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 2
                      },
                      "start": {
                        "column": 32,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                },
                "range": [
                  35,
                  44
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    },
                    "range": [
                      40,
                      44
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          43,
                          44
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 2
                          },
                          "start": {
                            "column": 28,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        43,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 2
                        },
                        "start": {
                          "column": 28,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    37,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 46,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              19,
              61
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 2
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
              "name": "Bar",
              "optional": false,
              "range": [
                77,
                80
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                80,
                97
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  94,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 20,
                        "line": 3
                      }
                    },
                    "range": [
                      82,
                      92
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
                            "name": "v",
                            "optional": false,
                            "range": [
                              86,
                              87
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 24,
                                "line": 3
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
                                "column": 28,
                                "line": 3
                              },
                              "start": {
                                "column": 25,
                                "line": 3
                              }
                            },
                            "range": [
                              87,
                              90
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  89,
                                  90
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                89,
                                90
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 3
                                },
                                "start": {
                                  "column": 27,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            86,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 3
                            },
                            "start": {
                              "column": 24,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        84,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    81,
                    92
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              66,
              97
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
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
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        },
        "range": [
          9,
          12
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
                10,
                11
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              10,
              11
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        99
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
      "column": 2,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
