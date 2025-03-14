propertyAccess1.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 11,
                      "end": 12,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 20,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 14,
                        "end": 20
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
      "declare": false,
      "kind": "var"
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 33,
          "end": 34,
          "raw": "4",
          "value": 4
        }
      }
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
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 44,
          "end": 45,
          "raw": "5",
          "value": 5
        }
      }
    }
  ],
  "sourceType": "script"
}
```
