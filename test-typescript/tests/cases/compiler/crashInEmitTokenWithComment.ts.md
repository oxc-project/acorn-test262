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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 51,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 37,
                "name": "param",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 29,
                  "end": 37,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 42,
              "end": 51,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 75,
                  "value": "a",
                  "raw": "'a'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 110,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 82,
                "end": 96,
                "properties": [
                  {
                    "type": "Property",
                    "start": 83,
                    "end": 95,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 84,
                      "end": 91,
                      "object": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 87,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "name": "c",
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
              "type": "Identifier",
              "start": 101,
              "end": 110,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
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
