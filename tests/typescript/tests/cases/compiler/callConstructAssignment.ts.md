__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 8,
                "end": 21,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 10,
                    "end": 19,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 13,
                      "end": 18,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 14,
                        "end": 18
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 47,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 31,
                "end": 47,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 33,
                    "end": 45,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 44,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 41,
                        "end": 44
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 49,
      "end": 59,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 49,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 49,
          "end": 52,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 69,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 69,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 69,
          "end": 72,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 75,
          "end": 78,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
