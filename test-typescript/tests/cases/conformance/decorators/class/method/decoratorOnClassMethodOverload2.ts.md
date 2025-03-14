decoratorOnClassMethodOverload2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 126,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 24,
          "end": 35,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 35,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 32,
              "end": 35
            }
          }
        },
        {
          "type": "Identifier",
          "start": 37,
          "end": 56,
          "decorators": [],
          "name": "propertyKey",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            }
          }
        },
        {
          "type": "Identifier",
          "start": 58,
          "end": 96,
          "decorators": [],
          "name": "descriptor",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 96,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 70,
              "end": 96,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 93,
                "end": 96,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 70,
                "end": 93,
                "decorators": [],
                "name": "TypedPropertyDescriptor",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 125,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 99,
          "end": 125,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 122,
            "end": 125,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 123,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 99,
            "end": 122,
            "decorators": [],
            "name": "TypedPropertyDescriptor",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 128,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 136,
        "end": 178,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 142,
            "end": 150,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 148,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 148,
              "end": 150,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 176,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 155,
                "end": 159,
                "expression": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 159,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 170,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 176,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
