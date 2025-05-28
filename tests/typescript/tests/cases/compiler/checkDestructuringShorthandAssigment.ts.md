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
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 51,
                "end": 57,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "Literal",
                    "start": 55,
                    "end": 57,
                    "value": "",
                    "raw": "''"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 62,
            "end": 64,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 68,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 94,
        "callee": {
          "type": "Identifier",
          "start": 70,
          "end": 74,
          "decorators": [],
          "name": "Test",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
              "properties": [
                {
                  "type": "Property",
                  "start": 78,
                  "end": 85,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                    "right": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "value": "5",
                      "raw": "'5'"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
