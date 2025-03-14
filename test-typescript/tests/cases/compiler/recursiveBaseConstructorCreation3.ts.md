__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 18,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 26,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 78,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 77,
                  "decorators": [],
                  "name": "xyz",
                  "optional": false
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
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "abc",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 60,
            "end": 61,
            "typeName": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 81,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 114,
        "body": []
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "xyz",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "abc",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 135,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 123,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 126,
            "end": 135,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "xyz",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 183,
                  "decorators": [],
                  "name": "xyz",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 186,
            "end": 193,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 186,
              "end": 189,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
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
