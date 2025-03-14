__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 21,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 39,
        "end": 45,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 41,
          "end": 45
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 35,
              "end": 36,
              "typeName": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 77,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 76,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 52,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 52,
          "end": 74,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 53,
              "end": 65,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 54,
                  "end": 64,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  }
                }
              ]
            },
            {
              "type": "TSObjectKeyword",
              "start": 67,
              "end": 73
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 107,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 106,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 82,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 82,
          "end": 104,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 83,
              "end": 95,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 84,
                  "end": 94,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 86,
                    "end": 94,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 88,
                      "end": 94
                    }
                  }
                }
              ]
            },
            {
              "type": "TSBigIntKeyword",
              "start": 97,
              "end": 103
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
