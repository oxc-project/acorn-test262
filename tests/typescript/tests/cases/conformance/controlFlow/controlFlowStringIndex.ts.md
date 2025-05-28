__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 252,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 73,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 36,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 22,
                "end": 35,
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
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 41,
            "end": 71,
            "parameters": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 55,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 47,
                  "end": 55,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 71,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 58,
                "end": 71,
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
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 98,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 97,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "A",
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
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 99,
      "end": 252,
      "test": {
        "type": "BinaryExpression",
        "start": 103,
        "end": 121,
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 112,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 108,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 109,
            "end": 112,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 117,
          "end": 121,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 123,
        "end": 252,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 154,
            "expression": {
              "type": "CallExpression",
              "start": 129,
              "end": 154,
              "callee": {
                "type": "MemberExpression",
                "start": 129,
                "end": 152,
                "object": {
                  "type": "MemberExpression",
                  "start": 129,
                  "end": 138,
                  "object": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 134,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 138,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 152,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 159,
            "end": 170,
            "expression": {
              "type": "MemberExpression",
              "start": 159,
              "end": 170,
              "object": {
                "type": "Identifier",
                "start": 159,
                "end": 164,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 165,
                "end": 170,
                "decorators": [],
                "name": "other",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 208,
            "end": 217,
            "expression": {
              "type": "MemberExpression",
              "start": 208,
              "end": 217,
              "object": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 214,
                "end": 217,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
