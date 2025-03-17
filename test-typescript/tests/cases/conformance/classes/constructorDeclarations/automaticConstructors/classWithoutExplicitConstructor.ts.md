__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 19,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 18,
              "end": 19,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 24,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 35,
              "raw": "'hello'",
              "value": "hello"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 48,
            "end": 55,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 63,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 66,
            "end": 77,
            "arguments": [
              {
                "type": "Literal",
                "start": 72,
                "end": 76,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 119,
            "end": 124,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 129,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 133,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 133,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 140,
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 96,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 111,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 107,
              "end": 111,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 107,
                "end": 111,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 145,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 153,
            "end": 160,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 171,
            "end": 182,
            "arguments": [
              {
                "type": "Literal",
                "start": 177,
                "end": 181,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
