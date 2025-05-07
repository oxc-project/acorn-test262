__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 95,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 68,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 68,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 49,
          "end": 64,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 49,
            "end": 59,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 51,
                "end": 57,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
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
                  "type": "AssignmentPattern",
                  "start": 51,
                  "end": 57,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 57,
                    "raw": "''",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 62,
            "end": 64,
            "properties": []
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 94,
        "arguments": [
          {
            "type": "AssignmentExpression",
            "start": 76,
            "end": 92,
            "operator": "=",
            "left": {
              "type": "ObjectPattern",
              "start": 76,
              "end": 87,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 85,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
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
                    "type": "AssignmentPattern",
                    "start": 78,
                    "end": 85,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "raw": "'5'",
                      "value": "5",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "right": {
              "type": "ObjectExpression",
              "start": 90,
              "end": 92,
              "properties": []
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
