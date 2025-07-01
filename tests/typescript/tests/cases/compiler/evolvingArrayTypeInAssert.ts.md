__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "unsafeCast",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 26
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 26,
          "end": 29
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 38,
                "end": 45
              },
              "start": 36,
              "end": 45
            },
            "start": 30,
            "end": 45
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_value",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
            },
            "asserts": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 67
                },
                "typeArguments": null,
                "start": 66,
                "end": 67
              },
              "start": 66,
              "end": 67
            },
            "start": 48,
            "end": 67
          },
          "start": 46,
          "end": 67
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 68,
          "end": 71
        },
        "expression": false,
        "start": 7,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "yadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 103
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 106,
                  "end": 108
                },
                "definite": false,
                "start": 100,
                "end": 108
              }
            ],
            "declare": false,
            "start": 96,
            "end": 109
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
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 117
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 122
                },
                "optional": false,
                "computed": false,
                "start": 114,
                "end": 122
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 123,
                  "end": 126
                }
              ],
              "optional": false,
              "start": 114,
              "end": 127
            },
            "directive": null,
            "start": 114,
            "end": 127
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "unsafeCast",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 142
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 143,
                    "end": 146
                  }
                ],
                "start": 142,
                "end": 147
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                }
              ],
              "optional": false,
              "start": 132,
              "end": 152
            },
            "directive": null,
            "start": 132,
            "end": 153
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 168
            },
            "start": 158,
            "end": 169
          }
        ],
        "start": 90,
        "end": 171
      },
      "expression": false,
      "start": 73,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
