__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 51,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 51,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 77,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 76,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 66,
                "end": 72,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 66,
                  "end": 70
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 75,
                "end": 76,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 102,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 80,
          "end": 91,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 80,
            "end": 81,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 94,
          "end": 102,
          "properties": [
            {
              "type": "Property",
              "start": 96,
              "end": 100,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 115,
            "end": 122,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 123,
        "end": 126,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 123,
          "end": 124,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 127,
      "end": 130,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 127,
        "end": 130,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 127,
          "end": 128,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
