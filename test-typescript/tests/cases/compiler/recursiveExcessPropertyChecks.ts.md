__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 210,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 42,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 56,
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 63,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 59,
                "end": 63
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 41,
        "decorators": [],
        "name": "ITreeItem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 83,
        "decorators": [],
        "name": "NodeWithId",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 86,
        "end": 113,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 86,
            "end": 95,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 86,
              "end": 95,
              "decorators": [],
              "name": "ITreeItem",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 98,
            "end": 113,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 100,
                "end": 111,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 100,
                  "end": 102,
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 111,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 133,
        "decorators": [],
        "name": "getMaxId",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 153,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 153,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 141,
              "end": 153,
              "elementType": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 151,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 151,
                  "decorators": [],
                  "name": "NodeWithId",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 171,
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 174,
            "end": 191,
            "expression": {
              "type": "ArrayExpression",
              "start": 174,
              "end": 176,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 180,
              "end": 191,
              "elementType": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 189,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "decorators": [],
                  "name": "ITreeItem",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 208,
        "arguments": [
          {
            "type": "Identifier",
            "start": 202,
            "end": 207,
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 193,
          "end": 201,
          "decorators": [],
          "name": "getMaxId",
          "optional": false,
          "typeAnnotation": null
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
