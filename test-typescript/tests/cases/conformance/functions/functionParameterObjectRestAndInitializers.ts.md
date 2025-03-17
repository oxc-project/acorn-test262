__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 169,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 68,
          "end": 77,
          "properties": [
            {
              "type": "Property",
              "start": 69,
              "end": 70,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 72,
              "end": 76,
              "argument": {
                "type": "Identifier",
                "start": 75,
                "end": 76,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 79,
          "end": 84,
          "left": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 103,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 101,
            "argument": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 105,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 115,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 116,
          "end": 125,
          "properties": [
            {
              "type": "Property",
              "start": 117,
              "end": 118,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 120,
              "end": 124,
              "argument": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 127,
          "end": 149,
          "left": {
            "type": "Identifier",
            "start": 127,
            "end": 128,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 131,
            "end": 149,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 132,
                "end": 135,
                "properties": [
                  {
                    "type": "Property",
                    "start": 133,
                    "end": 134,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "name": "a",
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
              },
              {
                "type": "AssignmentPattern",
                "start": 137,
                "end": 142,
                "left": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 142,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 147,
              "end": 149,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 151,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 157,
            "end": 166,
            "argument": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
