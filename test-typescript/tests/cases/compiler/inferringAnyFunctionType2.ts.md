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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 47,
          "end": 51,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 51,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 21,
              "end": 45,
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "start": 22,
                  "end": 44,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 23,
                      "end": 33,
                      "name": "p1",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 25,
                        "end": 33,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 27,
                          "end": 33
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 52,
        "end": 55,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 54,
          "end": 55,
          "typeName": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 83,
            "end": 94,
            "callee": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 92,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
