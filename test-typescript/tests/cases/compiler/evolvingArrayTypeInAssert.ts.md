__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 71,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 71,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "decorators": [],
          "name": "unsafeCast",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 30,
            "end": 45,
            "decorators": [],
            "name": "_value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 45,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 38,
                "end": 45
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 46,
          "end": 67,
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "start": 48,
            "end": 67,
            "asserts": true,
            "parameterName": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "_value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 171,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 103,
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 106,
                  "end": 108,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 114,
            "end": 127,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 114,
              "end": 127,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 123,
                  "end": 126,
                  "raw": "100",
                  "value": 100
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 114,
                "end": 122,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 122,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 132,
            "end": 153,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 132,
              "end": 152,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 132,
                "end": 142,
                "decorators": [],
                "name": "unsafeCast",
                "optional": false,
                "typeAnnotation": null
              },
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
            }
          },
          {
            "type": "ReturnStatement",
            "start": 158,
            "end": 169,
            "argument": {
              "type": "Identifier",
              "start": 165,
              "end": 168,
              "decorators": [],
              "name": "out",
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
        "start": 82,
        "end": 87,
        "decorators": [],
        "name": "yadda",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
