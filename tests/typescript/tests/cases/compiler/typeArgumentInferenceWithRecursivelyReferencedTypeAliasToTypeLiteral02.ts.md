__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
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
        "optional": false,
        "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
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
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 56,
                  "decorators": [],
                  "name": "TreeNode",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 61,
      "end": 129,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 83,
        "decorators": [],
        "name": "TreeNodeMiddleman",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 86,
        "end": 129,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 105,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 96,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 110,
            "end": 127,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "parent",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 126,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "decorators": [],
                  "name": "TreeNode",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 161,
            "decorators": [],
            "name": "nodes",
            "optional": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 159,
                    "decorators": [],
                    "name": "TreeNodeMiddleman",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 163,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 163,
        "end": 185,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 173,
            "end": 184,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 178,
              "end": 184,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 184,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 163,
          "end": 172,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 163,
            "end": 168,
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
