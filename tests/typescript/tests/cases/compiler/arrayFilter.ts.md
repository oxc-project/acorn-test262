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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 74,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 22,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 24,
                      "end": 29,
                      "value": "bar",
                      "raw": "'bar'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 43,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 45,
                      "end": 49,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 63,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 65,
                      "end": 70,
                      "value": "baz",
                      "raw": "'baz'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 86,
            "decorators": [],
            "name": "filter",
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
            "start": 87,
            "end": 98,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "MemberExpression",
              "start": 92,
              "end": 98,
              "object": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 94,
                "end": 98,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
  "sourceType": "script",
  "hashbang": null
}
```
