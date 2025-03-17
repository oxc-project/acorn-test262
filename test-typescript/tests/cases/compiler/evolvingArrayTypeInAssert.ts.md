__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 71,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 71,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "name": "unsafeCast",
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
            "start": 30,
            "end": 45,
            "name": "_value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 45,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 38,
                "end": 45
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 71,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 46,
          "end": 67,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 48,
            "end": 67,
            "parameterName": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "_value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "asserts": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "name": "yadda",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 96,
            "end": 109,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 100,
                "end": 108,
                "id": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 103,
                  "name": "out",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 106,
                  "end": 108,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 127,
            "expression": {
              "type": "CallExpression",
              "start": 114,
              "end": 127,
              "callee": {
                "type": "MemberExpression",
                "start": 114,
                "end": 122,
                "object": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "name": "out",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 122,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 123,
                  "end": 126,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 153,
            "expression": {
              "type": "CallExpression",
              "start": 132,
              "end": 152,
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 142,
                "name": "unsafeCast",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "name": "out",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 142,
                "end": 147,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 143,
                    "end": 146
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 158,
            "end": 169,
            "argument": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "name": "out",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
