__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 41
                },
                "start": 37,
                "end": 41
              }
            ],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field1",
              "start": 49,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 59,
              "end": 60
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 37,
            "end": 61
          }
        ],
        "start": 31,
        "end": 63
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 63
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 69
          },
          "start": 65,
          "end": 69
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 77
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field1",
              "start": 91,
              "end": 98
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 101,
              "end": 102
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 84,
            "end": 103
          },
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 125,
                    "end": 129
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "field1",
                    "start": 130,
                    "end": 137
                  },
                  "optional": false,
                  "computed": false,
                  "start": 125,
                  "end": 137
                },
                "directive": null,
                "start": 125,
                "end": 138
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 147,
                      "end": 151
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "field1",
                      "start": 152,
                      "end": 159
                    },
                    "optional": false,
                    "computed": false,
                    "start": 147,
                    "end": 159
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 162,
                    "end": 163
                  },
                  "start": 147,
                  "end": 163
                },
                "directive": null,
                "start": 147,
                "end": 164
              }
            ],
            "start": 108,
            "end": 170
          }
        ],
        "start": 78,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 172
}
```
