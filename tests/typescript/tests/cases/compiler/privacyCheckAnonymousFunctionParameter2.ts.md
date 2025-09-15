__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 15,
              "end": 16
            },
            "definite": false,
            "start": 11,
            "end": 16
          }
        ],
        "declare": false,
        "start": 7,
        "end": 17
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 17
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Iterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
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
                  "start": 80,
                  "end": 81
                },
                "typeArguments": null,
                "start": 80,
                "end": 81
              },
              "start": 78,
              "end": 81
            },
            "accessibility": null,
            "static": false,
            "start": 77,
            "end": 81
          }
        ],
        "start": 75,
        "end": 83
      },
      "declare": false,
      "start": 53,
      "end": 83
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 122
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
                      "start": 123,
                      "end": 124
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 123,
                    "end": 124
                  }
                ],
                "start": 122,
                "end": 125
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 133,
                                "end": 141
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 142,
                                      "end": 143
                                    },
                                    "typeArguments": null,
                                    "start": 142,
                                    "end": 143
                                  }
                                ],
                                "start": 141,
                                "end": 144
                              },
                              "start": 133,
                              "end": 144
                            },
                            "start": 131,
                            "end": 144
                          },
                          "start": 130,
                          "end": 144
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 149,
                          "end": 155
                        },
                        "start": 146,
                        "end": 155
                      },
                      "start": 129,
                      "end": 155
                    },
                    "start": 127,
                    "end": 155
                  },
                  "start": 126,
                  "end": 155
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "start": 167,
                    "end": 176
                  }
                ],
                "start": 157,
                "end": 182
              },
              "expression": false,
              "start": 110,
              "end": 182
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 103,
            "end": 182
          }
        ],
        "start": 97,
        "end": 184
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 85,
      "end": 184
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Q",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 197
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 216
            },
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 232
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 233,
                        "end": 237
                      }
                    ],
                    "optional": false,
                    "start": 229,
                    "end": 238
                  },
                  "directive": null,
                  "start": 229,
                  "end": 239
                }
              ],
              "start": 219,
              "end": 245
            },
            "expression": false,
            "start": 204,
            "end": 245
          }
        ],
        "start": 198,
        "end": 247
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 247
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
