__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 39,
            "end": 64,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 64,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 52,
                  "end": 62,
                  "argument": {
                    "type": "Literal",
                    "start": 59,
                    "end": 61,
                    "raw": "''",
                    "value": ""
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 99,
      "end": 129,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 129,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 118,
            "end": 127,
            "argument": {
              "type": "Literal",
              "start": 125,
              "end": 126,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 131,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 131,
          "end": 145,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 131,
            "end": 137,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 145,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 148,
          "end": 154,
          "properties": [
            {
              "type": "Property",
              "start": 149,
              "end": 150,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 152,
              "end": 153,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
