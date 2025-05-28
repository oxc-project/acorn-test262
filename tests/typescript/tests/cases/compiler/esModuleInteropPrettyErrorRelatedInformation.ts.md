__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
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
        "start": 22,
        "end": 28,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 54,
        "body": []
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 55,
      "end": 68,
      "expression": {
        "type": "Identifier",
        "start": 64,
        "end": 67,
        "decorators": [],
        "name": "foo",
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "value": "./foo",
        "raw": "\"./foo\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 45,
        "decorators": [],
        "name": "invoke",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 59,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 47,
            "end": 59,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 49,
              "end": 59,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 55,
                  "end": 59
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 69,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 63,
            "end": 67,
            "expression": {
              "type": "CallExpression",
              "start": 63,
              "end": 66,
              "callee": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 81,
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "decorators": [],
          "name": "invoke",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 80,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
