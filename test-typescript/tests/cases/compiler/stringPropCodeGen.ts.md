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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 13,
                  "end": 18,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 21,
                  "end": 35,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 35,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 39,
                  "end": 44,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "value": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "value": 5,
                  "raw": "5"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 64,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 63,
        "callee": {
          "type": "MemberExpression",
          "start": 56,
          "end": 61,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 83,
      "expression": {
        "type": "CallExpression",
        "start": 66,
        "end": 82,
        "callee": {
          "type": "MemberExpression",
          "start": 66,
          "end": 80,
          "object": {
            "type": "MemberExpression",
            "start": 66,
            "end": 71,
            "object": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "name": "toString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
