__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFirstArgs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11,
                    "end": 21
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 30,
                      "end": 33
                    },
                    "start": 30,
                    "end": 35
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 11,
                  "end": 35
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLastArg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 45
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 45
                }
              ],
              "start": 10,
              "end": 46
            },
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
                  "start": 50,
                  "end": 54
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TFirstArgs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 70
                          },
                          "typeArguments": null,
                          "start": 60,
                          "end": 70
                        },
                        "start": 57,
                        "end": 70
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TLastArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 80
                        },
                        "typeArguments": null,
                        "start": 72,
                        "end": 80
                      }
                    ],
                    "start": 56,
                    "end": 81
                  },
                  "start": 54,
                  "end": 81
                },
                "value": null,
                "start": 47,
                "end": 81
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
              },
              "start": 82,
              "end": 88
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 92,
              "end": 94
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 94
          },
          "definite": false,
          "start": 6,
          "end": 94
        }
      ],
      "declare": false,
      "start": 0,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
