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
                    "start": 34,
                    "end": 40
                  },
                  "start": 32,
                  "end": 40
                },
                "start": 31,
                "end": 40
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 14,
            "end": 50
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
                    "start": 75,
                    "end": 81
                  },
                  "start": 73,
                  "end": 81
                },
                "start": 72,
                "end": 81
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
                  "start": 84,
                  "end": 86
                },
                "start": 84,
                "end": 86
              },
              "start": 82,
              "end": 86
            },
            "readonly": true,
            "static": true,
            "accessibility": null,
            "start": 55,
            "end": 86
          }
        ],
        "start": 8,
        "end": 88
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 88
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
            "start": 90,
            "end": 91
          },
          "property": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 92,
            "end": 97
          },
          "optional": false,
          "computed": true,
          "start": 90,
          "end": 98
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 101,
          "end": 102
        },
        "start": 90,
        "end": 102
      },
      "directive": null,
      "start": 90,
      "end": 102
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
            "start": 103,
            "end": 104
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 103,
          "end": 108
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 111,
          "end": 112
        },
        "start": 103,
        "end": 112
      },
      "directive": null,
      "start": 103,
      "end": 113
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
            "start": 120,
            "end": 123
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 127
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 128,
              "end": 133
            },
            "optional": false,
            "computed": true,
            "start": 126,
            "end": 134
          },
          "definite": false,
          "start": 120,
          "end": 134
        }
      ],
      "declare": false,
      "start": 114,
      "end": 134
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
            "start": 135,
            "end": 136
          },
          "property": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 137,
            "end": 139
          },
          "optional": false,
          "computed": true,
          "start": 135,
          "end": 140
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 143,
          "end": 145
        },
        "start": 135,
        "end": 145
      },
      "directive": null,
      "start": 135,
      "end": 145
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
            "start": 146,
            "end": 147
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 148,
            "end": 149
          },
          "optional": false,
          "computed": true,
          "start": 146,
          "end": 150
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 153,
          "end": 154
        },
        "start": 146,
        "end": 154
      },
      "directive": null,
      "start": 146,
      "end": 155
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
            "start": 162,
            "end": 165
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "property": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 170,
              "end": 172
            },
            "optional": false,
            "computed": true,
            "start": 168,
            "end": 173
          },
          "definite": false,
          "start": 162,
          "end": 173
        }
      ],
      "declare": false,
      "start": 156,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
