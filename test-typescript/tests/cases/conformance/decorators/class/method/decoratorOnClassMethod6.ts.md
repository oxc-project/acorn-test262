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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "dec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 131,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 131,
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            ]
          },
          "params": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "name": "target",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 36,
                  "end": 39
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 60,
              "name": "propertyKey",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 62,
              "end": 100,
              "name": "descriptor",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 72,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 74,
                  "end": 100,
                  "typeName": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 97,
                    "name": "TypedPropertyDescriptor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 97,
                    "end": 100,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 98,
                        "end": 99,
                        "typeName": {
                          "type": "Identifier",
                          "start": 98,
                          "end": 99,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 105,
                "end": 128,
                "name": "TypedPropertyDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 128,
                "end": 131,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 130,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 130,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 134,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 141,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 170,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 148,
            "end": 168,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 154,
              "end": 162,
              "value": "method",
              "raw": "\"method\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 168,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 168,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 148,
                "end": 152,
                "expression": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 152,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
