unusedTypeParametersCheckedByNoUnusedParameters.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 19,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 37,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 36,
        "members": []
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 57,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 57,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 50,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 57,
      "end": 58
    },
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 71,
        "end": 96,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 94,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 94,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 94,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 85,
                "end": 88,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 86,
                    "end": 87,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 96,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 107,
            "end": 119,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 119,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 107,
              "end": 110,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 108,
                  "end": 109,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
