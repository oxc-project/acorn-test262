__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 96,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 36,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 32,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
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
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 89,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 92,
              "end": 93,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
