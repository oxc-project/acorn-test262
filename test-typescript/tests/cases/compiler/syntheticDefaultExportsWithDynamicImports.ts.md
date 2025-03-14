node_modules/package/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 50,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 30,
        "decorators": [],
        "name": "packageExport",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 40,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 41,
        "end": 49,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 43,
          "end": 49
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 51,
      "end": 74,
      "expression": {
        "type": "Identifier",
        "start": 60,
        "end": 73,
        "decorators": [],
        "name": "packageExport",
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
  "end": 52,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 51,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 50,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 43,
              "end": 50,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 47,
                  "end": 49,
                  "raw": "42",
                  "value": 42
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 24,
                "end": 38,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 25,
                    "end": 37,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 32,
                      "decorators": [],
                      "name": "default",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 37,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 22,
          "computed": false,
          "object": {
            "type": "ImportExpression",
            "start": 0,
            "end": 17,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 7,
              "end": 16,
              "raw": "\"package\"",
              "value": "package"
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 22,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
