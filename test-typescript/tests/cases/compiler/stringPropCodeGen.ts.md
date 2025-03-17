__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 51,
            "properties": [
              {
                "type": "Property",
                "start": 13,
                "end": 35,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 13,
                  "end": 18,
                  "raw": "\"foo\"",
                  "value": "foo"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 21,
                  "end": 35,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 35,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 39,
                  "end": 44,
                  "raw": "\"bar\"",
                  "value": "bar"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "raw": "5",
                  "value": 5
                }
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
      "start": 56,
      "end": 64,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 63,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 56,
          "end": 61,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 83,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 82,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 80,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 66,
            "end": 71,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "decorators": [],
            "name": "toString",
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
