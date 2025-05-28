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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 71,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 26,
          "decorators": [],
          "name": "unsafeCast",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
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
            "parameterName": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "_value",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 71,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 73,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 87,
        "decorators": [],
        "name": "yadda",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 96,
            "end": 109,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 100,
                "end": 108,
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
                },
                "definite": false
              }
            ],
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
                  "decorators": [],
                  "name": "out",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 122,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 123,
                  "end": 126,
                  "value": 100,
                  "raw": "100"
                }
              ],
              "optional": false
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
                "decorators": [],
                "name": "unsafeCast",
                "optional": false,
                "typeAnnotation": null
              },
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
              },
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
              "optional": false
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
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
