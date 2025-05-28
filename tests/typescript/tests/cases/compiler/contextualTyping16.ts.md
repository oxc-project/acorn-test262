__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
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
                "start": 9,
                "end": 21,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10,
                    "end": 20,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 12,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 24,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 29,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 27,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "value": 4,
                  "raw": "4"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 45,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 44,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 38,
          "end": 44,
          "properties": [
            {
              "type": "Property",
              "start": 39,
              "end": 43,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 41,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 5,
                "raw": "5"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
