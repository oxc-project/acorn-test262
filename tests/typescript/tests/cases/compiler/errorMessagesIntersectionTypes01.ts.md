__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 228,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 37,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "fooProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 36,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 29,
                "end": 36
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 79,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 79,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 68,
              "decorators": [],
              "name": "barProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 54,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 81,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 118,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 106,
          "end": 109,
          "expression": {
            "type": "Identifier",
            "start": 106,
            "end": 109,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 111,
          "end": 114,
          "expression": {
            "type": "Identifier",
            "start": 111,
            "end": 114,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 97,
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 120,
      "end": 164,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 143,
        "decorators": [],
        "name": "mixBar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 147,
          "end": 153,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 150,
            "end": 153,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 152,
              "end": 153,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 154,
        "end": 163,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 156,
          "end": 163,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 156,
              "end": 157,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 160,
              "end": 163,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 163,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 143,
        "end": 146,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 144,
            "end": 145,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
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
      "start": 166,
      "end": 228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 227,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 184,
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 184,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 184,
                  "decorators": [],
                  "name": "FooBar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 187,
            "end": 227,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 194,
                "end": 226,
                "properties": [
                  {
                    "type": "Property",
                    "start": 200,
                    "end": 224,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 207,
                      "decorators": [],
                      "name": "fooProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 209,
                      "end": 224,
                      "raw": "\"frizzlebizzle\"",
                      "value": "frizzlebizzle"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 193,
              "decorators": [],
              "name": "mixBar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
