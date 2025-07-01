__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 17
                },
                "typeArguments": null,
                "start": 7,
                "end": 17
              },
              "start": 5,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "prefix": true,
          "start": 23,
          "end": 31
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 36,
          "end": 44
        },
        "start": 23,
        "end": 44
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 58
                },
                "optional": false,
                "computed": false,
                "start": 52,
                "end": 58
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 59,
                  "end": 61
                }
              ],
              "optional": false,
              "start": 52,
              "end": 62
            },
            "directive": null,
            "start": 52,
            "end": 63
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 74
                },
                "optional": false,
                "computed": false,
                "start": 68,
                "end": 74
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 76,
                      "end": 78
                    }
                  ],
                  "start": 75,
                  "end": 79
                }
              ],
              "optional": false,
              "start": 68,
              "end": 80
            },
            "directive": null,
            "start": 68,
            "end": 81
          }
        ],
        "start": 46,
        "end": 83
      },
      "alternate": null,
      "start": 19,
      "end": 83
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 103,
            "end": 109
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTreeArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 127
            },
            "typeArguments": null,
            "start": 112,
            "end": 127
          }
        ],
        "start": 103,
        "end": 127
      },
      "declare": false,
      "start": 85,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 154
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 168
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 179
                },
                "typeArguments": null,
                "start": 169,
                "end": 179
              }
            ],
            "start": 168,
            "end": 180
          },
          "start": 163,
          "end": 180
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 181,
        "end": 184
      },
      "declare": false,
      "start": 129,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
