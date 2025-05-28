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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 17,
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 19,
      "end": 83,
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 44,
        "left": {
          "type": "UnaryExpression",
          "start": 23,
          "end": 31,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 44,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 83,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 52,
            "end": 63,
            "expression": {
              "type": "CallExpression",
              "start": 52,
              "end": 62,
              "callee": {
                "type": "MemberExpression",
                "start": 52,
                "end": 58,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 58,
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
                  "start": 59,
                  "end": 61,
                  "value": "",
                  "raw": "\"\""
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 81,
            "expression": {
              "type": "CallExpression",
              "start": 68,
              "end": 80,
              "callee": {
                "type": "MemberExpression",
                "start": 68,
                "end": 74,
                "object": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
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
                  "type": "ArrayExpression",
                  "start": 75,
                  "end": 79,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 76,
                      "end": 78,
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 85,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 100,
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 112,
              "end": 127,
              "decorators": [],
              "name": "StringTreeArray",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 129,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 154,
        "decorators": [],
        "name": "StringTreeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 179,
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 181,
        "end": 184,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
