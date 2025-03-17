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
        "name": "packageExport",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 31,
          "end": 40,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
        "name": "packageExport",
        "typeAnnotation": null,
        "decorators": [],
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
            "options": null
          },
          "property": {
            "type": "Identifier",
            "start": 18,
            "end": 22,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 50,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 24,
                "end": 38,
                "properties": [
                  {
                    "type": "Property",
                    "start": 25,
                    "end": 37,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 32,
                      "name": "default",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 37,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 43,
              "end": 50,
              "callee": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 47,
                  "end": 49,
                  "value": 42,
                  "raw": "42"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
