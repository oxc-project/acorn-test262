__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 132,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 131,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 131,
          "params": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 36,
                  "end": 39
                }
              }
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 60,
              "decorators": [],
              "name": "propertyKey",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              }
            },
            {
              "type": "Identifier",
              "start": 62,
              "end": 100,
              "decorators": [],
              "name": "descriptor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 100,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 97,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 97,
                    "decorators": [],
                    "name": "TypedPropertyDescriptor",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 105,
              "end": 131,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 131,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 128,
                "decorators": [],
                "name": "TypedPropertyDescriptor",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "const": false,
                "constraint": null,
                "default": null,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
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
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 134,
      "end": 170,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 168,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 148,
                "end": 152,
                "expression": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 152,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Literal",
              "start": 154,
              "end": 162,
              "raw": "\"method\"",
              "value": "method",
              "regex": null,
              "bigint": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 168,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
