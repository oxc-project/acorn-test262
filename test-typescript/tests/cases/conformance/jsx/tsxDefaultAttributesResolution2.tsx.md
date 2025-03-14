__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    202
  ],
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "range": [
          7,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "raw": "'react'",
          "value": "react",
          "range": [
            23,
            30
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 1
            },
            "start": {
              "column": 23,
              "line": 1
            }
          }
        },
        "range": [
          15,
          31
        ],
        "loc": {
          "end": {
            "column": 31,
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
        32
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          49,
          65
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                55,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                56,
                62
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    58,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 7,
                      "line": 4
                    }
                  }
                },
                "range": [
                  58,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              55,
              63
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "range": [
          44,
          48
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        34,
        65
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          115,
          172
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "range": [
                121,
                127
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                127,
                170
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "JSXElement",
                      "children": [
                        {
                          "type": "JSXText",
                          "range": [
                            152,
                            157
                          ],
                          "raw": "Hello",
                          "value": "Hello",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            159,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 8
                            },
                            "start": {
                              "column": 27,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          157,
                          163
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 8
                          }
                        }
                      },
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "attributes": [],
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "range": [
                            148,
                            151
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "selfClosing": false,
                        "range": [
                          147,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        147,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      140,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  130,
                  170
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 13,
                    "line": 7
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
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              121,
              170
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 49,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Poisoned",
        "optional": false,
        "range": [
          72,
          80
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "range": [
            89,
            94
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 6
            },
            "start": {
              "column": 23,
              "line": 6
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "range": [
            95,
            104
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 29,
              "line": 6
            }
          }
        },
        "range": [
          89,
          104
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          104,
          114
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prop",
              "optional": false,
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 6
                },
                "start": {
                  "column": 39,
                  "line": 6
                }
              }
            },
            "range": [
              105,
              109
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 39,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              111,
              113
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 6
              },
              "start": {
                "column": 45,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 6
          },
          "start": {
            "column": 38,
            "line": 6
          }
        }
      },
      "range": [
        66,
        172
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "p",
            "optional": false,
            "range": [
              184,
              185
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "JSXElement",
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "range": [
                188,
                201
              ],
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "range": [
                      198,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    198,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 18,
                      "line": 13
                    }
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "name": "Poisoned",
                "range": [
                  189,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
                  }
                }
              },
              "selfClosing": true,
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              188,
              201
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 8,
                "line": 13
              }
            }
          },
          "range": [
            184,
            201
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        180,
        202
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 22,
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
