__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 25
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "param",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 33,
                "end": 36
              },
              "start": 31,
              "end": 36
            },
            "start": 26,
            "end": 36
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Wrapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 64
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
                        "end": 78
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "param",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 107
                              },
                              "start": 95,
                              "end": 108
                            }
                          ],
                          "start": 81,
                          "end": 118
                        },
                        "expression": false,
                        "start": 78,
                        "end": 118
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 75,
                      "end": 118
                    }
                  ],
                  "start": 65,
                  "end": 124
                },
                "abstract": false,
                "declare": false,
                "start": 51,
                "end": 124
              },
              "start": 44,
              "end": 124
            }
          ],
          "start": 38,
          "end": 126
        },
        "expression": false,
        "start": 7,
        "end": 126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 151
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 156,
                "end": 158
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 152,
              "end": 158
            }
          ],
          "start": 151,
          "end": 159
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 174
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 176,
                    "end": 179
                  },
                  "start": 176,
                  "end": 181
                },
                "start": 174,
                "end": 181
              },
              "value": null,
              "start": 167,
              "end": 181
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "typeArguments": null,
              "start": 186,
              "end": 187
            },
            "start": 183,
            "end": 187
          },
          "start": 162,
          "end": 187
        },
        "declare": false,
        "start": 135,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 128,
      "end": 188
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Timestamped",
          "optional": false,
          "typeAnnotation": null,
          "start": 206,
          "end": 217
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 223
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 243
                },
                "typeArguments": null,
                "start": 232,
                "end": 243
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 218,
              "end": 243
            }
          ],
          "start": 217,
          "end": 244
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 256
                },
                "typeArguments": null,
                "start": 251,
                "end": 256
              },
              "start": 249,
              "end": 256
            },
            "start": 245,
            "end": 256
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 289
                },
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [
                    {
                      "type": "PropertyDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "timestamp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 309
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 312,
                            "end": 316
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "now",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 317,
                            "end": 320
                          },
                          "optional": false,
                          "computed": false,
                          "start": 312,
                          "end": 320
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 312,
                        "end": 322
                      },
                      "computed": false,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 300,
                      "end": 323
                    }
                  ],
                  "start": 290,
                  "end": 329
                },
                "abstract": false,
                "declare": false,
                "start": 271,
                "end": 329
              },
              "start": 264,
              "end": 330
            }
          ],
          "start": 258,
          "end": 332
        },
        "expression": false,
        "start": 197,
        "end": 332
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 190,
      "end": 332
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 333
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "wrapClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 18
          },
          "importKind": "value",
          "start": 9,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 31
          },
          "importKind": "value",
          "start": 20,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./wrapClass",
        "raw": "\"./wrapClass\"",
        "start": 39,
        "end": 52
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 53
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrapClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 79
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 80,
            "end": 81
          }
        ],
        "optional": false,
        "start": 70,
        "end": 82
      },
      "exportKind": "value",
      "start": 55,
      "end": 83
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "User",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 118
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 129
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 132,
                "end": 134
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 125,
              "end": 135
            }
          ],
          "start": 119,
          "end": 137
        },
        "abstract": false,
        "declare": false,
        "start": 108,
        "end": 137
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 101,
      "end": 137
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TimestampedUser",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 195
        },
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Timestamped",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 215
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 220
            }
          ],
          "optional": false,
          "start": 204,
          "end": 221
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 239
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 252,
                          "end": 257
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 252,
                        "end": 259
                      },
                      "directive": null,
                      "start": 252,
                      "end": 260
                    }
                  ],
                  "start": 242,
                  "end": 266
                },
                "expression": false,
                "start": 239,
                "end": 266
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 228,
              "end": 266
            }
          ],
          "start": 222,
          "end": 268
        },
        "abstract": false,
        "declare": false,
        "start": 174,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 167,
      "end": 268
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
}
```
