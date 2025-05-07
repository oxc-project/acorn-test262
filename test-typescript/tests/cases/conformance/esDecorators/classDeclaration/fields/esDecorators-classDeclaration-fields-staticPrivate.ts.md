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
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 37,
            "end": 61,
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
              "start": 49,
              "end": 56,
              "name": "field1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 60,
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
      "start": 65,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 78,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 84,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 91,
              "end": 98,
              "name": "field1"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
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
                "directive": null,
                "expression": {
                  "type": "MemberExpression",
                  "start": 125,
                  "end": 137,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 125,
                    "end": 129
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "start": 130,
                    "end": 137,
                    "name": "field1"
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 147,
                "end": 164,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 147,
                  "end": 163,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 147,
                    "end": 159,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 147,
                      "end": 151
                    },
                    "optional": false,
                    "property": {
                      "type": "PrivateIdentifier",
                      "start": 152,
                      "end": 159,
                      "name": "field1"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 162,
                    "end": 163,
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
