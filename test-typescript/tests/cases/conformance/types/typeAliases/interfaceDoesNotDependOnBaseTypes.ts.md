__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 17,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7,
                "end": 17,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 17,
                  "decorators": [],
                  "name": "StringTree",
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
      "type": "IfStatement",
      "start": 19,
      "end": 83,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 63,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 52,
              "end": 62,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 59,
                  "end": 61,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 58,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 58,
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
            "start": 68,
            "end": 81,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 68,
              "end": 80,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 75,
                  "end": 79,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 76,
                      "end": 78,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 74,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 44,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 23,
          "end": 31,
          "argument": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 44,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 85,
      "end": 128,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 100,
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 103,
        "end": 127,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 103,
            "end": 109
          },
          {
            "type": "TSTypeReference",
            "start": 112,
            "end": 127,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 112,
              "end": 127,
              "decorators": [],
              "name": "StringTreeArray",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 129,
      "end": 184,
      "body": {
        "type": "TSInterfaceBody",
        "start": 181,
        "end": 184,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 163,
          "end": 180,
          "expression": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 168,
            "end": 180,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 169,
                "end": 179,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 179,
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 154,
        "decorators": [],
        "name": "StringTreeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
