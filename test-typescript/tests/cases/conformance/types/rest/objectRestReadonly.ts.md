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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 22,
        "name": "ObjType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 25,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 40,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 69,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 61,
              "name": "quux",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 101,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 92,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 93,
                      "end": 100,
                      "typeName": {
                        "type": "Identifier",
                        "start": 93,
                        "end": 100,
                        "name": "ObjType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 111,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 113,
                  "end": 118,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 122,
                "end": 132,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 125,
                  "name": "baz",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 127,
                  "end": 132,
                  "value": "qux",
                  "raw": "'qux'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 136,
                "end": 148,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 140,
                  "name": "quux",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 148,
                  "value": "quuz",
                  "raw": "'quuz'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 159,
            "end": 175,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 164,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 166,
                "end": 173,
                "argument": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 173,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 178,
            "end": 181,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 198,
      "expression": {
        "type": "UnaryExpression",
        "start": 183,
        "end": 198,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 190,
          "end": 198,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 194,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
