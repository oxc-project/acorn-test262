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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "wrap",
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
          "start": 38,
          "end": 64,
          "name": "_",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 64,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 41,
              "end": 64,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 42,
                  "end": 55,
                  "argument": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 55,
                        "name": "Args",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 68,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "name": "Args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 69,
        "end": 102,
        "callee": {
          "type": "Identifier",
          "start": 69,
          "end": 73,
          "name": "wrap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 74,
            "end": 101,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 75,
                "end": 94,
                "left": {
                  "type": "ObjectPattern",
                  "start": 75,
                  "end": 89,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 77,
                      "end": 87,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "name": "cancelable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 87,
                        "name": "cancelable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 92,
                  "end": 94,
                  "properties": []
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 99,
              "end": 101,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
