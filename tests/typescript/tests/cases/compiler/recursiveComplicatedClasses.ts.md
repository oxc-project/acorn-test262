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
        "name": "Signature",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
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
              "name": "parameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ParameterSymbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 56
                },
                "start": 41,
                "end": 58
              },
              "start": 39,
              "end": 58
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 61,
              "end": 65
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 22,
            "end": 66
          }
        ],
        "start": 16,
        "end": 68
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "aEnclosesB",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 89
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 99
              },
              "typeArguments": null,
              "start": 93,
              "end": 99
            },
            "start": 91,
            "end": 99
          },
          "start": 90,
          "end": 99
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 114,
              "end": 118
            },
            "start": 107,
            "end": 119
          }
        ],
        "start": 101,
        "end": 121
      },
      "expression": false,
      "start": 70,
      "end": 121
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Symbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 129,
        "end": 135
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
              "name": "bound",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              },
              "start": 154,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 142,
            "end": 164
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 183
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TypeSymbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 203,
                                "end": 213
                              },
                              "typeArguments": null,
                              "start": 203,
                              "end": 213
                            },
                            "start": 201,
                            "end": 213
                          },
                          "start": 200,
                          "end": 213
                        },
                        "init": null,
                        "definite": false,
                        "start": 200,
                        "end": 213
                      }
                    ],
                    "declare": false,
                    "start": 196,
                    "end": 214
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "aEnclosesB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 240
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 242
                        }
                      ],
                      "optional": false,
                      "start": 230,
                      "end": 243
                    },
                    "start": 223,
                    "end": 244
                  }
                ],
                "start": 186,
                "end": 250
              },
              "expression": false,
              "start": 183,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 169,
            "end": 250
          }
        ],
        "start": 136,
        "end": 253
      },
      "abstract": false,
      "declare": false,
      "start": 123,
      "end": 253
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 275
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Symbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 290
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 291,
        "end": 294
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 294
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ParameterSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 317
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 341
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 342,
        "end": 345
      },
      "abstract": false,
      "declare": false,
      "start": 296,
      "end": 345
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 363
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 387
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 388,
        "end": 391
      },
      "abstract": false,
      "declare": false,
      "start": 347,
      "end": 391
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 391
}
```
