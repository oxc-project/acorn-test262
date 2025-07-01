__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "typeArguments": null,
              "start": 72,
              "end": 73
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 62,
            "end": 73
          }
        ],
        "start": 43,
        "end": 74
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "typeArguments": null,
                "start": 84,
                "end": 85
              },
              "start": 84,
              "end": 87
            },
            "start": 82,
            "end": 87
          },
          "start": 81,
          "end": 87
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ab",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 96
                      },
                      "typeArguments": null,
                      "start": 95,
                      "end": 96
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "typeArguments": null,
                      "start": 99,
                      "end": 100
                    }
                  ],
                  "start": 95,
                  "end": 100
                },
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 105,
              "end": 109
            },
            "start": 102,
            "end": 109
          },
          "start": 90,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 110
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 126,
                  "end": 129
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 133,
                        "end": 136
                      },
                      "start": 133,
                      "end": 136
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 139,
                        "end": 142
                      },
                      "start": 139,
                      "end": 142
                    }
                  ],
                  "start": 133,
                  "end": 142
                },
                "start": 126,
                "end": 142
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 145,
                    "end": 148
                  }
                ],
                "start": 144,
                "end": 149
              }
            ],
            "optional": false,
            "start": 121,
            "end": 150
          },
          "definite": false,
          "start": 117,
          "end": 150
        }
      ],
      "declare": false,
      "start": 111,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 153
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "x",
            "raw": "\"x\"",
            "start": 154,
            "end": 157
          }
        ],
        "optional": false,
        "start": 152,
        "end": 158
      },
      "directive": null,
      "start": 152,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 159
}
```
