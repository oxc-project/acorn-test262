__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 333,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 126,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 126,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 25,
          "name": "wrapClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 36,
            "name": "param",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 36,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 38,
          "end": 126,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 44,
              "end": 124,
              "argument": {
                "type": "ClassExpression",
                "start": 51,
                "end": 124,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "name": "Wrapped",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "superClass": null,
                "body": {
                  "type": "ClassBody",
                  "start": 65,
                  "end": 124,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 75,
                      "end": 118,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 78,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "method",
                      "value": {
                        "type": "FunctionExpression",
                        "start": 78,
                        "end": 118,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 81,
                          "end": 118,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 95,
                              "end": 108,
                              "argument": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 107,
                                "name": "param",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          ]
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
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 188,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 135,
        "end": 188,
        "id": {
          "type": "Identifier",
          "start": 140,
          "end": 151,
          "name": "Constructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 151,
          "end": 159,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 152,
              "end": 158,
              "name": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "start": 156,
                "end": 158,
                "members": []
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "start": 162,
          "end": 187,
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 167,
              "end": 181,
              "argument": {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 181,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 176,
                  "end": 181,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 176,
                    "end": 179
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 187,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 187,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
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
      "start": 190,
      "end": 332,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 197,
        "end": 332,
        "id": {
          "type": "Identifier",
          "start": 206,
          "end": 217,
          "name": "Timestamped",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 245,
            "end": 256,
            "name": "Base",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 256,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 256,
                  "name": "TBase",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 258,
          "end": 332,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 264,
              "end": 330,
              "argument": {
                "type": "ClassExpression",
                "start": 271,
                "end": 329,
                "id": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 289,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "ClassBody",
                  "start": 290,
                  "end": 329,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 300,
                      "end": 323,
                      "static": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 309,
                        "name": "timestamp",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "CallExpression",
                        "start": 312,
                        "end": 322,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 312,
                          "end": 320,
                          "object": {
                            "type": "Identifier",
                            "start": 312,
                            "end": 316,
                            "name": "Date",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 320,
                            "name": "now",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "decorators": [],
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "typeAnnotation": null,
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
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 217,
          "end": 244,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 218,
              "end": 243,
              "name": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "name": "TBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 243,
                  "name": "Constructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 268,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 53,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "wrapClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "name": "wrapClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "name": "Timestamped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "name": "Timestamped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 52,
        "value": "./wrapClass",
        "raw": "\"./wrapClass\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 55,
      "end": 83,
      "declaration": {
        "type": "CallExpression",
        "start": 70,
        "end": 82,
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 79,
          "name": "wrapClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 101,
      "end": 137,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 108,
        "end": 137,
        "id": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "name": "User",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 119,
          "end": 137,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 125,
              "end": 135,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 132,
                "end": 134,
                "value": "",
                "raw": "''"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
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
      "start": 167,
      "end": 268,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 174,
        "end": 268,
        "id": {
          "type": "Identifier",
          "start": 180,
          "end": 195,
          "name": "TimestampedUser",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "CallExpression",
          "start": 204,
          "end": 221,
          "callee": {
            "type": "Identifier",
            "start": 204,
            "end": 215,
            "name": "Timestamped",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "name": "User",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 222,
          "end": 268,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 228,
              "end": 266,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 239,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 239,
                "end": 266,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 242,
                  "end": 266,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 252,
                      "end": 260,
                      "expression": {
                        "type": "CallExpression",
                        "start": 252,
                        "end": 259,
                        "callee": {
                          "type": "Super",
                          "start": 252,
                          "end": 257
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
