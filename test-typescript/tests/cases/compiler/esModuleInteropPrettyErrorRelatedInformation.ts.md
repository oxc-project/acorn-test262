foo.d.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
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
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 54,
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 54,
        "body": []
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "namespace"
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 69,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 45,
        "decorators": [],
        "name": "invoke",
        "optional": false
      },
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
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 82,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 81,
        "arguments": [
          {
            "type": "Identifier",
            "start": 77,
            "end": 80,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "decorators": [],
          "name": "invoke",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
