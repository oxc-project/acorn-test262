__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 187,
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
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 83,
        "name": "TreeNodeMiddleman",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 86,
        "end": 129,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 105,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 127,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "name": "parent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
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
      "start": 131,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 161,
            "name": "nodes",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 161,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 142,
                "end": 161,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 142,
                  "end": 159,
                  "typeName": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 159,
                    "name": "TreeNodeMiddleman",
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
      "start": 163,
      "end": 186,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 185,
        "callee": {
          "type": "MemberExpression",
          "start": 163,
          "end": 172,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "name": "nodes",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
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
            "start": 173,
            "end": 184,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 178,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
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
