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
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
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
                "start": 19,
                "end": 31
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              },
              "start": 32,
              "end": 41
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 18,
            "end": 41
          }
        ],
        "start": 16,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Flags",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 60
                },
                "typeArguments": null,
                "start": 55,
                "end": 60
              },
              "start": 53,
              "end": 60
            },
            "start": 48,
            "end": 60
          },
          "init": null,
          "definite": false,
          "start": 48,
          "end": 60
        }
      ],
      "declare": false,
      "start": 44,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 67
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 69
        },
        "optional": false,
        "computed": false,
        "start": 62,
        "end": 69
      },
      "directive": null,
      "start": 62,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "optional": false,
        "computed": false,
        "start": 71,
        "end": 78
      },
      "directive": null,
      "start": 71,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 80,
          "end": 85
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNotNecessarilyNeverFalse",
          "optional": false,
          "typeAnnotation": null,
          "start": 86,
          "end": 112
        },
        "optional": false,
        "computed": false,
        "start": 80,
        "end": 112
      },
      "directive": null,
      "start": 80,
      "end": 113
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 119
        },
        "property": {
          "type": "Literal",
          "value": "this is fine",
          "raw": "'this is fine'",
          "start": 120,
          "end": 134
        },
        "optional": false,
        "computed": true,
        "start": 114,
        "end": 135
      },
      "directive": null,
      "start": 114,
      "end": 136
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 153
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 154,
        "end": 157
      },
      "declare": false,
      "start": 138,
      "end": 157
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Empty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 174
                },
                "typeArguments": null,
                "start": 169,
                "end": 174
              },
              "start": 167,
              "end": 174
            },
            "start": 162,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 162,
          "end": 174
        }
      ],
      "declare": false,
      "start": 158,
      "end": 175
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 181
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "nope",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 186
        },
        "optional": false,
        "computed": false,
        "start": 176,
        "end": 186
      },
      "directive": null,
      "start": 176,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "empty",
          "optional": false,
          "typeAnnotation": null,
          "start": 188,
          "end": 193
        },
        "property": {
          "type": "Literal",
          "value": "not allowed either",
          "raw": "\"not allowed either\"",
          "start": 194,
          "end": 214
        },
        "optional": false,
        "computed": true,
        "start": 188,
        "end": 215
      },
      "directive": null,
      "start": 188,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 216
}
```
