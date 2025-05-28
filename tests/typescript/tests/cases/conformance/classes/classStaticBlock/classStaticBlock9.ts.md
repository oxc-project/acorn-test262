__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 96,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 36,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "BinaryExpression",
              "start": 27,
              "end": 36,
              "left": {
                "type": "MemberExpression",
                "start": 27,
                "end": 32,
                "object": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 32,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "StaticBlock",
            "start": 41,
            "end": 74,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 58,
                "end": 68,
                "expression": {
                  "type": "BinaryExpression",
                  "start": 58,
                  "end": 67,
                  "left": {
                    "type": "MemberExpression",
                    "start": 58,
                    "end": 63,
                    "object": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 59,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 66,
                    "end": 67,
                    "value": 2,
                    "raw": "2"
                  }
                },
                "directive": null
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 94,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
