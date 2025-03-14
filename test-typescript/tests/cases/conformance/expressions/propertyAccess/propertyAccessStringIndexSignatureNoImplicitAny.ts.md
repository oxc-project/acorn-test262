propertyAccessStringIndexSignatureNoImplicitAny.ts
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
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 41,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 34,
                "end": 41
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Flags",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 60,
            "decorators": [],
            "name": "flags",
            "optional": false,
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
                  "decorators": [],
                  "name": "Flags",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 70,
      "expression": {
        "type": "MemberExpression",
        "start": 62,
        "end": 69,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 62,
          "end": 67,
          "decorators": [],
          "name": "flags",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 71,
      "end": 79,
      "expression": {
        "type": "MemberExpression",
        "start": 71,
        "end": 78,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 71,
          "end": 76,
          "decorators": [],
          "name": "flags",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 113,
      "expression": {
        "type": "MemberExpression",
        "start": 80,
        "end": 112,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 80,
          "end": 85,
          "decorators": [],
          "name": "flags",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 86,
          "end": 112,
          "decorators": [],
          "name": "isNotNecessarilyNeverFalse",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 136,
      "expression": {
        "type": "MemberExpression",
        "start": 114,
        "end": 135,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 114,
          "end": 119,
          "decorators": [],
          "name": "flags",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 120,
          "end": 134,
          "raw": "'this is fine'",
          "value": "this is fine"
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 138,
      "end": 157,
      "body": {
        "type": "TSInterfaceBody",
        "start": 154,
        "end": 157,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 153,
        "decorators": [],
        "name": "Empty",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 174,
            "decorators": [],
            "name": "empty",
            "optional": false,
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
                  "decorators": [],
                  "name": "Empty",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 187,
      "expression": {
        "type": "MemberExpression",
        "start": 176,
        "end": 186,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 176,
          "end": 181,
          "decorators": [],
          "name": "empty",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "decorators": [],
          "name": "nope",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 216,
      "expression": {
        "type": "MemberExpression",
        "start": 188,
        "end": 215,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 188,
          "end": 193,
          "decorators": [],
          "name": "empty",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 194,
          "end": 214,
          "raw": "\"not allowed either\"",
          "value": "not allowed either"
        }
      }
    }
  ],
  "sourceType": "script"
}
```
