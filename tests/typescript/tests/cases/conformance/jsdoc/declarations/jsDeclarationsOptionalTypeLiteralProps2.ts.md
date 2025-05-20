__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 221,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 221,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 221,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 188,
            "end": 219,
            "argument": {
              "type": "BinaryExpression",
              "start": 195,
              "end": 218,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 195,
                "end": 207,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "LogicalExpression",
                  "start": 200,
                  "end": 206,
                  "operator": "??",
                  "left": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 201,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 205,
                    "end": 206,
                    "raw": "0",
                    "value": 0
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "start": 211,
                "end": 217,
                "operator": "??",
                "left": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
                  "raw": "0",
                  "value": 0
                }
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
        "start": 165,
        "end": 168,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 169,
          "end": 180,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 171,
              "end": 172,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 174,
              "end": 175,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
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
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 177,
              "end": 178,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 177,
                "end": 178,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
