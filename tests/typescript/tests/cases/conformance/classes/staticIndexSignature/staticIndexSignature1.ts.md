__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 22,
                "end": 31
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "readonly": false,
            "static": true,
            "accessibility": null,
            "start": 14,
            "end": 41
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 57,
                    "end": 63
                  },
                  "start": 55,
                  "end": 63
                },
                "start": 54,
                "end": 63
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 66,
                  "end": 68
                },
                "start": 66,
                "end": 68
              },
              "start": 64,
              "end": 68
            },
            "readonly": false,
            "static": true,
            "accessibility": null,
            "start": 46,
            "end": 68
          }
        ],
        "start": 8,
        "end": 70
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 73
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 74,
            "end": 79
          },
          "optional": false,
          "computed": true,
          "start": 72,
          "end": 80
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 83,
          "end": 84
        },
        "start": 72,
        "end": 84
      },
      "directive": null,
      "start": 72,
      "end": 84
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 86
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 85,
          "end": 90
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 93,
          "end": 94
        },
        "start": 85,
        "end": 94
      },
      "directive": null,
      "start": 85,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 105
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 110,
              "end": 115
            },
            "optional": false,
            "computed": true,
            "start": 108,
            "end": 116
          },
          "definite": false,
          "start": 102,
          "end": 116
        }
      ],
      "declare": false,
      "start": 96,
      "end": 116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 118
          },
          "property": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 119,
            "end": 121
          },
          "optional": false,
          "computed": true,
          "start": 117,
          "end": 122
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 125,
          "end": 127
        },
        "start": 117,
        "end": 127
      },
      "directive": null,
      "start": 117,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 130,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 128,
          "end": 132
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 135,
          "end": 136
        },
        "start": 128,
        "end": 136
      },
      "directive": null,
      "start": 128,
      "end": 137
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 147
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 152,
              "end": 154
            },
            "optional": false,
            "computed": true,
            "start": 150,
            "end": 155
          },
          "definite": false,
          "start": 144,
          "end": 155
        }
      ],
      "declare": false,
      "start": 138,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
