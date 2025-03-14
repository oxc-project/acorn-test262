__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 46,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 45,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 21,
            "end": 44,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 26,
              "end": 44,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 32,
                  "end": 42,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 32,
                    "end": 41,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 41,
                      "decorators": [],
                      "name": "default",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 20,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 0,
            "end": 15,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 7,
              "end": 14,
              "raw": "\"./foo\"",
              "value": "./foo"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
