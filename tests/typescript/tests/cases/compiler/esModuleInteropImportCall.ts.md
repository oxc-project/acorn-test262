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
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 20,
          "object": {
            "type": "ImportExpression",
            "start": 0,
            "end": 15,
            "source": {
              "type": "Literal",
              "start": 7,
              "end": 14,
              "value": "./foo",
              "raw": "\"./foo\""
            },
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 21,
            "end": 44,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
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
                    "object": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 41,
                      "decorators": [],
                      "name": "default",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
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
