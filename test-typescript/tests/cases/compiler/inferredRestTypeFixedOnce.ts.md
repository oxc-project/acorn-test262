__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 68,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 64,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 41,
              "end": 64,
              "params": [
                {
                  "type": "RestElement",
                  "start": 42,
                  "end": 55,
                  "argument": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 51,
                      "end": 55,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 55,
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 57,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 60,
                  "end": 64
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 27,
              "end": 36,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 27,
                "end": 34
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 102,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 74,
            "end": 101,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 99,
              "end": 101,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 75,
                "end": 94,
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "start": 75,
                  "end": 89,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 77,
                      "end": 87,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 94,
                  "properties": []
                },
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 69,
          "end": 73,
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
