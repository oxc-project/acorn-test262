__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 61,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 49,
              "end": 56,
              "name": "field1"
            },
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 60,
              "value": 0,
              "raw": "0"
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 37,
                "end": 41,
                "expression": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 41,
                  "name": "dec",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 103,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 98,
              "name": "field1"
            },
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 0,
              "raw": "0"
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
                  "computed": false,
                  "optional": false
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
                    "computed": false,
                    "optional": false
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 65,
          "end": 69,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "name": "dec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
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
