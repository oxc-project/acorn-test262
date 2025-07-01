__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 18,
                      "end": 22
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 24,
                      "end": 29
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 18,
                    "end": 29
                  }
                ],
                "start": 16,
                "end": 31
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 39,
                      "end": 43
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 45,
                      "end": 49
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 39,
                    "end": 49
                  }
                ],
                "start": 37,
                "end": 51
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 63
                    },
                    "value": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "'baz'",
                      "start": 65,
                      "end": 70
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 59,
                    "end": 70
                  }
                ],
                "start": 57,
                "end": 72
              }
            ],
            "start": 10,
            "end": 74
          },
          "definite": false,
          "start": 4,
          "end": 74
        }
      ],
      "declare": false,
      "start": 0,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "filter",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 86
          },
          "optional": false,
          "computed": false,
          "start": 76,
          "end": 86
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 98
              },
              "optional": false,
              "computed": false,
              "start": 92,
              "end": 98
            },
            "id": null,
            "generator": false,
            "start": 87,
            "end": 98
          }
        ],
        "optional": false,
        "start": 76,
        "end": 99
      },
      "directive": null,
      "start": 76,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
