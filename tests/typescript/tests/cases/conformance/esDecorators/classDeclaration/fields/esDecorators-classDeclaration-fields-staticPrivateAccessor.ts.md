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
            "type": "AccessorProperty",
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
              "start": 58,
              "end": 65
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 68,
              "end": 69
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 37,
            "end": 70
          }
        ],
        "start": 31,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 72
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
            "start": 75,
            "end": 78
          },
          "start": 74,
          "end": 78
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 86
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "field1",
              "start": 109,
              "end": 116
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 119,
              "end": 120
            },
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 93,
            "end": 121
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
                    "start": 143,
                    "end": 147
                  },
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "field1",
                    "start": 148,
                    "end": 155
                  },
                  "optional": false,
                  "computed": false,
                  "start": 143,
                  "end": 155
                },
                "directive": null,
                "start": 143,
                "end": 156
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
                      "start": 165,
                      "end": 169
                    },
                    "property": {
                      "type": "PrivateIdentifier",
                      "name": "field1",
                      "start": 170,
                      "end": 177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 165,
                    "end": 177
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 180,
                    "end": 181
                  },
                  "start": 165,
                  "end": 181
                },
                "directive": null,
                "start": 165,
                "end": 182
              }
            ],
            "start": 126,
            "end": 188
          }
        ],
        "start": 87,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 74,
      "end": 190
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 190
}
```
