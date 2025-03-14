__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 59,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "TreeNode",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 16,
        "end": 59,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "decorators": [],
              "name": "parent",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 56,
                  "decorators": [],
                  "name": "TreeNode",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 82,
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 82,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 72,
                "end": 82,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 80,
                    "decorators": [],
                    "name": "TreeNode",
                    "optional": false
                  }
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
      "type": "ExpressionStatement",
      "start": 84,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 106,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 94,
            "end": 105,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 99,
              "end": 105,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "decorators": [],
                "name": "n",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "decorators": [],
                "name": "name",
                "optional": false
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "n",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 93,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "decorators": [],
            "name": "nodes",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "decorators": [],
            "name": "map",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
