__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 31,
                    "end": 35
                  }
                ],
                "start": 22,
                "end": 35
              },
              "start": 20,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 15,
            "end": 36
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  },
                  "start": 47,
                  "end": 55
                },
                "start": 42,
                "end": 55
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 58,
                    "end": 64
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 67,
                    "end": 71
                  }
                ],
                "start": 58,
                "end": 71
              },
              "start": 56,
              "end": 71
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 41,
            "end": 71
          }
        ],
        "start": 9,
        "end": 73
      },
      "declare": false,
      "start": 0,
      "end": 74
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
            "name": "value",
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
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              },
              "start": 94,
              "end": 97
            },
            "start": 89,
            "end": 97
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 97
        }
      ],
      "declare": true,
      "start": 75,
      "end": 98
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 112
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 117,
          "end": 121
        },
        "start": 103,
        "end": 121
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 134
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 138
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 138
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 139,
                  "end": 152
                },
                "optional": false,
                "computed": false,
                "start": 129,
                "end": 152
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 129,
              "end": 154
            },
            "directive": null,
            "start": 129,
            "end": 154
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 164
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 159,
              "end": 170
            },
            "directive": null,
            "start": 159,
            "end": 170
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 217
              },
              "optional": false,
              "computed": false,
              "start": 208,
              "end": 217
            },
            "directive": null,
            "start": 208,
            "end": 217
          }
        ],
        "start": 123,
        "end": 252
      },
      "alternate": null,
      "start": 99,
      "end": 252
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 252
}
```
