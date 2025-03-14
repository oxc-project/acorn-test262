baseExpressionTypeParameters.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 223,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 22,
      "end": 108,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 108,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 47,
            "end": 89,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 58,
              "end": 89,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 83,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 81,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 82,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "Base",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "ReturnStatement",
            "start": 94,
            "end": 106,
            "argument": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "Base",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
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
      "type": "ClassDeclaration",
      "start": 110,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 143,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "Gen",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 131,
        "end": 140,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "decorators": [],
          "name": "base",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 135,
          "end": 138,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 136,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 121,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
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
      "type": "ClassDeclaration",
      "start": 170,
      "end": 203,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 203,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "decorators": [],
        "name": "Spec",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "decorators": [],
        "name": "Gen",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 192,
        "end": 200,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 193,
            "end": 199
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 223,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 205,
        "end": 222,
        "expression": {
          "type": "MemberExpression",
          "start": 213,
          "end": 222,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "decorators": [],
            "name": "Spec",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "prop",
            "optional": false
          }
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        }
      }
    }
  ],
  "sourceType": "script"
}
```
