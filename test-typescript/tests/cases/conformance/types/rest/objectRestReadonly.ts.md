__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 199,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 10,
      "end": 71,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "decorators": [],
        "name": "ObjType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 25,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "decorators": [],
              "name": "quux",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 101,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 101,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 100,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 100,
                        "decorators": [],
                        "name": "ObjType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 92,
                  "decorators": [],
                  "name": "Readonly",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 104,
            "end": 151,
            "properties": [
              {
                "type": "Property",
                "start": 108,
                "end": 118,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 111,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 113,
                  "end": 118,
                  "raw": "'bar'",
                  "value": "bar"
                }
              },
              {
                "type": "Property",
                "start": 122,
                "end": 132,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 132,
                  "raw": "'qux'",
                  "value": "qux"
                }
              },
              {
                "type": "Property",
                "start": 136,
                "end": 148,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "decorators": [],
                  "name": "quux",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 148,
                  "raw": "'quuz'",
                  "value": "quuz"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 181,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 159,
            "end": 175,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 164,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 166,
                "end": 173,
                "argument": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 173,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 198,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 183,
        "end": 198,
        "argument": {
          "type": "MemberExpression",
          "start": 190,
          "end": 198,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
