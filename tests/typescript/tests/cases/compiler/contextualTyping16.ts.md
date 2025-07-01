__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10,
                      "end": 12
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      },
                      "start": 12,
                      "end": 19
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 10,
                    "end": 20
                  }
                ],
                "start": 9,
                "end": 21
              },
              "start": 7,
              "end": 21
            },
            "start": 4,
            "end": 21
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 27
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 28,
                  "end": 29
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 25,
                "end": 29
              }
            ],
            "start": 24,
            "end": 30
          },
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 35
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 41
              },
              "value": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 42,
                "end": 43
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 39,
              "end": 43
            }
          ],
          "start": 38,
          "end": 44
        },
        "start": 32,
        "end": 44
      },
      "directive": null,
      "start": 32,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
