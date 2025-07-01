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
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 13,
                  "end": 19
                },
                "start": 13,
                "end": 21
              },
              "start": 11,
              "end": 21
            },
            "start": 6,
            "end": 21
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 24,
            "end": 26
          },
          "definite": false,
          "start": 6,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 62
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ],
                  "start": 62,
                  "end": 70
                },
                "start": 49,
                "end": 70
              },
              "start": 47,
              "end": 70
            },
            "start": 34,
            "end": 70
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 73,
            "end": 75
          },
          "definite": false,
          "start": 34,
          "end": 75
        }
      ],
      "declare": false,
      "start": 28,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 82
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "flatMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 77,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 108
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  ],
                  "start": 108,
                  "end": 116
                },
                "start": 95,
                "end": 116
              },
              "start": 93,
              "end": 116
            },
            "body": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 120,
              "end": 122
            },
            "id": null,
            "generator": false,
            "start": 91,
            "end": 122
          }
        ],
        "optional": false,
        "start": 77,
        "end": 123
      },
      "directive": null,
      "start": 77,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "flatMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 145,
            "end": 152
          },
          "optional": false,
          "computed": false,
          "start": 131,
          "end": 152
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 170
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 171,
                      "end": 177
                    }
                  ],
                  "start": 170,
                  "end": 178
                },
                "start": 157,
                "end": 178
              },
              "start": 155,
              "end": 178
            },
            "body": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 182,
              "end": 184
            },
            "id": null,
            "generator": false,
            "start": 153,
            "end": 184
          }
        ],
        "optional": false,
        "start": 131,
        "end": 185
      },
      "directive": null,
      "start": 131,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
