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
      "id": {
        "type": "TSQualifiedName",
        "start": 94,
        "end": 101,
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 97,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 101,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 161,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 108,
            "end": 131,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 115,
              "end": 131,
              "id": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 124,
                "end": 130
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 136,
            "end": 159,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 143,
              "end": 159,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 149,
                  "end": 158,
                  "id": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 158,
                    "name": "X",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 150,
                      "end": 158,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 152,
                        "end": 158
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 163,
      "end": 218,
      "id": {
        "type": "Literal",
        "start": 178,
        "end": 186,
        "value": "foobar",
        "raw": "\"foobar\""
      },
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
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 211,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 220,
      "end": 278,
      "id": {
        "type": "Literal",
        "start": 235,
        "end": 244,
        "value": "foobarx",
        "raw": "\"foobarx\""
      },
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
              "object": {
                "type": "MemberExpression",
                "start": 266,
                "end": 273,
                "object": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 269,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 273,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 62,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 35,
                    "end": 60,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 46,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 60,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 47,
                          "end": 56,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 56,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 50,
                              "end": 56
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 58,
                        "end": 60,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 67,
            "end": 117,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 74,
              "end": 117,
              "id": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 86,
                "end": 117,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 88,
                    "end": 115,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 95,
                      "end": 115,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 101,
                          "end": 114,
                          "id": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "name": "b",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 102,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 104,
                                "end": 110
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 113,
                            "end": 114,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "const",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 120,
      "end": 139,
      "declaration": {
        "type": "MemberExpression",
        "start": 135,
        "end": 138,
        "object": {
          "type": "Identifier",
          "start": 135,
          "end": 136,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
        "object": {
          "type": "Literal",
          "start": 15,
          "end": 20,
          "value": "foo",
          "raw": "\"foo\""
        },
        "property": {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
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
  "end": 246,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 43,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 50,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 56,
            "name": "fooBar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 62,
        "end": 70,
        "value": "foobar",
        "raw": "\"foobar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 72,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 83,
        "end": 91,
        "left": {
          "type": "Identifier",
          "start": 83,
          "end": 89,
          "name": "fooBar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "X",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 93,
      "end": 118,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 100,
          "end": 102,
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 102,
            "name": "X2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 117,
        "value": "foobarx",
        "raw": "\"foobarx\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 147,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 147,
                  "name": "X2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "name": "X2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 155,
      "end": 175,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 162,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 169,
        "end": 174,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 186,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 186,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 185,
                "end": 186,
                "typeName": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 189,
            "end": 199,
            "callee": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 195,
                "end": 198,
                "object": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ImportDeclaration",
      "start": 202,
      "end": 230,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 209,
          "end": 218,
          "local": {
            "type": "Identifier",
            "start": 209,
            "end": 218,
            "name": "fooLength",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 224,
        "end": 229,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 245,
      "expression": {
        "type": "BinaryExpression",
        "start": 231,
        "end": 244,
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 240,
          "name": "fooLength",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "start": 243,
          "end": 244,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
