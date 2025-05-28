__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 145,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
        "end": 145,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
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
            "start": 28,
            "end": 62,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 45,
                "end": 56,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 45,
                  "end": 55,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 45,
                    "end": 51,
                    "object": {
                      "type": "ThisExpression",
                      "start": 45,
                      "end": 49
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 51,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 54,
                    "end": 55,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          },
          {
            "type": "PropertyDefinition",
            "start": 67,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "start": 78,
              "end": 84,
              "object": {
                "type": "ThisExpression",
                "start": 78,
                "end": 82
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
            "type": "PropertyDefinition",
            "start": 90,
            "end": 99,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
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
            "start": 104,
            "end": 143,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 121,
                "end": 137,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 121,
                  "end": 136,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 121,
                    "end": 127,
                    "object": {
                      "type": "ThisExpression",
                      "start": 121,
                      "end": 125
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 127,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 130,
                    "end": 136,
                    "object": {
                      "type": "ThisExpression",
                      "start": 130,
                      "end": 134
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "directive": null
              }
            ]
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
