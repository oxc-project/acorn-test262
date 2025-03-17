__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 23,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 11,
                    "end": 21,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 12,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 20,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 14,
                        "end": 20
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 35,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 34,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 30,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 33,
          "end": 34,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 46,
      "expression": {
        "type": "AssignmentExpression",
        "start": 36,
        "end": 45,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 41,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 44,
          "end": 45,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
