__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    114
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "range": [
          7,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"garbage\"",
          "value": "garbage",
          "range": [
            20,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          12,
          30
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        32,
        113
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 5
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                },
                "range": [
                  52,
                  112
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
                        "name": "test1",
                        "optional": false,
                        "range": [
                          60,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 3
                          },
                          "start": {
                            "column": 4,
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
                            "column": 27,
                            "line": 3
                          },
                          "start": {
                            "column": 9,
                            "line": 3
                          }
                        },
                        "range": [
                          65,
                          83
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "range": [
                                67,
                                69
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 3
                                },
                                "start": {
                                  "column": 11,
                                  "line": 3
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectModule",
                              "optional": false,
                              "range": [
                                70,
                                83
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 3
                                },
                                "start": {
                                  "column": 14,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              67,
                              83
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 3
                              },
                              "start": {
                                "column": 11,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            67,
                            83
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 3
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        60,
                        84
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 3
                        },
                        "start": {
                          "column": 4,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 4
                          },
                          "start": {
                            "column": 6,
                            "line": 4
                          }
                        },
                        "range": [
                          91,
                          109
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a1",
                              "optional": false,
                              "range": [
                                93,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 4
                                },
                                "start": {
                                  "column": 8,
                                  "line": 4
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "connectExport",
                              "optional": false,
                              "range": [
                                96,
                                109
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 4
                                },
                                "start": {
                                  "column": 11,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              93,
                              109
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 4
                              },
                              "start": {
                                "column": 8,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            93,
                            109
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        89,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    54,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                51,
                112
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "init": null,
            "range": [
              51,
              112
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 19,
                "line": 2
              }
            }
          }
        ],
        "declare": true,
        "kind": "var",
        "range": [
          39,
          113
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 5
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
      "column": 0,
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
