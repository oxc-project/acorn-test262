__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITreeItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 41
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 64
          }
        ],
        "start": 42,
        "end": 66
      },
      "declare": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeWithId",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 83
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ITreeItem",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 95
            },
            "typeArguments": null,
            "start": 86,
            "end": 95
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 102
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 105,
                    "end": 111
                  },
                  "start": 103,
                  "end": 111
                },
                "accessibility": null,
                "static": false,
                "start": 100,
                "end": 111
              }
            ],
            "start": 98,
            "end": 113
          }
        ],
        "start": 86,
        "end": 113
      },
      "declare": false,
      "start": 68,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMaxId",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NodeWithId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 151
                },
                "typeArguments": null,
                "start": 141,
                "end": 151
              },
              "start": 141,
              "end": 153
            },
            "start": 139,
            "end": 153
          },
          "start": 134,
          "end": 153
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 155,
        "end": 158
      },
      "expression": false,
      "start": 116,
      "end": 158
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
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 171
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 174,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ITreeItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 189
                },
                "typeArguments": null,
                "start": 180,
                "end": 189
              },
              "start": 180,
              "end": 191
            },
            "start": 174,
            "end": 191
          },
          "definite": false,
          "start": 166,
          "end": 191
        }
      ],
      "declare": false,
      "start": 160,
      "end": 192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMaxId",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "nodes",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 207
          }
        ],
        "optional": false,
        "start": 193,
        "end": 208
      },
      "directive": null,
      "start": 193,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 209
}
```
