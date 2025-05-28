__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 30,
        "decorators": [],
        "name": "packageExport",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      },
      "body": null,
      "expression": false
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
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 22,
          "object": {
            "type": "ImportExpression",
            "start": 0,
            "end": 17,
            "source": {
              "type": "Literal",
              "start": 7,
              "end": 16,
              "value": "package",
              "raw": "\"package\""
            },
            "options": null,
            "phase": null
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 22,
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
            "start": 23,
            "end": 50,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 24,
                "end": 38,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 25,
                    "end": 37,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 32,
                      "decorators": [],
                      "name": "default",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 37,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 43,
              "end": 50,
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 47,
                  "end": 49,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false
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
