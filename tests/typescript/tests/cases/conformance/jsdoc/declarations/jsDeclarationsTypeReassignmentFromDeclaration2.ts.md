__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 33,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
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
      "type": "TSDeclareFunction",
      "start": 34,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 59,
        "decorators": [],
        "name": "getItems",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 69,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 63,
          "end": 69,
          "elementType": {
            "type": "TSTypeReference",
            "start": 63,
            "end": 67,
            "typeName": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 71,
      "end": 89,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 88,
        "decorators": [],
        "name": "getItems",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 37,
            "callee": {
              "type": "CallExpression",
              "start": 14,
              "end": 35,
              "callee": {
                "type": "Identifier",
                "start": 14,
                "end": 21,
                "decorators": [],
                "name": "require",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 22,
                  "end": 34,
                  "value": "./some-mod",
                  "raw": "\"./some-mod\""
                }
              ],
              "optional": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 39,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 39,
          "end": 53,
          "object": {
            "type": "Identifier",
            "start": 39,
            "end": 45,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 53,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 56,
          "end": 61,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
