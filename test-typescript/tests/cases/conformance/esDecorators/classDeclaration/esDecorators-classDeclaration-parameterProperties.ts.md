__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    109
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
            "name": "bound",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                22
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  19,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 1
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
          33,
          108
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                39,
                50
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                50,
                78
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  76,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 4
                  },
                  "start": {
                    "column": 41,
                    "line": 4
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
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      },
                      "range": [
                        66,
                        74
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          68,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 4
                          },
                          "start": {
                            "column": 33,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      59,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    51,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              39,
              78
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bound",
                  "optional": false,
                  "range": [
                    85,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 5,
                      "line": 6
                    }
                  }
                },
                "range": [
                  84,
                  90
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "speak",
              "optional": false,
              "range": [
                91,
                96
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 6
                },
                "start": {
                  "column": 11,
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
                96,
                106
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  99,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
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
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              }
            },
            "range": [
              84,
              106
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
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
            "line": 8
          },
          "start": {
            "column": 8,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          31,
          32
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        25,
        108
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
