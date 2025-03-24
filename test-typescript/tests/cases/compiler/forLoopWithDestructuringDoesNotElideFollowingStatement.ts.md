__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 26,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 13,
                "end": 25,
                "properties": [
                  {
                    "type": "Property",
                    "start": 14,
                    "end": 18,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 15,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 17,
                      "end": 18,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 20,
                    "end": 24,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 27,
      "end": 71,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 50,
            "id": {
              "type": "ObjectPattern",
              "start": 36,
              "end": 50,
              "properties": [
                {
                  "type": "Property",
                  "start": 38,
                  "end": 39,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
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
                  "start": 41,
                  "end": 48,
                  "argument": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "name": "rest",
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
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 65,
        "end": 71,
        "expression": {
          "type": "UnaryExpression",
          "start": 65,
          "end": 71,
          "operator": "void",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
