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
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 36,
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 36,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              }
            }
          }
        ],
        "returnType": null,
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
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 65,
                  "end": 124,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 75,
                      "end": 118,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 78,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 78,
                        "end": 118,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
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
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Timestamped",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 232,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 232,
                  "end": 243,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null
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
        "params": [
          {
            "type": "Identifier",
            "start": 245,
            "end": 256,
            "decorators": [],
            "name": "Base",
            "optional": false,
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
                  "decorators": [],
                  "name": "TBase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
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
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 289,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 290,
                  "end": 329,
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "start": 300,
                      "end": 323,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 309,
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": null,
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
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 320,
                            "decorators": [],
                            "name": "now",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null
                    }
                  ]
                },
                "abstract": false,
                "declare": false
              }
            }
          ]
        },
        "expression": false
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
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 18,
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "User",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 119,
          "end": 137,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 125,
              "end": 135,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 125,
                "end": 129,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 132,
                "end": 134,
                "value": "",
                "raw": "''"
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
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
      "start": 167,
      "end": 268,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 174,
        "end": 268,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 180,
          "end": 195,
          "decorators": [],
          "name": "TimestampedUser",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "start": 204,
          "end": 221,
          "callee": {
            "type": "Identifier",
            "start": 204,
            "end": 215,
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 216,
              "end": 220,
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 222,
          "end": 268,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 228,
              "end": 266,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 228,
                "end": 239,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 239,
                "end": 266,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
