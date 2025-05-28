__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 51,
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
                "kind": "init",
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
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 35,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 39,
                "end": 48,
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
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
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 80,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
