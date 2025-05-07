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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 72,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 37,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "declare": false,
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
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 58,
              "end": 65,
              "name": "field1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 87,
        "end": 190,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 93,
            "end": 121,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 109,
              "end": 116,
              "name": "field1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 119,
              "end": 120,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
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
                "directive": null,
                "expression": {
                  "type": "MemberExpression",
                  "start": 143,
                  "end": 155,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 143,
                    "end": 147
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 148,
                    "end": 155,
                    "name": "field1"
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 165,
                "end": 182,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 165,
                  "end": 181,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 165,
                    "end": 177,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 165,
                      "end": 169
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 170,
                      "end": 177,
                      "name": "field1"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 180,
                    "end": 181,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
