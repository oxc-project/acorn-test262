__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "name": "base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 108,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 47,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 58,
              "end": 89,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 83,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 94,
            "end": 106,
            "argument": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "name": "Gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 131,
        "end": 140,
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "name": "base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 143,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 121,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 170,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "name": "Spec",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "name": "Gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 203,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
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
          "object": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "name": "Spec",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "name": "prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
