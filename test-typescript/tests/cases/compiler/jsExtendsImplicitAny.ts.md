__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 20,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 31,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 21,
        "end": 30,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 21,
          "end": 28,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 29,
          "end": 30,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 70,
        "end": 73,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 74,
      "end": 84,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 74,
        "end": 83,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 74,
          "end": 81,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 147,
        "end": 149,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 145,
        "end": 146,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 160,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 150,
        "end": 159,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 150,
          "end": 157,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
