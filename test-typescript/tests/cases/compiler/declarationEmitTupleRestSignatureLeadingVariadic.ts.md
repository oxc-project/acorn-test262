declarationEmitTupleRestSignatureLeadingVariadic.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 94,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 92,
              "end": 94,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "RestElement",
                "start": 47,
                "end": 81,
                "argument": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 54,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 54,
                  "end": 81,
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 56,
                    "end": 81,
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "start": 57,
                        "end": 70,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 60,
                          "end": 70,
                          "typeName": {
                            "type": "Identifier",
                            "start": 60,
                            "end": 70,
                            "decorators": [],
                            "name": "TFirstArgs",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 80,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 80,
                          "decorators": [],
                          "name": "TLastArg",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 88,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 10,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 11,
                  "end": 35,
                  "const": false,
                  "constraint": {
                    "type": "TSArrayType",
                    "start": 30,
                    "end": 35,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 30,
                      "end": 33
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 21,
                    "decorators": [],
                    "name": "TFirstArgs",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 37,
                  "end": 45,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 45,
                    "decorators": [],
                    "name": "TLastArg",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
