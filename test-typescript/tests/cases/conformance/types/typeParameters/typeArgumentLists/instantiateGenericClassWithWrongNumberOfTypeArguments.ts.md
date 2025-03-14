instantiateGenericClassWithWrongNumberOfTypeArguments.ts
```json
{
  "type": "Program",
  "start": 167,
  "end": 302,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 167,
      "end": 191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 178,
        "end": 191,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 184,
            "end": 189,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
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
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
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
      "type": "VariableDeclaration",
      "start": 193,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 198,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 201,
            "end": 224,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 206,
              "end": 222,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 207,
                  "end": 213
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 215,
                  "end": 221
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 262,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 241,
        "end": 262,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 247,
            "end": 251,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 248,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 250,
                "end": 251,
                "typeName": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 251,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 260,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 260,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 260,
                  "decorators": [],
                  "name": "U",
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
        "start": 233,
        "end": 234,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 234,
        "end": 240,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 235,
            "end": 236,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 238,
            "end": 239,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 283,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 286,
            "end": 301,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 291,
              "end": 299,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 292,
                  "end": 298
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
