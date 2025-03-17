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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "TreeNode",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 57,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "TreeNode",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 82,
            "name": "nodes",
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
                    "name": "TreeNode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 106,
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 93,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 89,
            "name": "nodes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 90,
            "end": 93,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 94,
            "end": 105,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 99,
              "end": 105,
              "object": {
                "type": "Identifier",
                "start": 99,
                "end": 100,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 101,
                "end": 105,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
