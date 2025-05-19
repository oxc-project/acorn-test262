__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 76,
  "end": 279,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 76,
      "end": 161,
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 161,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 131,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 115,
              "end": 131,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 159,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 159,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 149,
                  "end": 158,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 158,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 150,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 152,
                        "end": 158
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 94,
        "end": 101,
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 97,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 101,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 163,
      "end": 218,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 218,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 193,
            "end": 216,
            "declaration": {
              "type": "MemberExpression",
              "start": 208,
              "end": 215,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 211,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 178,
        "end": 186,
        "raw": "\"foobar\"",
        "value": "foobar"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 220,
      "end": 278,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 245,
        "end": 278,
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "start": 251,
            "end": 276,
            "declaration": {
              "type": "MemberExpression",
              "start": 266,
              "end": 275,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 266,
                "end": 273,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 273,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 235,
        "end": 244,
        "raw": "\"foobarx\"",
        "value": "foobarx"
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
  "end": 140,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 119,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 62,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 62,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 35,
                    "end": 60,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 46,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 58,
                        "end": 60,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 56,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 56,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 67,
            "end": 117,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 74,
              "end": 117,
              "body": {
                "type": "TSModuleBlock",
                "start": 86,
                "end": 117,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 88,
                    "end": 115,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 95,
                      "end": 115,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 101,
                          "end": 114,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "start": 113,
                            "end": 114,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 120,
      "end": 139,
      "declaration": {
        "type": "MemberExpression",
        "start": 135,
        "end": 138,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value"
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
  "end": 29,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 28,
      "declaration": {
        "type": "MemberExpression",
        "start": 15,
        "end": 27,
        "computed": false,
        "object": {
          "type": "Literal",
          "start": 15,
          "end": 20,
          "raw": "\"foo\"",
          "value": "foo"
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value"
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
  "start": 43,
  "end": 245,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 71,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 70,
        "raw": "\"foobar\"",
        "value": "foobar"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 50,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 72,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 83,
        "end": 91,
        "left": {
          "type": "Identifier",
          "start": 83,
          "end": 89,
          "decorators": [],
          "name": "fooBar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 93,
      "end": 118,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 117,
        "raw": "\"foobarx\"",
        "value": "foobarx"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 100,
          "end": 102,
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 133,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 147,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 147,
                  "decorators": [],
                  "name": "X2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "decorators": [],
            "name": "X2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ImportDeclaration",
      "start": 155,
      "end": 175,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 169,
        "end": 174,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 162,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 199,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 189,
            "end": 199,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 195,
                "end": 198,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ImportDeclaration",
      "start": 202,
      "end": 230,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 229,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 209,
          "end": 218,
          "local": {
            "type": "Identifier",
            "start": 209,
            "end": 218,
            "decorators": [],
            "name": "fooLength",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 245,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 231,
        "end": 244,
        "operator": "+",
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 240,
          "decorators": [],
          "name": "fooLength",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 243,
          "end": 244,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
