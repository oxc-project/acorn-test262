__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 190,
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
      "end": 72,
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
        "end": 72,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 70,
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
              "start": 58,
              "end": 65,
              "name": "field1"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 190,
      "decorators": [
        {
          "type": "Decorator",
          "start": 74,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
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
        "start": 87,
        "end": 190,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 93,
            "end": 121,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 109,
              "end": 116,
              "name": "field1"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 119,
              "end": 120,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false
          },
          {
            "type": "StaticBlock",
            "start": 126,
            "end": 188,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 143,
                "end": 156,
                "expression": {
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 155,
                  "object": {
                    "type": "ThisExpression",
                    "start": 143,
                    "end": 147
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 148,
                    "end": 155,
                    "name": "field1"
                  },
                  "optional": false,
                  "computed": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 165,
                "end": 182,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 165,
                  "end": 181,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 165,
                    "end": 177,
                    "object": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 170,
                      "end": 177,
                      "name": "field1"
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 180,
                    "end": 181,
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
