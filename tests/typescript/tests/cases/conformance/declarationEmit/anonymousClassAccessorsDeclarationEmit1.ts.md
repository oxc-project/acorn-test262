__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 41
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 44,
                "end": 45
              },
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 31,
              "end": 46
            }
          ],
          "start": 27,
          "end": 48
        },
        "abstract": true,
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "middle",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 72
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Super",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 78
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 85
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 85
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Middle",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 112
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Super",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 126
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 127,
                "end": 129
              },
              "abstract": true,
              "declare": false,
              "start": 91,
              "end": 129
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "Middle",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 145
              },
              "start": 132,
              "end": 146
            }
          ],
          "start": 87,
          "end": 148
        },
        "expression": false,
        "start": 57,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 157
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 173
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                    "start": 177,
                    "end": 181
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 183,
                        "end": 186
                      },
                      "start": 183,
                      "end": 188
                    },
                    "start": 181,
                    "end": 188
                  },
                  "value": null,
                  "start": 174,
                  "end": 188
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 190,
                "end": 192
              },
              "expression": false,
              "start": 173,
              "end": 192
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 192
          }
        ],
        "start": 158,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 150,
      "end": 194
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "constraint": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "typeArguments": null,
                "start": 228,
                "end": 236
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 218,
              "end": 236
            }
          ],
          "start": 217,
          "end": 237
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Super",
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
                  "start": 245,
                  "end": 246
                },
                "typeArguments": null,
                "start": 245,
                "end": 246
              },
              "start": 243,
              "end": 246
            },
            "start": 238,
            "end": 246
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
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 266
                },
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Super",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 280
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
                        "name": "myName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 291,
                        "end": 297
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 301,
                            "end": 307
                          },
                          "start": 299,
                          "end": 307
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": "B",
                                "raw": "\"B\"",
                                "start": 323,
                                "end": 326
                              },
                              "start": 316,
                              "end": 327
                            }
                          ],
                          "start": 308,
                          "end": 333
                        },
                        "expression": false,
                        "start": 297,
                        "end": 333
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 287,
                      "end": 333
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myName",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 342,
                        "end": 348
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 354,
                                "end": 360
                              },
                              "start": 352,
                              "end": 360
                            },
                            "start": 349,
                            "end": 360
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 362,
                          "end": 364
                        },
                        "expression": false,
                        "start": 348,
                        "end": 364
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 338,
                      "end": 364
                    }
                  ],
                  "start": 281,
                  "end": 368
                },
                "abstract": false,
                "declare": false,
                "start": 259,
                "end": 368
              },
              "start": 252,
              "end": 369
            }
          ],
          "start": 248,
          "end": 371
        },
        "expression": false,
        "start": 203,
        "end": 371
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 196,
      "end": 371
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
