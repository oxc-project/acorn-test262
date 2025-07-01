__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 27,
                "end": 34
              },
              "start": 27,
              "end": 36
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 36
          }
        ],
        "start": 13,
        "end": 37
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 45,
                    "end": 49
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 51,
                        "end": 55
                      },
                      "typeArguments": null,
                      "start": 51,
                      "end": 55
                    },
                    "start": 49,
                    "end": 55
                  },
                  "value": null,
                  "start": 42,
                  "end": 55
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 60,
                  "end": 64
                },
                "start": 57,
                "end": 64
              },
              "start": 41,
              "end": 64
            },
            "start": 39,
            "end": 64
          },
          "start": 38,
          "end": 64
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 66,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 87
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 87
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 77,
                      "end": 87
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 89
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 92,
                  "end": 94
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 94
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 99,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 74,
            "end": 101
          }
        ],
        "optional": false,
        "start": 69,
        "end": 102
      },
      "directive": null,
      "start": 69,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
