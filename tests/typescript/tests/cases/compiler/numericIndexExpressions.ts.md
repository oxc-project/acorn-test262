__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Numbers1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          }
        ],
        "start": 19,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strings1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 63,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 75
          }
        ],
        "start": 57,
        "end": 77
      },
      "declare": false,
      "start": 38,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Numbers1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 97
                },
                "typeArguments": null,
                "start": 89,
                "end": 97
              },
              "start": 87,
              "end": 97
            },
            "start": 86,
            "end": 97
          },
          "init": null,
          "definite": false,
          "start": 86,
          "end": 97
        }
      ],
      "declare": false,
      "start": 82,
      "end": 98
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 101,
            "end": 102
          },
          "optional": false,
          "computed": true,
          "start": 99,
          "end": 103
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 106,
          "end": 107
        },
        "start": 99,
        "end": 107
      },
      "directive": null,
      "start": 99,
      "end": 108
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 119
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 120,
            "end": 123
          },
          "optional": false,
          "computed": true,
          "start": 118,
          "end": 124
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 127,
          "end": 128
        },
        "start": 118,
        "end": 128
      },
      "directive": null,
      "start": 118,
      "end": 129
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Strings1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 155
                },
                "typeArguments": null,
                "start": 147,
                "end": 155
              },
              "start": 145,
              "end": 155
            },
            "start": 144,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 155
        }
      ],
      "declare": false,
      "start": 140,
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
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "property": {
            "type": "Literal",
            "value": "1",
            "raw": "'1'",
            "start": 159,
            "end": 162
          },
          "optional": false,
          "computed": true,
          "start": 157,
          "end": 163
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 166,
          "end": 167
        },
        "start": 157,
        "end": 167
      },
      "directive": null,
      "start": 157,
      "end": 168
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 190,
            "end": 191
          },
          "optional": false,
          "computed": true,
          "start": 188,
          "end": 192
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 195,
          "end": 196
        },
        "start": 188,
        "end": 196
      },
      "directive": null,
      "start": 188,
      "end": 197
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
