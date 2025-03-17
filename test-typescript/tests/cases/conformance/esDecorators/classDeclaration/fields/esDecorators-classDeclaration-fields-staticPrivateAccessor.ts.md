__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
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
      "end": 72,
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
        "end": 72,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 70,
            "key": {
              "type": "PrivateIdentifier",
              "start": 58,
              "end": 65,
              "name": "field1"
            },
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": true,
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
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
            "readonly": false
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
      "start": 74,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 190,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 93,
            "end": 121,
            "key": {
              "type": "PrivateIdentifier",
              "start": 109,
              "end": 116,
              "name": "field1"
            },
            "value": {
              "type": "Literal",
              "start": 119,
              "end": 120,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": true,
            "decorators": [],
            "definite": false,
            "typeAnnotation": null,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "override": false,
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
                  "computed": false,
                  "optional": false
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
                    "computed": false,
                    "optional": false
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 74,
          "end": 78,
          "expression": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
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
