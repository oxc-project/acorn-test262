__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 15,
                "end": 30,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 17,
                    "end": 28,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 21,
                        "end": 28
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 46,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 45,
        "operator": "??=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 36,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 45,
          "value": true,
          "raw": "true"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 61,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 60,
        "operator": "&&=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 50,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 55,
          "end": 60,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
