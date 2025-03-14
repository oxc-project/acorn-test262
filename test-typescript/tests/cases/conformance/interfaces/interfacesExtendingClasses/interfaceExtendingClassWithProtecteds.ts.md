__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 38,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 38,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 36,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
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
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 91,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 89,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 88,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 60,
          "end": 63,
          "expression": {
            "type": "Identifier",
            "start": 60,
            "end": 63,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 93,
      "end": 136,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 124,
            "end": 134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 114,
          "end": 117,
          "expression": {
            "type": "Identifier",
            "start": 114,
            "end": 117,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "decorators": [],
        "name": "I2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 147,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 147,
                  "decorators": [],
                  "name": "I2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 157,
            "end": 160,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "y",
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
      "start": 162,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 174,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "x",
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
