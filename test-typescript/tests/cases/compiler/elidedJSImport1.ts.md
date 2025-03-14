__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    217
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                66,
                94
              ],
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      76,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
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
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    },
                    "range": [
                      79,
                      87
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        81,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    76,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ContractObject",
              "optional": false,
              "range": [
                51,
                65
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              41,
              94
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
            "type": "TSModuleDeclaration",
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "range": [
                    135,
                    173
                  ],
                  "attributes": [],
                  "declaration": {
                    "type": "TSTypeAliasDeclaration",
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Contract",
                      "optional": false,
                      "range": [
                        147,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContractObject",
                        "optional": false,
                        "range": [
                          158,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 31,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        158,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 6
                        },
                        "start": {
                          "column": 31,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      142,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "exportKind": "type",
                  "source": null,
                  "specifiers": [],
                  "loc": {
                    "end": {
                      "column": 46,
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
                125,
                179
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "range": [
                109,
                124
              ],
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "kind": "namespace",
            "range": [
              99,
              179
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "TruffleContract",
              "optional": false,
              "range": [
                199,
                214
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            },
            "exportKind": "value",
            "range": [
              184,
              215
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          35,
          217
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 35,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"@truffle/contract\"",
        "value": "@truffle/contract",
        "range": [
          15,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        217
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
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
