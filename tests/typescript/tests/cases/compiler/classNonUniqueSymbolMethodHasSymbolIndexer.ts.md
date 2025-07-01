__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 39
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
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
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 61,
                        "end": 62
                      },
                      "start": 54,
                      "end": 62
                    }
                  ],
                  "start": 52,
                  "end": 64
                },
                "expression": false,
                "start": 49,
                "end": 64
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 46,
              "end": 64
            }
          ],
          "start": 40,
          "end": 67
        },
        "abstract": false,
        "declare": false,
        "start": 32,
        "end": 67
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 25,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 87
                  },
                  "typeArguments": null,
                  "start": 86,
                  "end": 87
                },
                "indexType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 88,
                  "end": 96
                },
                "start": 86,
                "end": 97
              },
              "start": 84,
              "end": 97
            },
            "start": 82,
            "end": 97
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 97
        }
      ],
      "declare": true,
      "start": 68,
      "end": 98
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 152
      },
      "typeParameters": null,
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
              "start": 163,
              "end": 167
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 169,
                  "end": 172
                },
                "start": 169,
                "end": 174
              },
              "start": 167,
              "end": 174
            },
            "value": null,
            "start": 160,
            "end": 174
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 179,
            "end": 181
          },
          "start": 176,
          "end": 181
        },
        "start": 155,
        "end": 181
      },
      "declare": false,
      "start": 136,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mix",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 203
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 204,
              "end": 205
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 225
              },
              "typeArguments": null,
              "start": 214,
              "end": 225
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 225
          }
        ],
        "start": 203,
        "end": 226
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "classish",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "typeArguments": null,
              "start": 237,
              "end": 238
            },
            "start": 235,
            "end": 238
          },
          "start": 227,
          "end": 238
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "typeArguments": null,
              "start": 241,
              "end": 242
            },
            {
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
                    "start": 254,
                    "end": 258
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 260,
                        "end": 263
                      },
                      "start": 260,
                      "end": 265
                    },
                    "start": 258,
                    "end": 265
                  },
                  "value": null,
                  "start": 251,
                  "end": 265
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 276
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 278,
                            "end": 282
                          },
                          "start": 278,
                          "end": 282
                        },
                        "start": 276,
                        "end": 282
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 271,
                      "end": 282
                    }
                  ],
                  "start": 270,
                  "end": 283
                },
                "start": 267,
                "end": 283
              },
              "start": 246,
              "end": 283
            }
          ],
          "start": 241,
          "end": 284
        },
        "start": 239,
        "end": 284
      },
      "body": null,
      "expression": false,
      "start": 183,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixer",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 305
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mix",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 311
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": null,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 326
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
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 339,
                                  "end": 340
                                },
                                "start": 332,
                                "end": 340
                              }
                            ],
                            "start": 330,
                            "end": 342
                          },
                          "expression": false,
                          "start": 327,
                          "end": 342
                        },
                        "kind": "method",
                        "computed": true,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 324,
                        "end": 342
                      }
                    ],
                    "start": 318,
                    "end": 345
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 312,
                  "end": 345
                }
              ],
              "optional": false,
              "start": 308,
              "end": 346
            },
            "definite": false,
            "start": 300,
            "end": 346
          }
        ],
        "declare": false,
        "start": 294,
        "end": 347
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 347
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
