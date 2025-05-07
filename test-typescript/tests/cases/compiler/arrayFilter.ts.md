__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 74,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 16,
                "end": 31,
                "properties": [
                  {
                    "type": "Property",
                    "start": 18,
                    "end": 29,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 22,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 24,
                      "end": 29,
                      "raw": "'bar'",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 37,
                "end": 51,
                "properties": [
                  {
                    "type": "Property",
                    "start": 39,
                    "end": 49,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 43,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 45,
                      "end": 49,
                      "raw": "null",
                      "value": null,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 57,
                "end": 72,
                "properties": [
                  {
                    "type": "Property",
                    "start": 59,
                    "end": 70,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 65,
                      "end": 70,
                      "raw": "'baz'",
                      "value": "baz",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 99,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 87,
            "end": 98,
            "async": false,
            "body": {
              "type": "MemberExpression",
              "start": 92,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 86,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 79,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 86,
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null
          }
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
