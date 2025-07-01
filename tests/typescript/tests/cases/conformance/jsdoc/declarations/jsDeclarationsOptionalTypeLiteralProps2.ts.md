__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 168
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 171,
              "end": 172
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 174,
              "end": 175
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 178
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 177,
              "end": 178
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 180
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "operator": "+",
                "right": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "operator": "??",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 205,
                    "end": 206
                  },
                  "start": 200,
                  "end": 206
                },
                "start": 195,
                "end": 207
              },
              "operator": "+",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 212
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 216,
                  "end": 217
                },
                "start": 211,
                "end": 217
              },
              "start": 195,
              "end": 218
            },
            "start": 188,
            "end": 219
          }
        ],
        "start": 182,
        "end": 221
      },
      "expression": false,
      "start": 156,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 156,
  "end": 221
}
```
