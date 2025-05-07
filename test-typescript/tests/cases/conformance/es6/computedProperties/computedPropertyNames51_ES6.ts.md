__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 41,
            "end": 50,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 45,
                "end": 49,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 49,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 59,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 60,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 62,
                      "end": 63,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 116,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 115,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 77,
                  "end": 115,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 87,
                      "end": 93,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 92,
                        "end": 93,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 103,
                      "end": 109,
                      "computed": true,
                      "key": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 105,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 108,
                        "end": 109,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
      "params": [],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 31,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 24,
              "end": 31,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
