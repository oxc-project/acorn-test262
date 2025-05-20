__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 71,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 51,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
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
            "end": 45,
            "const": false,
            "constraint": {
              "type": "TSTupleType",
              "start": 21,
              "end": 45,
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "start": 22,
                  "end": 44,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 23,
                      "end": 33,
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 25,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 27,
                          "end": 33
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 35,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 38,
                      "end": 44
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 94,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 85,
                "end": 93,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 86,
                    "end": 92,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
