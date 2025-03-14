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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 20,
            "decorators": [],
            "name": "fn",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 23,
            "end": 51,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 42,
              "end": 51,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
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
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "foo",
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 75,
                  "raw": "'a'",
                  "value": "a"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 111,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 110,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 101,
              "end": 110,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 82,
                "end": 96,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 83,
                    "end": 95,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 84,
                      "end": 91,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 84,
                        "end": 87,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 91,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 80,
          "decorators": [],
          "name": "fn",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
