__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Flags",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 43,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 41,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 31,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 43,
      "end": 44
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 62,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 61,
            "decorators": [],
            "name": "flags",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 61,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 61,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 61,
                  "decorators": [],
                  "name": "Flags",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 71,
      "expression": {
        "type": "MemberExpression",
        "start": 63,
        "end": 70,
        "object": {
          "type": "Identifier",
          "start": 63,
          "end": 68,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 80,
      "expression": {
        "type": "MemberExpression",
        "start": 72,
        "end": 79,
        "object": {
          "type": "Identifier",
          "start": 72,
          "end": 77,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 114,
      "expression": {
        "type": "MemberExpression",
        "start": 81,
        "end": 113,
        "object": {
          "type": "Identifier",
          "start": 81,
          "end": 86,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 87,
          "end": 113,
          "decorators": [],
          "name": "isNotNecessarilyNeverFalse",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 115,
      "end": 137,
      "expression": {
        "type": "MemberExpression",
        "start": 115,
        "end": 136,
        "object": {
          "type": "Identifier",
          "start": 115,
          "end": 120,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 121,
          "end": 135,
          "value": "this is fine",
          "raw": "'this is fine'"
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 139,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 154,
        "decorators": [],
        "name": "Empty",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 155,
        "end": 158,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 176,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 175,
            "decorators": [],
            "name": "empty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 175,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 175,
                  "decorators": [],
                  "name": "Empty",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 188,
      "expression": {
        "type": "MemberExpression",
        "start": 177,
        "end": 187,
        "object": {
          "type": "Identifier",
          "start": 177,
          "end": 182,
          "decorators": [],
          "name": "empty",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 183,
          "end": 187,
          "decorators": [],
          "name": "nope",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 208,
      "expression": {
        "type": "MemberExpression",
        "start": 189,
        "end": 207,
        "object": {
          "type": "Identifier",
          "start": 189,
          "end": 194,
          "decorators": [],
          "name": "empty",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 195,
          "end": 206,
          "value": "that's ok",
          "raw": "\"that's ok\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
