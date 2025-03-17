__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 213,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 48,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 26,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 41,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 33,
                  "end": 41,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 35,
                    "end": 41
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 45,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 26,
              "end": 29,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 27,
                  "end": 28,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 28,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "ICache",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 213,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 213,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 211,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 211,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 211,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 205,
                    "argument": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 204,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 173,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 167,
                      "end": 173
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 177,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 176,
                  "end": 177,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 158,
                "end": 161,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 159,
                    "end": 160,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 160,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 67,
        "decorators": [],
        "name": "CacheService",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 79,
          "end": 85,
          "expression": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "ICache",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
