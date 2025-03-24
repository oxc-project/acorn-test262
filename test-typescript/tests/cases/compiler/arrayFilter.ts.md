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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 22,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 24,
                      "end": 29,
                      "value": "bar",
                      "raw": "'bar'"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 43,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 45,
                      "end": 49,
                      "value": null,
                      "raw": "null"
                    },
                    "kind": "init",
                    "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 65,
                      "end": 70,
                      "value": "baz",
                      "raw": "'baz'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
      "start": 76,
      "end": 100,
      "expression": {
        "type": "CallExpression",
        "start": 76,
        "end": 99,
        "callee": {
          "type": "MemberExpression",
          "start": 76,
          "end": 86,
          "object": {
            "type": "Identifier",
            "start": 76,
            "end": 79,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 86,
            "name": "filter",
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
            "start": 87,
            "end": 98,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "MemberExpression",
              "start": 92,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
  "sourceType": "script",
  "hashbang": null
}
```
