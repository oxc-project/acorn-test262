__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 80
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
                    "start": 84,
                    "end": 88
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 90,
                        "end": 93
                      },
                      "start": 90,
                      "end": 95
                    },
                    "start": 88,
                    "end": 95
                  },
                  "value": null,
                  "start": 81,
                  "end": 95
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 97,
                "end": 99
              },
              "expression": false,
              "start": 80,
              "end": 99
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 69,
            "end": 99
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
              "start": 106,
              "end": 112
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
                  "start": 116,
                  "end": 122
                },
                "start": 114,
                "end": 122
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 136,
                      "end": 139
                    },
                    "start": 129,
                    "end": 140
                  }
                ],
                "start": 123,
                "end": 144
              },
              "expression": false,
              "start": 112,
              "end": 144
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 102,
            "end": 144
          }
        ],
        "start": 65,
        "end": 146
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 162
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
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 181
              },
              "typeArguments": null,
              "start": 173,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 181
          }
        ],
        "start": 162,
        "end": 182
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
                "start": 190,
                "end": 191
              },
              "typeArguments": null,
              "start": 190,
              "end": 191
            },
            "start": 188,
            "end": 191
          },
          "start": 183,
          "end": 191
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
                "start": 210,
                "end": 211
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Super",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 225
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
                      "start": 236,
                      "end": 242
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
                          "start": 246,
                          "end": 252
                        },
                        "start": 244,
                        "end": 252
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
                              "start": 268,
                              "end": 271
                            },
                            "start": 261,
                            "end": 272
                          }
                        ],
                        "start": 253,
                        "end": 278
                      },
                      "expression": false,
                      "start": 242,
                      "end": 278
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 232,
                    "end": 278
                  }
                ],
                "start": 226,
                "end": 282
              },
              "abstract": false,
              "declare": false,
              "start": 204,
              "end": 282
            },
            "start": 197,
            "end": 283
          }
        ],
        "start": 193,
        "end": 285
      },
      "expression": false,
      "start": 148,
      "end": 285
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 294
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 303,
          "end": 308
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 310
          }
        ],
        "optional": false,
        "start": 303,
        "end": 311
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
              "start": 320,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 330,
                  "end": 336
                },
                "start": 328,
                "end": 336
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "\"C\"",
                      "start": 350,
                      "end": 353
                    },
                    "start": 343,
                    "end": 354
                  }
                ],
                "start": 337,
                "end": 358
              },
              "expression": false,
              "start": 326,
              "end": 358
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 316,
            "end": 358
          }
        ],
        "start": 312,
        "end": 360
      },
      "abstract": false,
      "declare": false,
      "start": 287,
      "end": 360
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 360
}
```
