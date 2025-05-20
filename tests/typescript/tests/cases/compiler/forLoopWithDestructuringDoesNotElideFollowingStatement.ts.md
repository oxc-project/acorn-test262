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
          "definite": false,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 14,
                      "end": 15,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 17,
                      "end": 18,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "Property",
                    "start": 20,
                    "end": 24,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 23,
                      "end": 24,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForOfStatement",
      "start": 27,
      "end": 71,
      "await": false,
      "body": {
        "type": "ExpressionStatement",
        "start": 65,
        "end": 71,
        "directive": null,
        "expression": {
          "type": "UnaryExpression",
          "start": 65,
          "end": 71,
          "argument": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "void",
          "prefix": true
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 50,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 50,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 36,
              "end": 50,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 38,
                  "end": 39,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
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
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "RestElement",
                  "start": 41,
                  "end": 48,
                  "argument": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
