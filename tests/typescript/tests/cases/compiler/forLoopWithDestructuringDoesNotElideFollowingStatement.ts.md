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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 15,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 17,
                      "end": 18,
                      "value": 0,
                      "raw": "0"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 20,
                    "end": 24,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 50,
            "id": {
              "type": "ObjectPattern",
              "start": 36,
              "end": 50,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 38,
                  "end": 39,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 41,
                  "end": 48,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
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
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
