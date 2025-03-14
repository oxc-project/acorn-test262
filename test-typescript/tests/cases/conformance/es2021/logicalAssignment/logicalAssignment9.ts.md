__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 30,
          "definite": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 17,
                      "end": 18,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 19,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 21,
                        "end": 28
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 41,
          "end": 45,
          "raw": "true",
          "value": true
        }
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 55,
          "end": 60,
          "raw": "false",
          "value": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
