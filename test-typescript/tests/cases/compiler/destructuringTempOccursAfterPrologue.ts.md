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
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 20,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 20,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 17,
              "end": 20
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 70,
                      "end": 77,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 74,
                        "name": "prop",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "name": "p",
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
                "right": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "directive": null
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
