__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 63,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 66,
      "end": 81,
      "expression": {
        "type": "Identifier",
        "start": 75,
        "end": 80,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 311,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 14,
        "end": 106,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 20,
            "end": 104,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 27,
              "end": 104,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 38,
                "end": 41,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 39,
                    "end": 40,
                    "name": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 40,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 42,
                "end": 104,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 52,
                    "end": 62,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 53,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 55,
                        "end": 61
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 71,
                    "end": 81,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 90,
                    "end": 98,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 94,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 96,
                        "end": 97,
                        "typeName": {
                          "type": "Identifier",
                          "start": 96,
                          "end": 97,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 221,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 115,
        "end": 221,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 128,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 129,
          "end": 221,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 135,
              "end": 219,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 142,
                "end": 219,
                "id": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 153,
                  "decorators": [],
                  "name": "J",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 153,
                  "end": 156,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 154,
                      "end": 155,
                      "name": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 157,
                  "end": 219,
                  "body": [
                    {
                      "type": "TSPropertySignature",
                      "start": 167,
                      "end": 177,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 168,
                        "end": 176,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 170,
                          "end": 176
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 186,
                      "end": 196,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 187,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 187,
                        "end": 195,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 189,
                          "end": 195
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 205,
                      "end": 213,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 205,
                        "end": 209,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 209,
                        "end": 212,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 211,
                          "end": 212,
                          "typeName": {
                            "type": "Identifier",
                            "start": 211,
                            "end": 212,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ClassDeclaration",
      "start": 223,
      "end": 295,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 232,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 295,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 257,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 246,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 248,
                "end": 256,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 248,
                  "end": 253,
                  "left": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 251,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 252,
                    "end": 253,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 253,
                  "end": 256,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 254,
                      "end": 255,
                      "typeName": {
                        "type": "Identifier",
                        "start": 254,
                        "end": 255,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 273,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 289,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 279,
                    "end": 289,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 281,
                      "end": 289,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 281,
                        "end": 286,
                        "left": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 284,
                          "decorators": [],
                          "name": "Baz",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 286,
                          "decorators": [],
                          "name": "J",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 286,
                        "end": 289,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 287,
                            "end": 288,
                            "typeName": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 288,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 291,
                "end": 293,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 296,
      "end": 310,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 305,
          "end": 308,
          "local": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 305,
            "end": 308,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 77,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 77,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 44,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 44,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 30,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 30,
                      "value": "./foo",
                      "raw": "\"./foo\""
                    }
                  },
                  "options": null,
                  "qualifier": null,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 31,
                    "end": 44,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 32,
                        "end": 43,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 33,
                            "end": 42,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 34,
                              "end": 42,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 36,
                                "end": 42
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 47,
              "end": 76,
              "properties": [
                {
                  "type": "Property",
                  "start": 49,
                  "end": 53,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 55,
                  "end": 59,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 58,
                    "end": 59,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 61,
                  "end": 74,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 65,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 67,
                    "end": 74,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 68,
                        "end": 73,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 71,
                          "end": 73,
                          "value": 12,
                          "raw": "12"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 78,
      "end": 161,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 85,
        "end": 161,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 89,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 89,
              "end": 127,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 90,
                "end": 127,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 92,
                  "end": 127,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 99,
                    "end": 107,
                    "literal": {
                      "type": "Literal",
                      "start": 99,
                      "end": 107,
                      "value": "./foo2",
                      "raw": "\"./foo2\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "TSQualifiedName",
                    "start": 109,
                    "end": 114,
                    "left": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 112,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 114,
                    "end": 127,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 115,
                        "end": 126,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 116,
                            "end": 125,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 117,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 117,
                              "end": 125,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 119,
                                "end": 125
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 130,
              "end": 160,
              "properties": [
                {
                  "type": "Property",
                  "start": 132,
                  "end": 137,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 135,
                    "end": 137,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 139,
                  "end": 143,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 142,
                    "end": 143,
                    "value": 0,
                    "raw": "0"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 145,
                  "end": 158,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 149,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 151,
                    "end": 158,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 152,
                        "end": 157,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 153,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 155,
                          "end": 157,
                          "value": 12,
                          "raw": "12"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 163,
      "end": 273,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 170,
        "end": 273,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 176,
          "end": 180,
          "decorators": [],
          "name": "Bar2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 180,
          "end": 183,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 181,
              "end": 182,
              "name": {
                "type": "Identifier",
                "start": 181,
                "end": 182,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 184,
          "end": 273,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 190,
              "end": 239,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 194,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 194,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 196,
                  "end": 238,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 197,
                      "end": 207,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 197,
                        "end": 198,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 198,
                        "end": 206,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 200,
                          "end": 206
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 208,
                      "end": 218,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 209,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 209,
                        "end": 217,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 211,
                          "end": 217
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 219,
                      "end": 229,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 220,
                        "end": 228,
                        "typeAnnotation": {
                          "type": "TSObjectKeyword",
                          "start": 222,
                          "end": 228
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 230,
                      "end": 237,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 234,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 234,
                        "end": 237,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 236,
                          "end": 237,
                          "typeName": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 237,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 244,
              "end": 271,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 244,
                "end": 255,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 255,
                "end": 271,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 256,
                    "end": 267,
                    "decorators": [],
                    "name": "input",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 262,
                      "end": 267,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 264,
                        "end": 267
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 269,
                  "end": 271,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 275,
      "end": 336,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 282,
        "end": 336,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 286,
            "end": 335,
            "id": {
              "type": "Identifier",
              "start": 286,
              "end": 315,
              "decorators": [],
              "name": "shim",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 290,
                "end": 315,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 292,
                  "end": 315,
                  "exprName": {
                    "type": "TSImportType",
                    "start": 299,
                    "end": 315,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 306,
                      "end": 314,
                      "literal": {
                        "type": "Literal",
                        "start": 306,
                        "end": 314,
                        "value": "./foo2",
                        "raw": "\"./foo2\""
                      }
                    },
                    "options": null,
                    "qualifier": null,
                    "typeArguments": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "start": 318,
              "end": 335,
              "properties": [
                {
                  "type": "Property",
                  "start": 324,
                  "end": 333,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 324,
                    "end": 327,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 329,
                    "end": 333,
                    "decorators": [],
                    "name": "Bar2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
