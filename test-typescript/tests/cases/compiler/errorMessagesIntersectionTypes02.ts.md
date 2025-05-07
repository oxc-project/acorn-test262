__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 238,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 47,
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
              "end": 46,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 29,
                "end": 46,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 29,
                    "end": 36,
                    "literal": {
                      "type": "Literal",
                      "start": 29,
                      "end": 36,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 39,
                    "end": 46,
                    "literal": {
                      "type": "Literal",
                      "start": 39,
                      "end": 46,
                      "raw": "\"world\"",
                      "value": "world",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
      "start": 51,
      "end": 89,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 89,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 87,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 78,
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
              "start": 78,
              "end": 86,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 64,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 91,
      "end": 128,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 128,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 116,
          "end": 119,
          "expression": {
            "type": "Identifier",
            "start": 116,
            "end": 119,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 121,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
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
        "start": 101,
        "end": 107,
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 130,
      "end": 174,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 153,
        "decorators": [],
        "name": "mixBar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 157,
          "end": 163,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 160,
            "end": 163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 162,
              "end": 163,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
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
        "start": 164,
        "end": 173,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 166,
          "end": 173,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 166,
              "end": 167,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 166,
                "end": 167,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 170,
              "end": 173,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
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
        "start": 153,
        "end": 156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
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
      "start": 176,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 237,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 194,
            "decorators": [],
            "name": "fooBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 194,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 188,
                "end": 194,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 194,
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
            "start": 197,
            "end": 237,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 204,
                "end": 236,
                "properties": [
                  {
                    "type": "Property",
                    "start": 210,
                    "end": 234,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 217,
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
                      "start": 219,
                      "end": 234,
                      "raw": "\"frizzlebizzle\"",
                      "value": "frizzlebizzle",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 197,
              "end": 203,
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
