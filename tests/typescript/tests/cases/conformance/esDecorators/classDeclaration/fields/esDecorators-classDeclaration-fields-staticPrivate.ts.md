__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
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
      "type": "ClassDeclaration",
      "start": 23,
      "end": 63,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
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
        "start": 31,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 61,
            "decorators": [
              {
                "type": "Decorator",
                "start": 37,
                "end": 41,
                "expression": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "start": 49,
              "end": 56,
              "name": "field1"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 60,
              "value": 0,
              "raw": "0"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 172,
      "decorators": [
        {
          "type": "Decorator",
          "start": 65,
          "end": 69,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 103,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 98,
              "name": "field1"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 0,
              "raw": "0"
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
            "start": 108,
            "end": 170,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 125,
                "end": 138,
                "expression": {
                  "type": "MemberExpression",
                  "start": 125,
                  "end": 137,
                  "object": {
                    "type": "ThisExpression",
                    "start": 125,
                    "end": 129
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 130,
                    "end": 137,
                    "name": "field1"
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 147,
                "end": 164,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 147,
                  "end": 163,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 147,
                    "end": 159,
                    "object": {
                      "type": "ThisExpression",
                      "start": 147,
                      "end": 151
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 152,
                      "end": 159,
                      "name": "field1"
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 162,
                    "end": 163,
                    "value": 1,
                    "raw": "1"
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
