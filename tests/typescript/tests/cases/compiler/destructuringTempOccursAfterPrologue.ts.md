__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 20,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 20,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 17,
              "end": 20
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 41,
            "expression": {
              "type": "Literal",
              "start": 28,
              "end": 40,
              "value": "use strict",
              "raw": "'use strict'"
            },
            "directive": "use strict"
          },
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 59,
            "expression": {
              "type": "Literal",
              "start": 46,
              "end": 58,
              "value": "use strong",
              "raw": "'use strong'"
            },
            "directive": "use strong"
          },
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 84,
            "expression": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 83,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 68,
                "end": 83,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 68,
                  "end": 79,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 70,
                      "end": 77,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 74,
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
