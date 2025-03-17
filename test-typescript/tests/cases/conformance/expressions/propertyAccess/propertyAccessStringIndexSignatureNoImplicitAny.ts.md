__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 43,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Flags",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 31,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  }
                },
                "decorators": [],
                "optional": false
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
      "type": "VariableDeclaration",
      "start": 44,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 60,
            "name": "flags",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 60,
                  "name": "Flags",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 70,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 69,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 67,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 79,
      "expression": {
        "type": "MemberExpression",
        "start": 71,
        "end": 78,
        "object": {
          "type": "Identifier",
          "start": 71,
          "end": 76,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 113,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 112,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 85,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 86,
          "end": 112,
          "name": "isNotNecessarilyNeverFalse",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 136,
      "expression": {
        "type": "MemberExpression",
        "start": 114,
        "end": 135,
        "object": {
          "type": "Identifier",
          "start": 114,
          "end": 119,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 120,
          "end": 134,
          "value": "this is fine",
          "raw": "'this is fine'"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 138,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 153,
        "name": "Empty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 158,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 174,
            "name": "empty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 174,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 169,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 174,
                  "name": "Empty",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 187,
      "expression": {
        "type": "MemberExpression",
        "start": 176,
        "end": 186,
        "object": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "name": "empty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "name": "nope",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 216,
      "expression": {
        "type": "MemberExpression",
        "start": 188,
        "end": 215,
        "object": {
          "type": "Identifier",
          "start": 188,
          "end": 193,
          "name": "empty",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Literal",
          "start": 194,
          "end": 214,
          "value": "not allowed either",
          "raw": "\"not allowed either\""
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
