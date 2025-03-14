__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    166
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        72
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Errors",
          "optional": false,
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "constraint": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "range": [
                      47,
                      48
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 1
                      },
                      "start": {
                        "column": 47,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    47,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 1
                    },
                    "start": {
                      "column": 47,
                      "line": 1
                    }
                  }
                },
                "range": [
                  41,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"base\"",
                  "value": "base",
                  "range": [
                    51,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 1
                    },
                    "start": {
                      "column": 51,
                      "line": 1
                    }
                  }
                },
                "range": [
                  51,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 51,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              41,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          },
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            }
          },
          "nameType": null,
          "optional": true,
          "readonly": true,
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "range": [
                61,
                67
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 1
                },
                "start": {
                  "column": 61,
                  "line": 1
                }
              }
            },
            "range": [
              61,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 61,
                "line": 1
              }
            }
          },
          "range": [
            24,
            71
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 21,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          },
          "range": [
            18,
            21
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  19,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 19,
                    "line": 1
                  }
                }
              },
              "out": false,
              "range": [
                19,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            }
          ]
        },
        "range": [
          7,
          72
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 72,
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
          89,
          165
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getErrors",
              "optional": false,
              "range": [
                93,
                102
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                102,
                163
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "range": [
                              131,
                              135
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 5
                              },
                              "start": {
                                "column": 13,
                                "line": 5
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "raw": "\"some base error\"",
                                "value": "some base error",
                                "range": [
                                  138,
                                  155
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 5
                                  }
                                }
                              }
                            ],
                            "range": [
                              137,
                              156
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            131,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        129,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      122,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 4
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
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                },
                "range": [
                  104,
                  115
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      112,
                      115
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            113,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 4
                            },
                            "start": {
                              "column": 22,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          113,
                          114
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 4
                          },
                          "start": {
                            "column": 22,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "range": [
                      106,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    106,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              93,
              163
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
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
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "range": [
          80,
          85
        ],
        "loc": {
          "end": {
            "column": 11,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        },
        "range": [
          85,
          88
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                86,
                87
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              86,
              87
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        74,
        165
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
