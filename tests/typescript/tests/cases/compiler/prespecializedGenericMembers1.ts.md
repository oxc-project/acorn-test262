__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IKitty",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 24,
          "end": 32
        },
        "declare": false,
        "start": 7,
        "end": 32
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cat",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 50
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "CatType",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 58
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IKitty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 73
                },
                "typeArguments": null,
                "start": 67,
                "end": 73
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 51,
              "end": 73
            }
          ],
          "start": 50,
          "end": 74
        },
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
                "start": 81,
                "end": 92
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
                  "body": [],
                  "start": 95,
                  "end": 107
                },
                "expression": false,
                "start": 92,
                "end": 107
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 81,
              "end": 107
            }
          ],
          "start": 75,
          "end": 109
        },
        "abstract": false,
        "declare": false,
        "start": 41,
        "end": 109
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 109
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CatBag",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 130
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
                "start": 137,
                "end": 148
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
                    "name": "cats",
                    "optional": false,
                    "typeAnnotation": {
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
                              "name": "barry",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 162
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cat",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 164,
                                  "end": 167
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IKitty",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 168,
                                        "end": 174
                                      },
                                      "typeArguments": null,
                                      "start": 168,
                                      "end": 174
                                    }
                                  ],
                                  "start": 167,
                                  "end": 175
                                },
                                "start": 164,
                                "end": 175
                              },
                              "start": 162,
                              "end": 175
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 157,
                            "end": 176
                          }
                        ],
                        "start": 155,
                        "end": 178
                      },
                      "start": 153,
                      "end": 178
                    },
                    "start": 149,
                    "end": 178
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 180,
                  "end": 196
                },
                "expression": false,
                "start": 148,
                "end": 196
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 137,
              "end": 196
            }
          ],
          "start": 131,
          "end": 198
        },
        "abstract": false,
        "declare": false,
        "start": 118,
        "end": 198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 111,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cat",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 206
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IKitty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 223
                  },
                  "typeArguments": null,
                  "start": 217,
                  "end": 223
                }
              ],
              "start": 216,
              "end": 224
            },
            "arguments": [],
            "start": 209,
            "end": 226
          },
          "definite": false,
          "start": 203,
          "end": 226
        }
      ],
      "declare": false,
      "start": 199,
      "end": 227
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "catThing",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 240
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "barry",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 249,
                  "end": 254
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cat",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 259
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 249,
                "end": 259
              }
            ],
            "start": 243,
            "end": 261
          },
          "definite": false,
          "start": 232,
          "end": 261
        }
      ],
      "declare": false,
      "start": 228,
      "end": 262
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "catBag",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 273
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "CatBag",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 286
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "catThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 295
              }
            ],
            "start": 276,
            "end": 296
          },
          "definite": false,
          "start": 267,
          "end": 296
        }
      ],
      "declare": false,
      "start": 263,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
