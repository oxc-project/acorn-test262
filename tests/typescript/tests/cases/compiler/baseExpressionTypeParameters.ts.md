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
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 108,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 47,
            "end": 89,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 58,
              "end": 89,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 68,
                  "end": 83,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 79,
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 143,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 119,
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "CallExpression",
        "start": 131,
        "end": 140,
        "callee": {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
        },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "arguments": [],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 143,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 170,
      "end": 203,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null
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
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 201,
        "end": 203,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 223,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 205,
        "end": 222,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        },
        "expression": {
          "type": "MemberExpression",
          "start": 213,
          "end": 222,
          "object": {
            "type": "Identifier",
            "start": 213,
            "end": 217,
            "decorators": [],
            "name": "Spec",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
