__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 112,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 52,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 51,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 37,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 42,
              "end": 51,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 77,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 66,
            "end": 76,
            "properties": [
              {
                "type": "Property",
                "start": 67,
                "end": 75,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 75,
                  "value": "a",
                  "raw": "'a'"
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
      "start": 78,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 111,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 80,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 110,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 82,
                "end": 96,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 83,
                    "end": 95,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 84,
                      "end": 91,
                      "object": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 87,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 101,
              "end": 110,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
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
