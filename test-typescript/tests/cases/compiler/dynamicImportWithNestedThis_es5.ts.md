__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    174
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          64,
          141
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_path",
              "optional": false,
              "range": [
                75,
                80
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "'./other'",
              "value": "./other",
              "range": [
                83,
                92
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "range": [
              67,
              93
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
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
              "name": "dynamic",
              "optional": false,
              "range": [
                96,
                103
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 1,
                  "line": 5
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
                103,
                139
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ImportExpression",
                      "options": null,
                      "source": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            124,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_path",
                          "optional": false,
                          "range": [
                            129,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 6
                            },
                            "start": {
                              "column": 21,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          124,
                          134
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        117,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 6
                        },
                        "start": {
                          "column": 9,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      110,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 2,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  106,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
                    "line": 5
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
                  "column": 2,
                  "line": 7
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              96,
              139
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 7
              },
              "start": {
                "column": 1,
                "line": 5
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
            "line": 2
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
        141
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "c",
            "optional": false,
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                157,
                158
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "range": [
              153,
              160
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            149,
            160
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        143,
        161
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              162,
              163
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "dynamic",
            "optional": false,
            "range": [
              164,
              171
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          "range": [
            162,
            171
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          162,
          173
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        162,
        174
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
