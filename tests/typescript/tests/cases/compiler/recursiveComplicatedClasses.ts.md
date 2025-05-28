__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 391,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "Signature",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 66,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 39,
              "decorators": [],
              "name": "parameters",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 58,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 41,
                "end": 58,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 56,
                    "decorators": [],
                    "name": "ParameterSymbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 61,
              "end": 65,
              "value": null,
              "raw": "null"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 89,
        "decorators": [],
        "name": "aEnclosesB",
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
          "start": 90,
          "end": 99,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 99,
                "decorators": [],
                "name": "Symbol",
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
        "start": 101,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 119,
            "argument": {
              "type": "Literal",
              "start": 114,
              "end": 118,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 123,
      "end": 253,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 135,
        "decorators": [],
        "name": "Symbol",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 142,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 154,
              "decorators": [],
              "name": "bound",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 169,
            "end": 250,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
              "decorators": [],
              "name": "visible",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 183,
              "end": 250,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 186,
                "end": 250,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 196,
                    "end": 214,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 200,
                        "end": 213,
                        "id": {
                          "type": "Identifier",
                          "start": 200,
                          "end": 213,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 201,
                            "end": 213,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 203,
                              "end": 213,
                              "typeName": {
                                "type": "Identifier",
                                "start": 203,
                                "end": 213,
                                "decorators": [],
                                "name": "TypeSymbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 223,
                    "end": 244,
                    "argument": {
                      "type": "CallExpression",
                      "start": 230,
                      "end": 243,
                      "callee": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 240,
                        "decorators": [],
                        "name": "aEnclosesB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 241,
                          "end": 242,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 294,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 275,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 284,
        "end": 290,
        "decorators": [],
        "name": "Symbol",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 291,
        "end": 294,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 345,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 317,
        "decorators": [],
        "name": "ParameterSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 326,
        "end": 341,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 345,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 347,
      "end": 391,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 353,
        "end": 363,
        "decorators": [],
        "name": "TypeSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 372,
        "end": 387,
        "decorators": [],
        "name": "InferenceSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 388,
        "end": 391,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
