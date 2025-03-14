__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    151
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          55
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                18,
                29
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                29,
                53
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  46,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
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
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 2
                      },
                      "start": {
                        "column": 20,
                        "line": 2
                      }
                    },
                    "range": [
                      34,
                      44
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        },
                        "range": [
                          38,
                          44
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "range": [
                              40,
                              44
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 2
                              },
                              "start": {
                                "column": 26,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            40,
                            44
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 2
                            },
                            "start": {
                              "column": 26,
                              "line": 2
                            }
                          }
                        }
                      },
                      "range": [
                        36,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 2
                        },
                        "start": {
                          "column": 22,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    30,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              53
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          7,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1,
        55
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 1,
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
          81,
          151
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                87,
                98
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
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
                98,
                149
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "ThisExpression",
                            "range": [
                              124,
                              128
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            118,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          111,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        111,
                        130
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      111,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  101,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
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
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              87,
              149
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
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
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 25,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Super",
        "optional": false,
        "range": [
          62,
          67
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          76,
          80
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 20,
            "line": 5
          }
        }
      },
      "range": [
        56,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
      "column": 1,
      "line": 9
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
